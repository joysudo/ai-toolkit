import { module1 } from './module1';
import { module2 } from './module2';
import { module3 } from './module3';
import type { Slide } from '../types/slides.types';

export interface ModuleDefinition {
  id: string;
  name: string;
  imageUrl: string;
  slideCount: number;
  getSlides: () => Slide[];
}

export const modules: ModuleDefinition[] = [
  { 
    id: '1', 
    name: 'Module 1', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module1.length, 
    getSlides: () => module1 
  },
  { 
    id: '2', 
    name: 'Module 2', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module2.length, 
    getSlides: () => module2 
  },
  { 
    id: '3', 
    name: 'Module 3', 
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
    slideCount: module3.length, 
    getSlides: () => module3 
  },
];

export function getModuleById(id: string): ModuleDefinition | undefined {
  return modules.find((m) => m.id === id);
}