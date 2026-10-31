import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { AudioPlayer } from '../AudioPlayer';
import { Moon, Waves } from 'lucide-react';

export const QuietEvening: React.FC = () => {
  return (
    <ChapterWrapper
      id="quiet-evening"
      chapterNumber="04"
      title="A Quiet Evening"
      tagline="Where the mountain meets the quiet sea."
      cardVariant="paper"
    >
      <div className="space-y-8">
        {/* Poetic Horizon Illustration Frame */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2B3A42] via-[#3F5259] to-[#243338] text-ivory p-8 sm:p-12 shadow-lg text-center flex flex-col items-center justify-between min-h-[300px]">
          {/* Moon and Stars */}
          <div className="flex items-center gap-2 text-ivory/80 mb-6">
            <Moon className="w-5 h-5 text-ivory-soft" />
            <span className="text-xs uppercase tracking-widest font-serif">A Nighttime Shoreline</span>
          </div>

          {/* Mountains & Ocean Stylized Graphic */}
          <div className="w-full max-w-md my-auto py-6">
            <svg viewBox="0 0 400 120" className="w-full h-auto" fill="none">
              {/* Distant Mountains */}
              <path d="M0 80 L70 30 L140 75 L210 20 L290 80 L350 45 L400 80 L400 120 L0 120 Z" fill="#1C262C" opacity="0.8" />
              <path d="M40 85 L120 45 L180 82 L260 38 L340 85 L400 60 L400 120 L0 120 Z" fill="#2E3F47" opacity="0.6" />
              {/* Moon Reflection on Waves */}
              <ellipse cx="200" cy="95" rx="45" ry="3" fill="#FFFDF7" opacity="0.3" />
              <ellipse cx="200" cy="103" rx="60" ry="2.5" fill="#FFFDF7" opacity="0.2" />
              <ellipse cx="200" cy="110" rx="30" ry="2" fill="#FFFDF7" opacity="0.15" />
            </svg>
          </div>

          {/* Quiet Reflection Copy */}
          <div className="max-w-xl mx-auto space-y-3 z-10">
            <p className="font-serif text-lg sm:text-xl text-ivory-soft leading-relaxed font-light">
              "Some places don't ask for anything. They simply let you sit, listen, breathe, and enjoy the moment."
            </p>
            <p className="font-sans text-xs text-ivory/70 leading-relaxed">
              The peaceful meeting of mountains and sea, where dusk settles quietly into night and the only rhythm is the rolling surf.
            </p>
          </div>
        </div>

        {/* Ambient Wave Sound Controller */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-ivory-soft border border-sage/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-ocean/10 text-ocean">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-medium text-forest">Sound of the Night Waves</h4>
              <p className="text-xs text-warmBrown">Gentle ambient waves synthesizer · Completely optional</p>
            </div>
          </div>
          <AudioPlayer />
        </div>
      </div>
    </ChapterWrapper>
  );
};
