import { ChapterMeta, InteractiveFlower, CloudMemory, WritingMilestone, StoryCategory, SimpleJoyItem } from '../types';

export const CHAPTERS: ChapterMeta[] = [
  { id: 'welcome', number: '01', title: 'The Welcome', navTitle: 'Welcome', theme: 'Opening' },
  { id: 'garden', number: '02', title: 'A Garden of Little Things', navTitle: 'The Garden', theme: 'Nature' },
  { id: 'sky', number: '03', title: 'Between Sky and Clouds', navTitle: 'Sky & Clouds', theme: 'Atmosphere' },
  { id: 'quiet-evening', number: '04', title: 'A Quiet Evening', navTitle: 'Coastline', theme: 'Solitude' },
  { id: 'world-of-words', number: '05', title: 'Her World of Words', navTitle: 'Words', theme: 'Writing' },
  { id: 'shelf-of-stories', number: '06', title: 'A Shelf of Stories', navTitle: 'Stories', theme: 'Books' },
  { id: 'unwritten-novel', number: '07', title: 'An Unwritten Novel', navTitle: 'Imagination', theme: 'Creativity' },
  { id: 'path-of-her-own', number: '08', title: 'A Path of Her Own', navTitle: 'Her Path', theme: 'Individuality' },
  { id: 'teaching-and-learning', number: '09', title: 'The Joy of Teaching and Learning', navTitle: 'Learning', theme: 'Curiosity' },
  { id: 'simple-joys', number: '10', title: 'Simple Little Joys', navTitle: 'Little Joys', theme: 'Everyday' },
  { id: 'night-of-garba', number: '11', title: 'A Little Night of Garba', navTitle: 'Garba', theme: 'Celebration' },
  { id: 'beauty-of-simplicity', number: '12', title: 'The Beauty of Simplicity', navTitle: 'Simplicity', theme: 'Authenticity' },
  { id: 'kindness', number: '13', title: 'Kindness Comes Around', navTitle: 'Kindness', theme: 'Care' },
  { id: 'more-than-one-mood', number: '14', title: 'More Than One Mood', navTitle: 'Moods', theme: 'Duality' },
  { id: 'window-other-worlds', number: '15', title: 'A Window Into Other Worlds', navTitle: 'Cultures', theme: 'Discovery' },
  { id: 'made-with-care', number: '16', title: 'Made With Care', navTitle: 'Handmade', theme: 'Thoughtfulness' },
  { id: 'letter-from-sau', number: '17', title: 'A Letter from Sau', navTitle: 'The Letter', theme: 'Birthday Message' },
  { id: 'forty-lines', number: '18', title: 'Forty Lines for Rai', navTitle: 'Forty Lines', theme: 'Poem' },
];

export const FLOWERS: InteractiveFlower[] = [
  {
    id: 'morning-bloom',
    name: 'Morning Blossom',
    reflection: 'Opening quietly in the gentle morning light, asking for nothing more than the sun.',
    color: '#D8A6A3',
    accent: '#B57D7A'
  },
  {
    id: 'wild-petal',
    name: 'Wild Jasmine Petal',
    reflection: 'A fragile sweetness carried across the breeze, holding onto its natural grace.',
    color: '#FFFDF7',
    accent: '#A6B49A'
  },
  {
    id: 'forest-fern',
    name: 'Dewy Fern',
    reflection: 'A patient green leaf unfurling slowly, finding quiet dignity in the shaded earth.',
    color: '#A6B49A',
    accent: '#344D3D'
  },
  {
    id: 'evening-violet',
    name: 'Coastal Iris',
    reflection: 'Softly bending with the wind near the shore, blooming without need for an audience.',
    color: '#B7D0E1',
    accent: '#739E9C'
  }
];

export const CLOUD_MEMORIES: CloudMemory[] = [
  {
    id: 'cloud-1',
    caption: 'Cotton Candy Drifts',
    thought: 'Puffy, sunlit shapes floating softly across the afternoon, like spun sugar across an azure canvas.'
  },
  {
    id: 'cloud-2',
    caption: 'The Meeting at Dusk',
    thought: 'The gentle silhouette of evening clouds catching the last golden warmth of the fading light.'
  },
  {
    id: 'cloud-3',
    caption: 'Fulfilling the Sky',
    thought: 'One gives the other space to exist, and together they become something quiet, vast, and breathtaking.'
  },
  {
    id: 'cloud-4',
    caption: 'A Wandering Horizon',
    thought: 'Slow-moving shadows tracing their gentle steps over faraway hills and open oceans.'
  }
];

