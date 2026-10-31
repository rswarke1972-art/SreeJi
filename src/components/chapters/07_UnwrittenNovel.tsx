import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Feather } from 'lucide-react';
import { PressedFlower } from '../BotanicalElements';

export const UnwrittenNovel: React.FC = () => {
  return (
    <ChapterWrapper
      id="unwritten-novel"
      chapterNumber="07"
      title="An Unwritten Novel"
      tagline="Enough stories to fill a novel."
      cardVariant="paper"
    >
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Open Book Graphic Illustration */}
        <div className="relative p-8 sm:p-12 rounded-2xl bg-[#FFFDF7] border border-[#E8E2D5] shadow-book overflow-hidden">
          {/* Subtle Book Spine shadow */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-warmBrown/10 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <Feather className="w-8 h-8 text-dusty mb-4 transform -rotate-45" />

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest font-medium tracking-tight mb-4">
              "Some stories are still waiting to be told."
            </h3>

            <p className="font-serif italic text-base sm:text-lg text-warmBrown max-w-lg mx-auto leading-relaxed mb-6">
              "Not every story needs to be written today. Some can wait for the right moment, the right words, and the right page."
            </p>

            <div className="flex items-center gap-3 my-4">
              <span className="h-[1px] w-12 bg-sage/40"></span>
              <PressedFlower className="w-5 h-5 text-dusty" />
              <span className="h-[1px] w-12 bg-sage/40"></span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-forest/75 max-w-md mx-auto leading-relaxed">
              Imagination gathers quiet memories, observations of the sky, conversations, and feelings. When the time comes, every line will fall naturally into place.
            </p>
          </div>
        </div>

        <span className="inline-block text-xs font-serif italic text-warmBrown/70">
          A quiet tribute to the richness of her imagination and thoughts.
        </span>
      </div>
    </ChapterWrapper>
  );
};
