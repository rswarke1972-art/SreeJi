import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { WRITING_MILESTONES } from '../../data/content';
import { PenTool, Languages, Feather } from 'lucide-react';

export const WorldOfWords: React.FC = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  return (
    <ChapterWrapper
      id="world-of-words"
      chapterNumber="05"
      title="Her World of Words"
      tagline="Turning feelings into poetry since childhood."
      cardVariant="notebook"
    >
      <div className="space-y-12">
        {/* Intro Copy */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "Some people discover the world through places. Some discover it through people. And some find another way to understand it: through words."
          </p>
          <p className="font-sans text-xs md:text-sm text-forest/75 max-w-lg mx-auto">
            From the earliest verses preserved in a notebook to thoughts that bridged different tongues, ink has been a quiet companion.
          </p>
        </div>

        {/* Gentle Visual Timeline */}
        <div className="relative border-l-2 border-sage/40 ml-2 sm:ml-8 pl-4 sm:pl-8 space-y-6 sm:space-y-8 my-6 sm:my-8">
          {WRITING_MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[23px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-ivory-soft border-2 border-forest group-hover:bg-dusty transition-colors" />
              
              <div className="bg-white/80 p-4 sm:p-5 rounded-xl border border-sage/20 shadow-xs group-hover:border-sage/50 transition-all">
                <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-sage/20 text-forest text-[11px] sm:text-xs font-serif font-medium mb-1.5">
                  {milestone.timeframe}
                </span>
                <h4 className="font-serif text-base sm:text-lg text-forest font-medium">
                  {milestone.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-forest/85 mt-1 leading-relaxed">
                  {milestone.description}
                </p>
                <p className="font-serif italic text-[11px] sm:text-xs text-warmBrown mt-2">
                  {milestone.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Words in More Than One Language: Interactive Demonstration */}
        <div className="p-6 sm:p-8 rounded-2xl bg-ivory-soft border border-sage/30 shadow-inner-paper">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-sage/20 pb-4 mb-6">
            <div className="flex items-center gap-2.5">
              <Languages className="w-5 h-5 text-forest" />
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-forest font-medium">
                  Words in More Than One Language
                </h3>
                <p className="text-xs text-warmBrown">
                  A subtle translation reflection between tongues
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsTranslated(!isTranslated)}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest text-ivory text-xs font-serif hover:bg-forest-light transition-all shadow-xs"
            >
              <PenTool className="w-3.5 h-3.5 text-dusty" />
              <span>{isTranslated ? "Show Original Cadence" : "Translate Line"}</span>
            </button>
          </div>

          {/* Interactive Card */}
          <div className="p-6 rounded-xl bg-white border border-sage/30 text-center relative overflow-hidden transition-all duration-500 min-h-[140px] flex flex-col justify-center items-center">
            <div className="absolute top-2 right-3 text-[10px] font-sans uppercase tracking-widest text-sage-dark font-medium">
              {isTranslated ? "Reflected in English" : "Spoken in Verse"}
            </div>

            {isTranslated ? (
              <div className="space-y-2 animate-fade-in">
                <p className="font-serif text-xl sm:text-2xl text-forest italic leading-relaxed">
                  "The river knows no boundary but the earth, and words know no silence but the heart."
                </p>
                <span className="text-xs font-sans text-warmBrown/80 block">
                  Translating feelings across languages, preserving the truth of the emotion.
                </span>
              </div>
            ) : (
              <div className="space-y-2 animate-fade-in">
                <p className="font-serif text-xl sm:text-2xl text-forest leading-relaxed">
                  "दरिया को ज़मीं के सिवा कोई हद नहीं मालूम, और अल्फाज़ को दिल के सिवा कोई खामोशी नहीं।"
                </p>
                <span className="text-xs font-sans text-warmBrown/80 block">
                  Sample illustration of thought flowing naturally into verse.
                </span>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-serif italic text-warmBrown/70">
              <Feather className="w-3 h-3 text-dusty" />
              <span>Sample reflection representing the quiet art of self-translation</span>
            </div>
          </div>
        </div>
      </div>
    </ChapterWrapper>
  );
};
