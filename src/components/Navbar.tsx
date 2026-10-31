import React, { useState, useEffect } from 'react';
import { CHAPTERS } from '../data/content';
import { Compass, X, ArrowUp, Sparkles, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('welcome');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalScroll) * 100, 0), 100);
        setScrollProgress(progress);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 200;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const element = document.getElementById(CHAPTERS[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveChapter(CHAPTERS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Header / Minimal Pill */}
      <header className="fixed top-3 left-0 right-0 z-40 px-3 sm:px-4 pointer-events-none flex justify-between items-center max-w-5xl mx-auto">
        {/* Storybook Branding */}
        <div className="pointer-events-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-soft/95 backdrop-blur-md border border-sage/30 shadow-sm text-forest max-w-[55%] sm:max-w-none truncate">
          <BookOpen className="w-3.5 h-3.5 text-dusty flex-shrink-0" />
          <span className="font-serif text-xs sm:text-sm tracking-wide font-medium truncate">A Little World of Rai</span>
        </div>

        {/* Right Action: Menu & Flower Progress */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
          {/* Subtle Blooming Progress Indicator */}
          <div 
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-ivory-soft/95 backdrop-blur-md border border-sage/30 shadow-sm text-xs font-serif text-warmBrown"
            title={`Story progress: ${Math.round(scrollProgress)}%`}
          >
            <div className="relative w-4 h-4 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 transform -rotate-90">
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-sage/20"
                  fill="none"
                />
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={37.7}
                  strokeDashoffset={37.7 - (37.7 * scrollProgress) / 100}
                  className="text-dusty transition-all duration-300"
                  fill="none"
                />
              </svg>
              <div 
                className="absolute w-1.5 h-1.5 rounded-full bg-dusty transition-transform duration-300" 
                style={{ transform: `scale(${0.5 + (scrollProgress / 200)})` }}
              />
            </div>
            <span className="text-[10px] sm:text-[11px] font-sans text-forest/80 font-medium">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* Chapters Drawer Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open chapter navigation"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-ivory-soft/95 hover:bg-ivory-soft backdrop-blur-md border border-sage/40 shadow-sm text-xs sm:text-sm font-medium text-forest hover:text-forest-dark transition-all touch-manipulation active:scale-95"
          >
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-forest" />
            <span className="font-serif tracking-wider">Chapters</span>
          </button>
        </div>
      </header>

      {/* Slide-over / Modal Chapter Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-forest/20 backdrop-blur-sm transition-opacity">
          <div 
            className="w-full max-w-sm sm:max-w-md h-full bg-[#FFFDF7] border-l border-sage/30 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-sage/20 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-serif text-sage-dark">Table of Contents</span>
                  <h3 className="font-serif text-2xl text-forest font-medium">Chapters of Rai</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation"
                  className="p-1.5 rounded-full hover:bg-ivory text-forest transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chapter Links */}
              <nav className="space-y-1">
                {CHAPTERS.map((ch) => {
                  const isActive = activeChapter === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => scrollTo(ch.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all ${
                        isActive 
                          ? 'bg-sage/15 text-forest font-medium shadow-sm border-l-2 border-forest' 
                          : 'text-warmBrown hover:bg-ivory hover:text-forest'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-xs opacity-60 w-5 text-right">{ch.number}</span>
                        <span className="font-serif text-base">{ch.title}</span>
                      </div>
                      <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-ivory text-sage-dark border border-sage/20">
                        {ch.theme}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-sage/20 pt-6 mt-6 flex items-center justify-between">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-serif text-warmBrown hover:text-forest transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Return to Beginning</span>
              </button>
              <div className="flex items-center gap-1.5 text-xs font-serif text-sage-dark">
                <Sparkles className="w-3.5 h-3.5 text-dusty" />
                <span>November 2, 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

