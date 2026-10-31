import React from 'react';
import { Navbar } from './components/Navbar';
import { Welcome } from './components/chapters/01_Welcome';
import { Garden } from './components/chapters/02_Garden';
import { SkyAndClouds } from './components/chapters/03_SkyAndClouds';
import { QuietEvening } from './components/chapters/04_QuietEvening';
import { WorldOfWords } from './components/chapters/05_WorldOfWords';
import { ShelfOfStories } from './components/chapters/06_ShelfOfStories';
import { UnwrittenNovel } from './components/chapters/07_UnwrittenNovel';
import { PathOfHerOwn } from './components/chapters/08_PathOfHerOwn';
import { JoyOfTeaching } from './components/chapters/09_JoyOfTeaching';
import { SimpleJoys } from './components/chapters/10_SimpleJoys';
import { NightOfGarba } from './components/chapters/11_NightOfGarba';
import { BeautyOfSimplicity } from './components/chapters/12_BeautyOfSimplicity';
import { Kindness } from './components/chapters/13_Kindness';
import { MoreThanOneMood } from './components/chapters/14_MoreThanOneMood';
import { WindowOtherWorlds } from './components/chapters/15_WindowOtherWorlds';
import { MadeWithCare } from './components/chapters/16_MadeWithCare';
import { LetterFromSau } from './components/chapters/17_LetterFromSau';
import { FortyLinesPoem } from './components/chapters/18_FortyLinesPoem';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const enterStory = () => {
    const garden = document.getElementById('garden');
    if (garden) {
      garden.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-forest selection:bg-dusty-light selection:text-forest-dark relative overflow-x-hidden font-sans">
      {/* Floating navigation pill and chapter navigator */}
      <Navbar />

      <main>
        {/* Chapter 01: The Welcome */}
        <Welcome onEnter={enterStory} />

        {/* Storybook Body: Chapters 02 through 18 */}
        <div className="relative space-y-8 sm:space-y-12">
          {/* Chapter 02: A Garden of Little Things */}
          <Garden />

          {/* Chapter 03: Between Sky and Clouds */}
          <SkyAndClouds />

          {/* Chapter 04: A Quiet Evening */}
          <QuietEvening />

          {/* Chapter 05: Her World of Words */}
          <WorldOfWords />

          {/* Chapter 06: A Shelf of Stories */}
          <ShelfOfStories />

          {/* Chapter 07: An Unwritten Novel */}
          <UnwrittenNovel />

          {/* Chapter 08: A Path of Her Own */}
          <PathOfHerOwn />

          {/* Chapter 09: The Joy of Teaching and Learning */}
          <JoyOfTeaching />

          {/* Chapter 10: Simple Little Joys */}
          <SimpleJoys />

          {/* Chapter 11: A Little Night of Garba */}
          <NightOfGarba />

          {/* Chapter 12: The Beauty of Simplicity */}
          <BeautyOfSimplicity />

          {/* Chapter 13: Kindness Comes Around */}
          <Kindness />

          {/* Chapter 14: More Than One Mood */}
          <MoreThanOneMood />

          {/* Chapter 15: A Window Into Other Worlds */}
          <WindowOtherWorlds />

          {/* Chapter 16: Made With Care */}
          <MadeWithCare />

          {/* Chapter 17: A Letter From Sau */}
          <LetterFromSau />

          {/* Chapter 18: Forty Lines for Rai */}
          <FortyLinesPoem />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

