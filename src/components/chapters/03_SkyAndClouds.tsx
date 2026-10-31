import React, { useState } from 'react';
import { ChapterWrapper } from '../ChapterWrapper';
import { CLOUD_MEMORIES } from '../../data/content';
import { DelicateCloud } from '../BotanicalElements';
import { Cloud, Camera, Sparkles } from 'lucide-react';

export const SkyAndClouds: React.FC = () => {
  const [activeCloud, setActiveCloud] = useState<number>(0);

  return (
    <ChapterWrapper
      id="sky"
      chapterNumber="03"
      title="Between Sky and Clouds"
      tagline="The sky and the clouds fulfil each other."
      cardVariant="translucent"
      className="bg-gradient-to-b from-transparent via-skyMuted-light/20 to-transparent"
    >
      <div className="space-y-12">
        {/* Core Observation */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <blockquote className="font-serif text-2xl sm:text-3xl text-forest font-normal italic leading-snug">
            "The sky and the clouds fulfil each other."
          </blockquote>
          <p className="font-sans text-sm sm:text-base text-forest/80 leading-relaxed max-w-xl mx-auto">
            Sometimes, the simplest things have the most beautiful relationships. One gives the other space to exist, and together they become something worth looking at.
          </p>
        </div>

        {/* Interactive Floating Clouds Horizon */}
        <div className="relative py-10 px-4 rounded-2xl bg-gradient-to-r from-skyMuted-light/30 via-ivory-soft to-skyMuted-light/40 border border-skyMuted/40 overflow-hidden shadow-inner-paper">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest font-serif text-ocean-dark font-medium flex items-center justify-center gap-1.5">
              <Cloud className="w-3.5 h-3.5" /> Tap a cloud to discover its thought
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CLOUD_MEMORIES.map((memory, index) => {
              const isSelected = activeCloud === index;
              return (
                <button
                  key={memory.id}
                  onClick={() => setActiveCloud(index)}
                  type="button"
                  className={`flex flex-col items-center p-5 rounded-xl transition-all duration-300 text-center relative group ${
                    isSelected
                      ? 'bg-white shadow-md border border-skyMuted -translate-y-1'
                      : 'bg-white/50 hover:bg-white/80 border border-transparent hover:border-skyMuted/40'
                  }`}
                >
                  <div className={`mb-3 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                    <DelicateCloud className="w-16 h-10" />
                  </div>
                  <h4 className="font-serif text-sm sm:text-base text-forest font-medium">
                    {memory.caption}
                  </h4>
                  <span className="text-[11px] font-sans text-warmBrown/70 mt-1">
                    {isSelected ? 'Revealed' : 'Tap to read'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Cloud Thought Callout */}
          <div className="mt-8 p-5 rounded-xl bg-white/90 border border-skyMuted/50 text-center max-w-lg mx-auto shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-ocean mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-serif text-xs uppercase tracking-wider">Cloud Observation</span>
            </div>
            <p className="font-serif text-base md:text-lg text-forest italic leading-relaxed">
              "{CLOUD_MEMORIES[activeCloud].thought}"
            </p>
          </div>
        </div>

        {/* Gallery: Little Pieces of the Sky */}
        <div className="pt-4">
          <div className="flex items-center justify-between border-b border-sage/20 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-ocean" />
              <h3 className="font-serif text-xl sm:text-2xl text-forest font-medium">
                Little Pieces of the Sky
              </h3>
            </div>
            <span className="text-xs font-serif italic text-warmBrown">
              Cloud observations & skies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Gallery Frame 1 */}
            <div className="group rounded-xl overflow-hidden border border-sage/30 bg-white/80 p-3 shadow-xs">
              <div className="h-44 rounded-lg bg-gradient-to-tr from-skyMuted to-dusty-light flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <DelicateCloud className="w-20 h-12 opacity-80 mb-2" />
                <span className="text-xs font-serif text-forest font-medium">Afternoon Confection</span>
                <span className="text-[10px] font-sans text-forest/70 mt-0.5">Soft cotton candy shapes</span>
              </div>
              <p className="font-serif text-xs italic text-center text-warmBrown mt-2.5">
                "Shifting slowly against a calm blue horizon"
              </p>
            </div>

            {/* Gallery Frame 2 */}
            <div className="group rounded-xl overflow-hidden border border-sage/30 bg-white/80 p-3 shadow-xs">
              <div className="h-44 rounded-lg bg-gradient-to-b from-skyMuted-dark to-skyMuted flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <DelicateCloud className="w-24 h-14 opacity-70 mb-2" />
                <span className="text-xs font-serif text-white font-medium">The Evening Drift</span>
                <span className="text-[10px] font-sans text-white/80 mt-0.5">Golden hour silhouettes</span>
              </div>
              <p className="font-serif text-xs italic text-center text-warmBrown mt-2.5">
                "Where light and shadow share the evening"
              </p>
            </div>

            {/* Gallery Frame 3 */}
            <div className="group rounded-xl overflow-hidden border border-sage/30 bg-white/80 p-3 shadow-xs">
              <div className="h-44 rounded-lg bg-gradient-to-br from-ivory to-skyMuted-light flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <DelicateCloud className="w-18 h-10 opacity-75 mb-2" />
                <span className="text-xs font-serif text-forest font-medium">Silent Horizons</span>
                <span className="text-[10px] font-sans text-forest/70 mt-0.5">Gentle mountain-kissed mist</span>
              </div>
              <p className="font-serif text-xs italic text-center text-warmBrown mt-2.5">
                "Quiet spaces where thoughts can rest"
              </p>
            </div>
          </div>
          
          <p className="text-[11px] font-sans text-center text-warmBrown/60 mt-4">
            Curated atmospheric sky canvases · Personal cloud photographs can be slipped into these frames
          </p>
        </div>
      </div>
    </ChapterWrapper>
  );
};