export const WRITING_MILESTONES: WritingMilestone[] = [
  {
    timeframe: 'Early Childhood (~Age 6)',
    title: 'The First Spark of Verse',
    description: 'Poetry began early—turning the first tender feelings and impressions into rhymes.',
    detail: 'Early verses rooted in the rhythm of home and mother tongue, observing the world with wide wonder.'
  },
  {
    timeframe: 'Around Age 9–10',
    title: 'Verses in Hindi',
    description: 'Writing in Hindi began to take root, giving expression to observations of nature and life.',
    detail: 'Finding the cadence of words, where feelings began to be carefully noted and preserved in ink.'
  },
  {
    timeframe: 'Around Age 11–12',
    title: 'Expanding into English',
    description: 'Expressing poetry in English, exploring new ways to paint thoughts with varied vocabulary.',
    detail: 'Bridging languages and thoughts, allowing the rhythm of emotion to find multiple voices.'
  },
  {
    timeframe: 'The Living Diary',
    title: 'Turning Feelings into Poetry & Translation',
    description: 'A personal diary where nature, emotions, and life are distilled into meaningful lines.',
    detail: 'Translating her own writings into English, valuing genuine feeling over mere ornamentation.'
  }
];

export const STORY_CATEGORIES: StoryCategory[] = [
  {
    id: 'literature',
    title: 'Stories & Literature',
    tagline: 'Windows into other lives and lands',
    description: 'Novels, diverse world perspectives, and human narratives that leave quiet echoes long after the last page is closed.',
    themes: ['Emotional depth', 'Human character', 'Quiet reflections']
  },
  {
    id: 'discovery',
    title: 'Learning & Discovery',
    tagline: 'Understanding things thoroughly',
    description: 'Books that explore how the world works, deep histories, language, and the joy of uncovering ideas at one\'s own pace.',
    themes: ['Independent inquiry', 'Step-by-step clarity', 'Broad horizons']
  },
  {
    id: 'epics',
    title: 'Epics & Timeless Narratives',
    tagline: 'Grand philosophy & enduring wisdom',
    description: 'The monumental literary depth found in works like the Bhagavad Gita, Ramayana, and Mahabharata—tales of duty, depth, and character.',
    themes: ['Timeless philosophy', 'Epic journeys', 'Inner strength']
  }
];

export const SIMPLE_JOYS: SimpleJoyItem[] = [
  {
    id: 'notebook',
    title: 'Handwritten Notes',
    category: 'Creativity',
    description: 'The quiet pleasure of putting ink to paper, jotting down ideas, and keeping little thoughts organized.',
    iconName: 'PenTool'
  },
  {
    id: 'herbal-tea',
    title: 'A Warm Cup',
    category: 'Rest',
    description: 'A comforting cup enjoyed during quiet moments, letting thoughts settle gently.',
    iconName: 'Coffee'
  },
  {
    id: 'good-book',
    title: 'A Good Book',
    category: 'Stories',
    description: 'Losing track of an hour between chapters, wandering into a world made entirely of words.',
    iconName: 'BookOpen'
  },
  {
    id: 'board-games',
    title: 'UNO & Ludo with Family',
    category: 'Play',
    description: 'Playful banter, familiar colors, counting squares, and shared laughter around the table.',
    iconName: 'Gamepad2'
  },
  {
    id: 'recipes',
    title: 'Trying a Recipe',
    category: 'Kitchen',
    description: 'The small curiosity of combining ingredients and discovering something delicious crafted step by step.',
    iconName: 'Utensils'
  },
  {
    id: 'music-wave',
    title: 'Music & Rest',
    category: 'Peace',
    description: 'A familiar song softly playing in the background while the world outside slows down.',
    iconName: 'Music'
  },
  {
    id: 'cloud-window',
    title: 'Watching the Clouds',
    category: 'Nature',
    description: 'Looking out the window to catch shifting cloud shapes drifting lazily through the blue sky.',
    iconName: 'Cloud'
  },
  {
    id: 'blooming-plant',
    title: 'A Green Sprout',
    category: 'Nature',
    description: 'Noticing a fresh leaf or delicate flower opening in its own time without any rush.',
    iconName: 'Sprout'
  }
];

