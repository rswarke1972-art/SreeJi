import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PressedFlower, StorybookDivider } from './BotanicalElements';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-sage/20 bg-ivory-soft text-center paper-texture">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        <PressedFlower className="w-10 h-10 text-dusty" />

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-forest font-medium">
            A Little World of Rai
          </h3>
          <p className="font-serif italic text-base text-warmBrown max-w-lg mx-auto leading-relaxed">
            "Not every beautiful thing needs to be extraordinary. Sometimes, the beauty is in the little things, and in the care with which someone notices them."
          </p>
        </div>

        <StorybookDivider className="my-2" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-serif text-forest/75">
          <span>Created with care by Sau for Rai</span>
          <span className="hidden sm:inline">·</span>
          <span>Birthday: November 2, 2026</span>
        </div>

        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-ivory text-xs font-serif hover:bg-forest-light transition-all shadow-xs mt-4 group"
        >
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          <span>Return to the Beginning</span>
        </button>
      </div>
    </footer>
  );
};
