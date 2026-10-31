import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { FLOWERS } from '../../data/content';
import { PressedFlower } from '../BotanicalElements';
import { Sparkles } from 'lucide-react';

export const Garden: React.FC = () => {
  const [selectedFlower, setSelectedFlower] = useState<string | null>(FLOWERS[0].id);

  return (
    <ChapterWrapper
      id="garden"
      chapterNumber="02"
      title="A Garden of Little Things"
      tagline="Some beauty doesn't need to be extraordinary."
      cardVariant="paper"
    >
      <div className="space-y-10">
        {/* Poetic Opening text */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "Some beauty doesn't need to be extraordinary. Sometimes, it is simply a flower opening in the morning, a leaf moving with the breeze, or a little patch of green that makes an ordinary day feel different."
          </p>
          <span className="inline-block mt-3 text-xs uppercase tracking-widest font-sans text-sage-dark font-medium">
            Touch or hover each blossom below to listen to its quiet thought
          </span>
        </div>

        {/* Interactive Flowers Display */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 pt-2 sm:pt-4">
          {FLOWERS.map((flower) => {
            const isSelected = selectedFlower === flower.id;
            return (
              <button
                key={flower.id}
                onClick={() => setSelectedFlower(flower.id)}
                type="button"
                className={`flex flex-col items-center p-3.5 sm:p-5 rounded-xl border text-center transition-all duration-300 relative group touch-manipulation active:scale-95 ${
                  isSelected
                    ? 'bg-ivory-soft border-dusty shadow-md -translate-y-0.5 sm:-translate-y-1'
                    : 'bg-white/60 border-sage/20 hover:border-sage/40 hover:bg-white'
                }`}
              >
                <div className={`p-2 sm:p-3 rounded-full mb-2 sm:mb-3 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                  <PressedFlower className="w-8 h-8 sm:w-10 sm:h-10" color={flower.color} />
                </div>
                <h4 className="font-serif text-sm sm:text-base text-forest font-medium mb-0.5 sm:mb-1">
                  {flower.name}
                </h4>
                <span className="text-[10px] sm:text-[11px] font-sans text-warmBrown/70">
                  {isSelected ? 'Blooming' : 'Tap to unfold'}
                </span>
                {isSelected && (
                  <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-dusty rounded-full border-2 border-white animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Blossom Reflection Card */}
        {selectedFlower && (
          <div className="max-w-xl mx-auto p-6 rounded-xl bg-ivory/80 border border-sage/30 text-center shadow-inner-paper transition-all duration-500">
            <div className="flex items-center justify-center gap-2 mb-2 text-dusty">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif text-sm italic uppercase tracking-wider text-forest-light">
                {FLOWERS.find(f => f.id === selectedFlower)?.name}
              </span>
            </div>
            <p className="font-serif text-base sm:text-lg text-forest italic leading-relaxed">
              "{FLOWERS.find(f => f.id === selectedFlower)?.reflection}"
            </p>
          </div>
        )}
      </div>
    </ChapterWrapper>
  );
};