export const BIRTHDAY_LETTER = {
  recipient: "Rai",
  author: "Sau",
  birthdayDate: "November 2, 2026",
  paragraphs: [
    "Happy Birthday, Rai!",
    "Some people find beauty in extraordinary things. You seem to find it in the little things too: flowers, clouds, books, changing skies, and the quiet moments that often go unnoticed.",
    "You've been collecting words and turning feelings into poetry since childhood. You've explored different languages, written about nature, and found countless stories between the pages of books.",
    "You have your own way of discovering things, learning at your own pace, and understanding the world around you. I hope that curiosity always stays with you.",
    "May you have the freedom to explore new interests, whether it's discovering another beautiful place, learning something new, or finally trying that Garba you've been watching.",
    "I hope you never feel that you have to pretend to be someone else to be appreciated. Your natural way of speaking, your humour, your thoughtful observations, and your individual perspective all deserve their own space.",
    "May you keep finding people with whom conversations feel easy, where honesty comes naturally, individuality is respected, and you never have to pretend to be someone else.",
    "No two flowers are exactly alike, and that's part of what makes a garden beautiful. May you always have the freedom to grow in your own way, without feeling that you must become someone else.",
    "May life bring you beautiful words, peaceful evenings, new experiences and plenty of reasons to smile.",
    "Happy Birthday, Rai!",
    "Keep writing your stories, enjoying your little joys, helping others learn, and discovering all the beautiful things still waiting for you.",
    "This little world has been made with care, just for your birthday. I hope exploring it brings you a smile."
  ],
  closing: "With warm wishes,",
  signature: "Sau"
};

export const POEM_STANZAS = [
  {
    stanzaNumber: 1,
    title: "I. The Whispering Blossom",
    theme: "Of quiet beginnings, nature, and the first lines written on paper",
    lines: [
      "A quiet blossom opens to the light,",
      "Where morning whispers secrets to the dawn,",
      "Before the hurried world is awake and bright,",
      "A gentle leaf upon the breeze is drawn.",
      "The ink first met the page in gentle grace,",
      "When childhood turned its wonder into song,",
      "A world discovered in an open space,",
      "Where thoughts, like quiet rivers, flow along."
    ]
  },
  {
    stanzaNumber: 2,
    title: "II. Between the Sky and Ocean Wave",
    theme: "Of clouds fulfilling skies and peaceful coastline waters",
    lines: [
      "The drifting cloud that seeks no hurried flight,",
      "Fulfils the sky with soft and cotton grace,",
      "And shadows dance upon the mountain height,",
      "While evening waves arrive at their own pace.",
      "A coastline where the water meets the shore,",
      "Invites the weary mind to simply be,",
      "To listen to the sea and nothing more,",
      "And find a quiet solace by the sea."
    ]
  },
  {
    stanzaNumber: 3,
    title: "III. The Shelf of Living Stories",
    theme: "Of pages turned, patient learning, and thoughts waiting to be written",
    lines: [
      "Between the open books that line the hall,",
      "Lie thousand lives that words have gently spun,",
      "The patient heart that answers learning's call,",
      "And guides another till the task is done.",
      "An unread novel rests in silent air,",
      "With chapters waiting for their rightful day,",
      "For every story crafted with true care,",
      "Will find the words it truly wants to say."
    ]
  },
  {
    stanzaNumber: 4,
    title: "IV. The Garden of Her Own",
    theme: "Of individuality, simple naturalness, and sincere truth",
    lines: [
      "No single flower imitates the rest,",
      "Each grows with quiet beauty in its place,",
      "To be oneself is always true and best,",
      "Without a mask to borrow someone's face.",
      "Both laughter light and thoughtful evening calm,",
      "Can live together in a single soul,",
      "Like joyful warmth and quiet healing balm,",
      "Each different side that makes the spirit whole."
    ]
  },
  {
    stanzaNumber: 5,
    title: "V. The Horizon Ahead",
    theme: "Warm wishes for journeys, new steps, and peaceful days",
    lines: [
      "May seasons bring you skies of clearest blue,",
      "And music for the steps you long to try,",
      "May genuine warmth remain around with you,",
      "Beneath the gentle canopy on high.",
      "Keep turning every feeling into rhyme,",
      "And finding joy in little things that stay,",
      "Walk forward at your own unhurried time,",
      "With blessings for this celebrated day."
    ]
  }
];

