import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { PressedFlower } from '../BotanicalElements';

export const BeautyOfSimplicity: React.FC = () => {
  return (
    <ChapterWrapper
      id="beauty-of-simplicity"
      chapterNumber="12"
      title="The Beauty of Simplicity"
      tagline="Being yourself doesn't need an elaborate explanation."
      cardVariant="paper"
    >
      <div className="max-w-xl mx-auto text-center space-y-8 py-6">
        {/* Single restrained botanical flower */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-ivory border border-sage/30 shadow-inner-paper">
            <PressedFlower className="w-14 h-14" color="#A6B49A" />
          </div>
        </div>

        {/* Quiet Statement */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium tracking-tight">
            "Being yourself doesn't need an elaborate explanation."
          </h3>
          <p className="font-sans text-sm sm:text-base text-forest/80 leading-relaxed max-w-lg mx-auto">
            "Some things become beautiful precisely because they remain natural. There is no need to imitate someone else's way of being."
          </p>
        </div>

        <div className="pt-4 border-t border-sage/20">
          <p className="font-serif italic text-xs text-warmBrown max-w-md mx-auto">
            Natural simplicity is not an absence of depth; it is the confidence of remaining true without requiring pretense.
          </p>
        </div>
      </div>
    </ChapterWrapper>
  );
};

