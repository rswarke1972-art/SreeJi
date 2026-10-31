import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { SIMPLE_JOYS } from '../../data/content';
import { 
  PenTool, 
  Coffee, 
  BookOpen, 
  Gamepad2, 
  Utensils, 
  Music, 
  Cloud, 
  Sprout, 
  Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Sprout: <Sprout className="w-5 h-5" />
};

export const SimpleJoys: React.FC = () => {
  const [activeJoy, setActiveJoy] = useState<string>(SIMPLE_JOYS[0].id);

  return (
    <ChapterWrapper
      id="simple-joys"
      chapterNumber="10"
      title="Simple Little Joys"
      tagline="Not every beautiful moment has to be planned."
      cardVariant="paper"
    >
      <div className="space-y-10">
        {/* Poetic Intro */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "Not every beautiful moment has to be planned. Sometimes happiness is found in a good book, a little rest, a familiar game, a recipe worth trying, or a song playing at the right moment."
          </p>
        </div>

        {/* Small Illustrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SIMPLE_JOYS.map((item) => {
            const isSelected = activeJoy === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveJoy(item.id)}
                type="button"
                className={`p-5 rounded-2xl border text-center flex flex-col items-center justify-center transition-all duration-300 relative group ${
                  isSelected
                    ? 'bg-ivory-soft border-forest shadow-md -translate-y-1'
                    : 'bg-white/70 border-sage/20 hover:border-sage hover:bg-white'
                }`}
              >
                <div className={`p-3 rounded-full mb-2.5 transition-colors ${
                  isSelected ? 'bg-forest text-ivory' : 'bg-sage/15 text-forest group-hover:bg-sage/30'
                }`}>
                  {iconMap[item.iconName] || <Sparkles className="w-5 h-5" />}
                </div>
                <h4 className="font-serif text-base text-forest font-medium">
                  {item.title}
                </h4>
                <span className="text-[10px] font-sans text-warmBrown/70 uppercase tracking-wider mt-1">
                  {item.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Joy Reflection */}
        {activeJoy && (
          <div className="max-w-md mx-auto p-5 rounded-xl bg-ivory-soft border border-sage/30 text-center shadow-xs">
            <span className="text-xs uppercase tracking-widest font-serif text-forest-light font-medium block mb-1">
              {SIMPLE_JOYS.find(j => j.id === activeJoy)?.title}
            </span>
            <p className="font-serif text-sm sm:text-base italic text-forest leading-relaxed">
              "{SIMPLE_JOYS.find(j => j.id === activeJoy)?.description}"
            </p>
          </div>
        )}
      </div>
    </ChapterWrapper>
  );
};

