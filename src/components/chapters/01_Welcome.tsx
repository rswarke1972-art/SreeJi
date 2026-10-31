import React from 'react';
import { PressedFlower, EucalyptusSprig, StorybookDivider } from '../BotanicalElements';
import { ArrowDown, Sparkles } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onEnter }) => {
  return (
    <section 
      id="welcome"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden paper-texture"
    >
      {/* Background Soft Lighting & Atmosphere */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-dusty-light/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-16 left-12 w-72 h-72 bg-skyMuted-light/30 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Botanical Corners */}
      <div className="absolute top-6 left-6 hidden md:block opacity-60">
        <EucalyptusSprig className="w-12 h-24 transform -rotate-12" />
      </div>
      <div className="absolute top-6 right-6 hidden md:block opacity-60">
        <EucalyptusSprig className="w-12 h-24 transform scale-x-[-1] rotate-12" />
      </div>

      {/* Central Storybook Cover */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Date & Dedication Tag */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-ivory-soft/85 border border-sage/30 shadow-xs mb-6 sm:mb-8 max-w-full">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-dusty flex-shrink-0" />
          <span className="font-serif tracking-widest text-[10px] sm:text-xs uppercase text-forest font-medium text-center">
            Created by Sau for Rai · Nov 2, 2026
          </span>
        </div>

        {/* Pressed Flower Emblem */}
        <div className="mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-500">
          <PressedFlower className="w-12 h-12 sm:w-16 sm:h-16 text-dusty" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-normal text-forest tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-5">
          A Little World <br />
          <span className="italic font-light text-forest-light">of Rai</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-base sm:text-xl md:text-2xl text-warmBrown max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed px-2">
          A little world, thoughtfully put together, just for you.
        </p>

        <StorybookDivider className="my-2 sm:my-3" />

        {/* Opening Thought */}
        <p className="font-sans text-xs sm:text-base text-forest/75 max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2">
          Somewhere between the flowers and the clouds, there is a little world worth celebrating.
        </p>

        {/* Enter Journey Button */}
        <button
          onClick={onEnter}
          type="button"
          className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-forest text-ivory font-serif tracking-wider text-sm sm:text-base shadow-soft-card hover:bg-forest-light active:scale-95 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 touch-manipulation"
        >
          <span>Enter Your Little World</span>
          <ArrowDown className="w-4 h-4 text-dusty group-hover:translate-y-1 transition-transform" />
        </button>

        {/* Subtle note */}
        <span className="mt-8 text-xs font-serif italic text-warmBrown/70">
          A gentle journey through words, skies, and quiet memories.
        </span>
      </div>
    </section>
  );
};

