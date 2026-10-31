export interface ChapterMeta {
  id: string;
  number: string;
  title: string;
  navTitle: string;
  theme: string;
}

export interface InteractiveFlower {
  id: string;
  name: string;
  reflection: string;
  color: string;
  accent: string;
}

export interface CloudMemory {
  id: string;
  caption: string;
  thought: string;
}

export interface WritingMilestone {
  timeframe: string;
  title: string;
  description: string;
  detail: string;
}

export interface StoryCategory {
  id: string;
  title: string;
  description: string;
  tagline: string;
  themes: string[];
}

export interface SimpleJoyItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
}

