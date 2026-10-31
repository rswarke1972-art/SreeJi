import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';

export const Kindness: React.FC = () => {
  return (
    <ChapterWrapper
      id="kindness"
      chapterNumber="13"
      title="Kindness Comes Around"
      tagline="Care found in the smallest details."
      cardVariant="paper"
    >
      <div className="max-w-2xl mx-auto space-y-8 text-center">
        {/* Core Thought */}
        <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
          "Sometimes care is found in the smallest details: remembering something, noticing a change, explaining patiently, or putting genuine effort into something made by hand."
        </p>

        {/* Small Tokens of Care */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2">
          <div className="p-5 rounded-xl bg-ivory-soft border border-sage/20 shadow-xs">
            <span className="font-serif text-xs uppercase tracking-widest text-dusty-dark font-medium block mb-1">
              Noticing
            </span>
            <h4 className="font-serif text-base text-forest font-medium mb-1">Remembering Little Habits</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Quiet attentiveness that notices how people feel without them having to say it loudly.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-soft border border-sage/20 shadow-xs">
            <span className="font-serif text-xs uppercase tracking-widest text-forest-light font-medium block mb-1">
              Sincerity
            </span>
            <h4 className="font-serif text-base text-forest font-medium mb-1">Actions Matching Words</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Believing that genuine affection and respect are demonstrated through real consistency.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-ivory-soft border border-sage/20 shadow-xs">
            <span className="font-serif text-xs uppercase tracking-widest text-warmBrown font-medium block mb-1">
              Heart
            </span>
            <h4 className="font-serif text-base text-forest font-medium mb-1">Made With Genuine Effort</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Cherishing handmade things and the time someone dedicated to craft something personal.
            </p>
          </div>
        </div>

        <p className="text-xs font-serif italic text-warmBrown/70">
          The quiet gestures that leave lasting warmth long after words fade.
        </p>
      </div>
    </ChapterWrapper>
  );
};
