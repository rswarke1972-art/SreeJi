import React from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { BIRTHDAY_LETTER } from '../../data/content';
import { PressedFlower, StorybookDivider } from '../BotanicalElements';
import { Sparkles } from 'lucide-react';

export const LetterFromSau: React.FC = () => {
  return (
    <ChapterWrapper
      id="letter-from-sau"
      chapterNumber="17"
      title="A Letter from Sau"
      tagline="A personal birthday message written with care."
      cardVariant="paper"
      className="max-w-3xl"
    >
      <div className="relative p-4 sm:p-10 md:p-14 rounded-2xl bg-[#FFFDF7] border border-[#E8E2D5] shadow-book overflow-hidden">
        {/* Decorative corner pressed flower */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-75 hidden sm:block">
          <PressedFlower className="w-8 h-8 sm:w-12 sm:h-12 text-dusty" />
        </div>

        {/* Letterhead */}
        <div className="border-b border-sage/20 pb-4 sm:pb-6 mb-6 sm:mb-8 text-left">
          <span className="font-serif text-[11px] sm:text-xs uppercase tracking-widest text-sage-dark font-medium block mb-1">
            Personal Birthday Letter · {BIRTHDAY_LETTER.birthdayDate}
          </span>
          <h3 className="font-serif text-xl sm:text-3xl text-forest font-medium">
            For Rai,
          </h3>
        </div>

        {/* Letter Body */}
        <div className="space-y-4 sm:space-y-6 text-left font-serif text-sm sm:text-base md:text-lg text-forest leading-relaxed sm:leading-loose">
          {BIRTHDAY_LETTER.paragraphs.map((paragraph, index) => {
            // Emphasize key greeting lines slightly
            const isHighlight = paragraph.startsWith("Happy Birthday");
            return (
              <p 
                key={index}
                className={isHighlight ? "font-medium text-lg sm:text-2xl text-forest-dark tracking-tight" : "text-forest/90 font-normal"}
              >
                {paragraph}
              </p>
            );
          })}
        </div>

        <StorybookDivider className="my-6 sm:my-10" />

        {/* Letter Closing & Signature */}
        <div className="pt-2 text-right">
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-warmBrown mb-1 sm:mb-2">
            {BIRTHDAY_LETTER.closing}
          </p>
          <p className="font-script text-3xl sm:text-5xl text-forest font-semibold tracking-wide">
            {BIRTHDAY_LETTER.signature}
          </p>
          <div className="flex items-center justify-end gap-1.5 mt-2 text-xs font-serif text-sage-dark">
            <Sparkles className="w-3.5 h-3.5 text-dusty" />
            <span>November 2, 2026</span>
          </div>
        </div>
      </div>
    </ChapterWrapper>
  );
};
