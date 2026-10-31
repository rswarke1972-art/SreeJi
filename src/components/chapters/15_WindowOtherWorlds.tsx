import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Globe2 } from 'lucide-react';

export const WindowOtherWorlds: React.FC = () => {
  return (
    <ChapterWrapper
      id="window-other-worlds"
      chapterNumber="15"
      title="A Window Into Other Worlds"
      tagline="Curiosity that reaches across stories, languages, and cultures."
      cardVariant="paper"
    >
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        {/* Core Discovery Thought */}
        <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
          "A curious mind never stays confined to one shore. It listens for the cadence of other languages, explores the poetry of distant traditions, and discovers the world through stories."
        </p>

        {/* Decorative Exploration Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-ivory via-ivory-soft to-sage/10 border border-sage/30 shadow-inner-paper text-left">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-full bg-forest text-ivory">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-lg text-forest font-medium">Stories Beyond Boundaries</h4>
              <span className="text-xs font-serif italic text-warmBrown">Curiosity, literature, and quiet questions</span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-forest/80 leading-relaxed mb-4">
            Whether asking about the rich literary traditions of Bengal, watching narratives from across different cultures, or learning how words sound in another tongue, discovery is always driven by genuine curiosity.
          </p>

          <div className="p-4 rounded-xl bg-white border border-sage/20 text-center">
            <span className="font-serif text-xl sm:text-2xl text-forest font-medium tracking-wide block">
              "গল্প আর ভাষার মাঝে নতুন দিগন্ত"
            </span>
            <span className="font-serif italic text-xs text-warmBrown mt-1 block">
              "Between stories and language lies a new horizon"
            </span>
          </div>
        </div>

        <p className="text-xs font-serif italic text-warmBrown/70">
          Celebrating an open heart that welcomes new perspectives, cultures, and narratives with gentle respect.
        </p>
      </div>
    </ChapterWrapper>
  );
};
