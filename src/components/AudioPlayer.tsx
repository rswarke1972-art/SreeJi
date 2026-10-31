import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Waves } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.35);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const isPlayingRef = useRef<boolean>(false);

  // Setup Web Audio nodes for realistic ocean ambient surf
  const initAudio = () => {
    if (audioCtxRef.current) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // 5-second buffer of pinkish noise
      const bufferSize = ctx.sampleRate * 5;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
        b6 = white * 0.115926;
      }

      // Loop source
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Low pass filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 350;
      filter.Q.value = 2.5;
      filterNodeRef.current = filter;

      // LFO for wave swelling every ~5.5s
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.18; // approx 5.5s wave cycle
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 280; // modulate filter cutoff between ~70Hz and 630Hz
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);
      lfo.start();
      lfoRef.current = lfo;

      // Main Gain
      const masterGain = ctx.createGain();
      masterGain.gain.value = volume;
      gainNodeRef.current = masterGain;

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);
      whiteNoise.start(0);

    } catch (e) {
      console.warn("Web Audio not supported or blocked", e);
    }
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    if (audioCtxRef.current?.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (isPlaying) {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current?.currentTime || 0, 0.2);
      }
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      if (gainNodeRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(volume, audioCtxRef.current?.currentTime || 0, 0.2);
      }
      setIsPlaying(true);
      isPlayingRef.current = true;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (gainNodeRef.current && isPlaying && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(val, audioCtxRef.current.currentTime, 0.1);
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-ivory-soft/90 border border-sage/30 shadow-sm backdrop-blur-sm transition-all hover:border-sage max-w-full">
      <button
        onClick={toggleSound}
        type="button"
        aria-label={isPlaying ? "Mute ocean wave ambience" : "Play peaceful ocean wave ambience"}
        className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-forest hover:text-forest-dark transition-colors touch-manipulation active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 ${isPlaying ? 'bg-ocean' : 'bg-warmBrown/40'}`}></span>
        </span>
        <Waves className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isPlaying ? 'text-ocean animate-pulse' : 'text-warmBrown'}`} />
        <span>{isPlaying ? 'Waves: Playing' : 'Listen to Ocean Waves'}</span>
      </button>

      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ocean" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-warmBrown/60" />
      )}

      {isPlaying && (
        <input
          type="range"
          min="0"
          max="0.8"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-14 sm:w-16 h-1 bg-sage/30 rounded-lg appearance-none cursor-pointer accent-ocean"
          aria-label="Ocean wave volume"
        />
      )}
    </div>
  );
};

