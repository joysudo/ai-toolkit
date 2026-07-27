import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './config';

export interface ModuleProgress {
  currentSlideIndex: number;
  highestUnlocked: number;
  completed: boolean;
}

// call from SlideDeck every time user navigates
export async function saveProgress(
  userId: string,
  moduleId: string,
  progress: ModuleProgress
): Promise<void> {
  const progressRef = doc(db, 'users', userId, 'progress', moduleId);
  await setDoc(progressRef, progress, { merge: true });
}

// call from SlideDeck when user reopens module
export async function getProgress(
  userId: string,
  moduleId: string
): Promise<ModuleProgress | null> {
  const progressRef = doc(db, 'users', userId, 'progress', moduleId);
  const snapshot = await getDoc(progressRef);
  
  if (snapshot.exists()) {
    return snapshot.data() as ModuleProgress;
  }
  return null;
}

// dashboard will use to display module progress
export async function getAllProgress(
  userId: string,
  moduleIds: string[]
): Promise<Record<string, ModuleProgress>> {
  const result: Record<string, ModuleProgress> = {};
  //  query every single module there lol
  await Promise.all(
    moduleIds.map(async (moduleId) => {
      const progress = await getProgress(userId, moduleId);
      if (progress) {
        result[moduleId] = progress;
      }
    })
  );
  
  return result;
}