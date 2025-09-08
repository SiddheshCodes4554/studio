
import { introToClimateChange } from "@/app/learn/content/climate-change-data";

export type ModuleContentItem = {
    type: 'reading' | 'activity' | 'quiz';
    title: string;
    // For 'reading', this is the content. For 'activity', a component name. For 'quiz', a quiz ID.
    content: string | React.ComponentType | any;
};

export type LearningModule = {
    id: string;
    title: string;
    category: string;
    description: string;
    progress: number;
    imageUrl: string;
    dataAiHint: string;
    content: ModuleContentItem[];
};


export const learningModules: LearningModule[] = [
  {
    id: 'intro-to-climate-change',
    title: 'Introduction to Climate Change',
    category: 'Climate Science',
    description: 'An overview of the science behind climate change, its causes, impacts, and the global efforts to combat it.',
    progress: 50,
    imageUrl: 'https://picsum.photos/600/400?random=10',
    dataAiHint: 'climate change',
    content: introToClimateChange
  },
  {
    id: 'sustainable-living',
    title: 'Sustainable Living Practices',
    category: 'Lifestyle',
    description: 'Learn practical ways to reduce your environmental impact in daily life, from what you eat to how you shop.',
    progress: 75,
    imageUrl: 'https://picsum.photos/600/400?random=11',
    dataAiHint: 'sustainable living',
    content: []
  },
  {
    id: 'importance-of-biodiversity',
    title: 'The Importance of Biodiversity',
    category: 'Ecosystems',
    description: 'Discover why biodiversity is crucial for a healthy planet and what threatens it.',
    progress: 25,
    imageUrl: 'https://picsum.photos/600/400?random=12',
    dataAiHint: 'biodiversity forest',
    content: []
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy Sources',
    category: 'Energy',
    description: 'Explore the different types of renewable energy and their role in a sustainable future.',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=13',
    dataAiHint: 'solar panels',
    content: []
  },
  {
    id: 'waste-management',
    title: 'Waste Management and Recycling',
    category: 'Waste Reduction',
    description: 'Understand the lifecycle of waste and the importance of the 3 Rs: Reduce, Reuse, Recycle.',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=14',
    dataAiHint: 'recycling plant',
    content: []
  },
  {
    id: 'water-conservation',
    title: 'Water Conservation Techniques',
    category: 'Water',
    description: 'Learn why fresh water is a finite resource and how we can conserve it at home and in our communities.',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=15',
    dataAiHint: 'water conservation',
    content: []
  },
   {
    id: 'fast-fashion',
    title: 'The Impact of Fast Fashion',
    category: 'Lifestyle',
    description: "Uncover the hidden environmental and social costs of the fast fashion industry.",
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=16',
    dataAiHint: 'clothing store',
    content: []
  },
  {
    id: 'protecting-our-oceans',
    title: 'Protecting Our Oceans',
    category: 'Ecosystems',
    description: 'Dive into the challenges facing marine ecosystems, from plastic pollution to overfishing.',
    progress: 0,
    imageUrl: 'https://picsum.photos/600/400?random=17',
    dataAiHint: 'ocean coral',
    content: []
  },
];
