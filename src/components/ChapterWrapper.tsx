import React from 'react';
import { PressedFlower } from './BotanicalElements';

interface ChapterWrapperProps {
  id: string;
  chapterNumber: string;
  title: string;
  tagline?: string;
  children: React.ReactNode;
  className?: string;
  cardVariant?: 'paper' | 'clean' | 'notebook' | 'translucent';
}

export const ChapterWrapper: React.FC<ChapterWrapperProps> = ({
  id,
  chapterNumber,
  title,
  tagline,
  children,
  className = "",
  cardVariant = 'paper'
}) => {
  const getCardStyle = () => {
    switch (cardVariant) {
      case 'notebook':
        return 'bg-[#FFFDF7] notebook-paper border border-[#E8E2D5] shadow-book rounded-2xl';
      case 'translucent':
        return 'bg-ivory-soft/80 backdrop-blur-md border border-sage/20 shadow-soft-card rounded-2xl';
      case 'clean':
        return 'bg-transparent';
      case 'paper':
      default:
        return 'bg-[#FFFDF7] border border-[#EFE9DC] shadow-soft-card rounded-2xl';
    }
  };

  return (
    <section 
      id={id} 
      className={`relative w-full py-12 sm:py-16 md:py-24 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-14 ${className}`}
    >
      {/* Chapter Marker */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5">
          <span className="h-[1px] w-6 sm:w-10 bg-sage/40"></span>
          <span className="font-serif tracking-widest text-[11px] sm:text-xs uppercase text-sage-dark font-medium">
            Chapter {chapterNumber}
          </span>
          <span className="h-[1px] w-6 sm:w-10 bg-sage/40"></span>
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-forest tracking-tight font-medium mb-2.5 px-2">
          {title}
        </h2>

        {tagline && (
          <p className="font-serif italic text-sm sm:text-base md:text-lg text-warmBrown max-w-xl mx-auto leading-relaxed px-2">
            "{tagline}"
          </p>
        )}

        <div className="mt-3">
          <PressedFlower className="w-4 h-4 sm:w-5 sm:h-5 text-dusty opacity-60" />
        </div>
      </div>

      {/* Chapter Content Card */}
      <div className={`p-4 sm:p-8 md:p-12 transition-all duration-300 ${getCardStyle()}`}>
        {children}
      </div>
    </section>
  );
};

