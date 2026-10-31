import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { POEM_STANZAS } from '../../data/content';
import { PressedFlower, StorybookDivider } from '../BotanicalElements';
import { Feather, ChevronLeft, ChevronRight } from 'lucide-react';

export const FortyLinesPoem: React.FC = () => {
  const [activeStanza, setActiveStanza] = useState(0);

  return (
    <ChapterWrapper
      id="forty-lines"
      chapterNumber="18"
      title="Forty Lines for Rai"
      tagline="Five stanzas. Forty lines. A poetic tribute."
      cardVariant="paper"
      className="max-w-3xl"
    >
      <div className="space-y-10">
        {/* Poem Structure Tag */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-sage/20 pb-4">
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-dusty" />
            <span className="font-serif text-xs uppercase tracking-widest text-forest font-medium">
              Stanza {activeStanza + 1} of 5 · Stanza Layout
            </span>
          </div>

          {/* Stanza pagination buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveStanza((prev) => Math.max(0, prev - 1))}
              disabled={activeStanza === 0}
              className="p-1.5 rounded-full hover:bg-ivory text-forest disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous stanza"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="font-serif text-xs px-2 text-warmBrown font-medium">
              Stanza {activeStanza + 1} / 5
            </span>

            <button
              onClick={() => setActiveStanza((prev) => Math.min(POEM_STANZAS.length - 1, prev + 1))}
              disabled={activeStanza === POEM_STANZAS.length - 1}
              className="p-1.5 rounded-full hover:bg-ivory text-forest disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next stanza"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Current Stanza Presentation */}
        <div className="relative p-5 sm:p-8 md:p-12 rounded-2xl bg-[#FFFDF7] border border-[#EFE9DC] shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-8 justify-between">
          {/* Stanza Text */}
          <div className="flex-1 space-y-4 text-center md:text-left w-full">
            <div className="mb-3 sm:mb-4">
              <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-forest font-medium">
                {POEM_STANZAS[activeStanza].title}
              </h4>
              <p className="font-serif italic text-xs text-warmBrown mt-0.5">
                {POEM_STANZAS[activeStanza].theme}
              </p>
            </div>

            <div className="space-y-2 font-serif text-sm sm:text-base md:text-lg text-forest/90 leading-relaxed italic px-1">
              {POEM_STANZAS[activeStanza].lines.map((line, idx) => (
                <p key={idx} className="tracking-wide">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Botanical Accompanying Illustration */}
          <div className="flex md:flex-col items-center justify-center p-3 sm:p-6 rounded-2xl bg-ivory/50 border border-sage/20 w-full md:w-auto gap-2 md:gap-0">
            <PressedFlower className="w-10 h-10 sm:w-14 sm:h-14 text-dusty md:mb-3" />
            <span className="text-[10px] font-sans uppercase tracking-widest text-sage-dark font-medium">
              8 Lines
            </span>
          </div>
        </div>

        {/* Stanza Direct Selector Dots */}
        <div className="flex justify-center items-center gap-3">
          {POEM_STANZAS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveStanza(i)}
              className={`h-2.5 rounded-full transition-all ${
                activeStanza === i ? 'bg-forest w-8' : 'bg-sage/40 hover:bg-sage w-2.5'
              }`}
              aria-label={`Select stanza ${i + 1}`}
            />
          ))}
        </div>

        <StorybookDivider className="my-6" />

        {/* Final Signature of the Poem */}
        <div className="text-center pt-2">
          <p className="font-serif italic text-xs text-warmBrown mb-2">
            Written with sincere respect & care for Rai's birthday
          </p>
          <p className="font-script text-4xl text-forest">
            Sau
          </p>
        </div>
      </div>
    </ChapterWrapper>
  );
};
