import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { WaxSeal, PressedFlower } from '../BotanicalElements';
import { Sparkles, MailOpen } from 'lucide-react';

export const MadeWithCare: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChapterWrapper
      id="made-with-care"
      chapterNumber="16"
      title="Made With Care"
      tagline="Some gifts are valuable because of the time, thought, and care placed into making them."
      cardVariant="paper"
    >
      <div className="max-w-xl mx-auto space-y-8 text-center">
        {/* Core Thought */}
        <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
          "Some gifts are valuable not because of what they cost, but because of the time, thought, and care placed into making them."
        </p>

        {/* Interactive Envelope / Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#FFFDF7] border border-[#E8E2D5] shadow-book relative overflow-hidden transition-all duration-500">
          {!isOpen ? (
            <div className="flex flex-col items-center space-y-5 py-4">
              <div className="relative cursor-pointer group" onClick={() => setIsOpen(true)}>
                <div className="w-24 h-24 rounded-full bg-ivory border-2 border-dashed border-dusty flex items-center justify-center transform group-hover:scale-105 transition-transform shadow-xs">
                  <WaxSeal className="w-16 h-16" />
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-xl text-forest font-medium">An Envelope Tied with Ribbon</h4>
                <p className="text-xs font-sans text-warmBrown">
                  A personal token folded and sealed with care
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-forest text-ivory text-xs font-serif tracking-wider shadow-sm hover:bg-forest-light transition-all"
              >
                <MailOpen className="w-3.5 h-3.5 text-dusty" />
                <span>Untie the Ribbon & Open</span>
              </button>
            </div>
          ) : (
            <div className="space-y-5 animate-fade-in text-left">
              <div className="flex items-center justify-between border-b border-sage/20 pb-3">
                <div className="flex items-center gap-2">
                  <PressedFlower className="w-6 h-6 text-dusty" />
                  <span className="font-serif text-xs uppercase tracking-widest text-forest font-medium">Handmade Note</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  className="text-xs font-serif text-warmBrown hover:text-forest underline"
                >
                  Fold back
                </button>
              </div>

              <div className="p-4 rounded-xl bg-ivory/60 border border-sage/20 font-serif text-base sm:text-lg text-forest italic leading-relaxed space-y-3">
                <p>
                  "The most meaningful things are never rushed. They are assembled piece by piece, remembering what someone loves, choosing the right words, and hoping it brings a genuine smile."
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 text-xs font-serif text-warmBrown italic">
                <Sparkles className="w-3.5 h-3.5 text-dusty" />
                <span>Crafted by hand for Rai</span>
              </div>
            </div>
          )}
        </div>

        <p className="text-xs font-serif italic text-warmBrown/70">
          A small visual homage to the beauty of handmade effort.
        </p>
      </div>
    </ChapterWrapper>
  );
};
