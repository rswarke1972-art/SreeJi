import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { Lightbulb, ChevronRight } from 'lucide-react';

export const JoyOfTeaching: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. Listening & Observing",
      desc: "Meeting someone where they are, understanding their doubts with patience and quiet attention."
    },
    {
      title: "2. Breaking It Down Simply",
      desc: "Unraveling complex ideas into clear, gentle steps that make sense without overwhelming."
    },
    {
      title: "3. The Spark of Understanding",
      desc: "Watching the moment of discovery when confusion transforms into confident clarity and a genuine smile."
    }
  ];

  return (
    <ChapterWrapper
      id="teaching-and-learning"
      chapterNumber="09"
      title="The Joy of Teaching and Learning"
      tagline="Every explanation, every little discovery, can open another door."
      cardVariant="paper"
    >
      <div className="space-y-10 max-w-3xl mx-auto">
        {/* Core Thought */}
        <div className="text-center space-y-3">
          <p className="font-serif text-lg md:text-xl text-forest leading-relaxed">
            "Some people enjoy learning something new. Others find joy in helping someone else understand it."
          </p>
          <p className="font-sans text-xs md:text-sm text-forest/75 max-w-lg mx-auto">
            "Every explanation, every little discovery, and every new question can open another door."
          </p>
        </div>

        {/* Step-by-Step Interactive Board */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#2D3B36] text-[#F8F5EC] shadow-book relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#F8F5EC]/15 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-dusty" />
              <span className="font-serif text-xs uppercase tracking-widest text-[#F8F5EC]/80">
                The Art of Patient Explanation
              </span>
            </div>
            <span className="text-[11px] font-sans text-[#F8F5EC]/60">
              Step {step + 1} of {steps.length}
            </span>
          </div>

          <div className="min-h-[100px] flex flex-col justify-center">
            <h4 className="font-serif text-xl sm:text-2xl text-[#FFFDF7] font-medium mb-2">
              {steps[step].title}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#F8F5EC]/85 leading-relaxed">
              {steps[step].desc}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#F8F5EC]/15">
            <div className="flex gap-1.5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    step === i ? 'bg-dusty w-6' : 'bg-[#F8F5EC]/30 hover:bg-[#F8F5EC]/60'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setStep((step + 1) % steps.length)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-serif text-dusty hover:text-white transition-colors"
            >
              <span>Next Step</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <p className="text-center text-xs font-serif italic text-warmBrown/80">
          Celebrating the generosity of patience and the quiet joy of making knowledge clear.
        </p>
      </div>
    </ChapterWrapper>
  );
};
