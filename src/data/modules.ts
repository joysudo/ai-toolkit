import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import { moduleTest } from './moduleTest';
import type { Slide } from '../types/slides.types';

export interface ModuleDefinition {
  id: string;
  name: string;
  imageUrl: string;
  slideCount: number;
  getSlides: () => Slide[];
  alwaysUnlocked?: boolean;
  subtitle?: string;
  description?: string;
  tag?: string;
}

export const modules: ModuleDefinition[] = [
  {
    id: 'test',
    name: 'Course Orientation',
    imageUrl: '',
    slideCount: moduleTest.length,
    getSlides: () => moduleTest,
    alwaysUnlocked: true,
    tag: 'Start Here',
    subtitle: 'Get your bearings before diving in',
    description: 'A short walkthrough of the course structure, how to navigate between slides, and a preview of what you\'ll learn. Start here before anything else.'
  },
  {
    id: '1',
    name: 'Module 1: What is AI?',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module1.length,
    getSlides: () => module1,
    tag: 'Fundamentals',
    subtitle: 'What is AI and where did it come from?',
    description: 'Define artificial intelligence, trace its history from Alan Turing to ChatGPT, and understand the three types of AI — Narrow, General, and Superintelligent — that researchers talk about today.'
  },
  {
    id: '2',
    name: 'Module 2: Ethics & Bias',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module2.length,
    getSlides: () => module2,
    tag: 'Safety & Ethics',
    subtitle: 'Fairness, bias, and doing the right thing',
    description: 'Explore what bias and ethics mean in AI systems, learn to recognize biased behavior in the wild, and understand why both concepts are essential for building AI that treats people fairly.'
  },
  {
    id: '3',
    name: 'Module 3: How AI Learns',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module3.length,
    getSlides: () => module3,
    tag: 'Machine Learning',
    subtitle: 'The engine behind modern AI',
    description: 'Discover how machine learning works, the difference between supervised and unsupervised learning, and how techniques like classification and regression power the AI tools you use every day.'
  },
];

export function getModuleById(id: string): ModuleDefinition | undefined {
  return modules.find((m) => m.id === id);
}
