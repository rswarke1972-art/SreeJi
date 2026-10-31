import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Smile, Coffee } from 'lucide-react';
import { PressedFlower, DelicateCloud } from '../BotanicalElements';

export const MoreThanOneMood: React.FC = () => {
  const [activeSide, setActiveSide] = useState<'both' | 'playful' | 'quiet'>('both');

  return (
    <ChapterWrapper
      id="more-than-one-mood"
      chapterNumber="14"
      title="More Than One Mood"
      tagline="Lively laughter and thoughtful quiet in one harmonious soul."
      cardVariant="translucent"
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        {/* Intro */}
        <div className="text-center space-y-3">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "A person can enjoy laughter and quiet, conversations and solitude, lively moments and peaceful evenings. None of these sides cancels the others."
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setActiveSide('both')}
            className={`px-3 py-1 rounded-full text-xs font-serif transition-colors ${
              activeSide === 'both' ? 'bg-forest text-ivory' : 'bg-ivory text-forest hover:bg-sage/20'
            }`}
          >
            Both in Harmony
          </button>
          <button
            onClick={() => setActiveSide('playful')}
            className={`px-3 py-1 rounded-full text-xs font-serif transition-colors ${
              activeSide === 'playful' ? 'bg-forest text-ivory' : 'bg-ivory text-forest hover:bg-sage/20'
            }`}
          >
            The Playful Side
          </button>
          <button
            onClick={() => setActiveSide('quiet')}
            className={`px-3 py-1 rounded-full text-xs font-serif transition-colors ${
              activeSide === 'quiet' ? 'bg-forest text-ivory' : 'bg-ivory text-forest hover:bg-sage/20'
            }`}
          >
            The Thoughtful Side
          </button>
        </div>

        {/* Split Artistic Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Side A: Playful & Lively */}
          {(activeSide === 'both' || activeSide === 'playful') && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dusty/20 via-ivory to-sage/10 border border-dusty/30 shadow-xs flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-serif text-dusty-dark font-semibold">
                    The Warm & Cheerful
                  </span>
                  <Smile className="w-4 h-4 text-dusty" />
                </div>
                <h4 className="font-serif text-xl text-forest font-medium mb-2">
                  Chanchal & Teasing
                </h4>
                <p className="font-sans text-xs text-forest/80 leading-relaxed">
                  Surrounded by those she trusts, filled with playful remarks, lively banter, quick wit, and shared laughter that lights up a room.
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <PressedFlower className="w-7 h-7 text-dusty opacity-75" />
              </div>
            </div>
          )}

          {/* Side B: Quiet & Thoughtful */}
          {(activeSide === 'both' || activeSide === 'quiet') && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-skyMuted/20 via-ivory to-ocean/10 border border-skyMuted/40 shadow-xs flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-serif text-ocean-dark font-semibold">
                    The Quiet & Reflective
                  </span>
                  <Coffee className="w-4 h-4 text-ocean" />
                </div>
                <h4 className="font-serif text-xl text-forest font-medium mb-2">
                  Reserved & Contemplative
                </h4>
                <p className="font-sans text-xs text-forest/80 leading-relaxed">
                  Enjoying her own peaceful company, gazing at passing clouds, reading quietly, and holding space for deep, meaningful conversations.
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <DelicateCloud className="w-12 h-7 opacity-70" />
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs font-serif italic text-warmBrown/80">
          A reminder that a complete person is like a rich book—with both lighthearted pages and thoughtful chapters.
        </p>
      </div>
    </ChapterWrapper>
  );
};
