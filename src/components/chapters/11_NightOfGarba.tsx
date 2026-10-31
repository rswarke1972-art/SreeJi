import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Music2 } from 'lucide-react';

export const NightOfGarba: React.FC = () => {
  return (
    <ChapterWrapper
      id="night-of-garba"
      chapterNumber="11"
      title="A Little Night of Garba"
      tagline="Some experiences are waiting for the right moment."
      cardVariant="translucent"
    >
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Festive Atmosphere Graphic */}
        <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-tr from-dusty/20 via-ivory-soft to-sage/20 border border-dusty/40 shadow-xs overflow-hidden">
          {/* Subtle Circular Movement Motif */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
            <div className="w-64 h-64 border-2 border-dashed border-forest rounded-full animate-spin [animation-duration:40s]" />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="p-3 rounded-full bg-dusty/20 text-dusty-dark mb-4">
              <Music2 className="w-6 h-6" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-forest font-normal italic leading-snug mb-4">
              "Some experiences are waiting for the right moment. Perhaps one day, a little music, a few steps, and a new memory will become one of them."
            </blockquote>

            <p className="font-sans text-xs sm:text-sm text-forest/75 max-w-md mx-auto leading-relaxed">
              Inspired by the wish to learn and try the graceful circular rhythm of Garba—where warm lamps glow and laughter fills the air.
            </p>
          </div>
        </div>

        <p className="text-xs font-serif italic text-warmBrown/80">
          A joyful nod to new adventures and the simple excitement of trying something joyful.
        </p>
      </div>
    </ChapterWrapper>
  );
};
