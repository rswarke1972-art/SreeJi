import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { STORY_CATEGORIES } from '../../data/content';
import { BookOpen } from 'lucide-react';
import { PressedFlower } from '../BotanicalElements';

export const ShelfOfStories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(STORY_CATEGORIES[0].id);

  return (
    <ChapterWrapper
      id="shelf-of-stories"
      chapterNumber="06"
      title="A Shelf of Stories"
      tagline="Every book opens a different window."
      cardVariant="paper"
    >
      <div className="space-y-10">
        {/* Poetic Intro */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "Every book opens a different window. Some take us to places we've never visited, others introduce us to people we've never met, and some leave us thinking long after the final page."
          </p>
          <p className="font-sans text-xs md:text-sm text-forest/75 max-w-lg mx-auto">
            From timeless historical epics to quiet discoveries of the human heart, each volume is a journey taken at one's own pace.
          </p>
        </div>

        {/* The 3 Interactive Shelves */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STORY_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-ivory-soft border-forest shadow-md -translate-y-1'
                    : 'bg-white/70 border-sage/30 hover:border-sage hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-full ${isSelected ? 'bg-forest text-ivory' : 'bg-sage/20 text-forest'}`}>
                    <BookOpen className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-sans uppercase tracking-widest text-dusty-dark font-semibold">
                      Selected
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl text-forest font-medium mb-1">
                  {cat.title}
                </h3>
                <p className="font-serif italic text-xs text-warmBrown mb-3">
                  "{cat.tagline}"
                </p>

                <p className="font-sans text-xs text-forest/80 leading-relaxed mb-4 flex-grow">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-sage/20">
                  {cat.themes.map((theme, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-sans px-2 py-0.5 rounded-md bg-ivory text-forest/75 border border-sage/20"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Shelf Close-up View */}
        <div className="p-6 rounded-2xl bg-white border border-sage/30 shadow-inner-paper max-w-2xl mx-auto flex items-center gap-4">
          <PressedFlower className="w-8 h-8 text-dusty flex-shrink-0" />
          <div className="text-sm font-serif italic text-forest leading-relaxed">
            "A collection of books is not about numbers; it is about the quiet conversations waiting between the covers."
          </div>
        </div>
      </div>
    </ChapterWrapper>
  );
};
