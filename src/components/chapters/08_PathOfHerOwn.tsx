import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Sun } from 'lucide-react';

export const PathOfHerOwn: React.FC = () => {
  return (
    <ChapterWrapper
      id="path-of-her-own"
      chapterNumber="08"
      title="A Path of Her Own"
      tagline="No two flowers are exactly alike. That is what makes a garden beautiful."
      cardVariant="translucent"
    >
      <div className="space-y-10 max-w-3xl mx-auto">
        {/* Core Philosophy Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-sage/15 via-ivory-soft to-dusty/15 border border-sage/30 text-center shadow-xs">
          <Sun className="w-8 h-8 text-dusty mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium mb-3">
            "No two flowers are exactly alike. That is what makes a garden beautiful."
          </h3>
          <p className="font-sans text-sm sm:text-base text-forest/80 leading-relaxed max-w-xl mx-auto">
            "Everyone has a different way of learning, growing, discovering, and finding their own direction. There is no single path that everyone has to follow."
          </p>
        </div>

        {/* Aspects of Individuality Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-white/80 border border-sage/20 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-forest font-serif font-bold text-xs">
              01
            </div>
            <h4 className="font-serif text-lg text-forest font-medium">Independent In Heart</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Preferring to learn and explore at her own pace, giving every thought time to deepen rather than hurrying to keep up with someone else's clock.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/80 border border-sage/20 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-full bg-dusty/20 flex items-center justify-center text-dusty-dark font-serif font-bold text-xs">
              02
            </div>
            <h4 className="font-serif text-lg text-forest font-medium">Understanding Thoroughly</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Valuing depth over superficial ease. Seeking to genuinely comprehend the root of things with quiet curiosity and clarity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/80 border border-sage/20 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-full bg-ocean/20 flex items-center justify-center text-ocean font-serif font-bold text-xs">
              03
            </div>
            <h4 className="font-serif text-lg text-forest font-medium">Authentic Simplicity</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Believing that being oneself requires no elaborate pretense. Straightforward, honest, and grounded in natural sincerity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/80 border border-sage/20 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-full bg-warmBrown/20 flex items-center justify-center text-warmBrown font-serif font-bold text-xs">
              04
            </div>
            <h4 className="font-serif text-lg text-forest font-medium">Freedom to Grow</h4>
            <p className="font-sans text-xs text-forest/75 leading-relaxed">
              Choosing one's own pace with quiet confidence, knowing that each season brings its own blossoms in its own rightful time.
            </p>
          </div>
        </div>
      </div>
    </ChapterWrapper>
  );
};
