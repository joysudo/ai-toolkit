import { useState, useEffect, useRef } from 'react'
import { saveProgress, getProgress } from '../firebase/progress';
import { useAuth } from '../firebase/auth';
import type { Slide } from '../types/slides.types';
import { SlideRenderer } from '../components/SlideRenderer';
import wormyLogo from '../assets/wormy-logo.png';
import { Link, useNavigate } from 'react-router';

interface Props {
  moduleId: string;
  slides: Slide[];
  unlockAll?: boolean;
}

export function Lesson({ moduleId, slides, unlockAll = false }: Props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highestUnlocked, setHighestUnlocked] = useState(0);
  const keyHandlerRef = useRef<(e: KeyboardEvent) => void>(() => {});

  useEffect(() => {
    if (currentSlide > highestUnlocked) setHighestUnlocked(currentSlide);
  }, [currentSlide, highestUnlocked]);

  useEffect(() => {
    if (!user) return;
    const timeoutId = setTimeout(() => {
      const completed = highestUnlocked === slides.length - 1;
      saveProgress(user.uid, moduleId, {
        currentSlideIndex: currentSlide,
        highestUnlocked,
        completed,
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [currentSlide, highestUnlocked, user, moduleId, slides.length]);

  useEffect(() => {
    if (!user) return;
    const loadProgress = async () => {
      const saved = await getProgress(user.uid, moduleId);
      if (saved) {
        setCurrentSlide(saved.currentSlideIndex);
        setHighestUnlocked(saved.highestUnlocked);
      }
    };
    loadProgress();
  }, [user, moduleId]);

  // Stable listener — always reads latest values via ref assigned below
  useEffect(() => {
    const handler = (e: KeyboardEvent) => keyHandlerRef.current(e);
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const maxUnlocked = unlockAll ? slides.length - 1 : highestUnlocked;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
    else navigate('/dashboard');
  };
  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };
  const teleport = (slideId: string) => {
    const index = slides.findIndex((s) => s.slideId === slideId);
    if (index !== -1) setCurrentSlide(index);
  };

  keyHandlerRef.current = (e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return;
    if (e.key === 'ArrowLeft' || e.key === 'a') prevSlide();
    if (e.key === 'ArrowRight' || e.key === 'd') { if (currentSlide < maxUnlocked) nextSlide(); }
  };

  const totalSegments = Math.max(slides.length - 1, 1);
  const currentPct = (currentSlide / totalSegments) * 100;
  const highestPct = (maxUnlocked / totalSegments) * 100;

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const target = Math.round(pct * totalSegments);
    setCurrentSlide(Math.max(0, Math.min(target, maxUnlocked)));
  };

  return (
    <div className="lesson-page">
      <nav className="lesson-nav">
        <Link to="/dashboard" className="lesson-close" aria-label="Exit lesson">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Link>

        <button
          className="lesson-back"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          className="lesson-progress-track"
          onClick={handleTrackClick}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={slides.length - 1}
          aria-valuenow={currentSlide}
        >
          <div
            className="lesson-progress-bar"
            style={{
              background: currentPct === highestPct
                ? `linear-gradient(to right, var(--accent) ${currentPct}%, #e0e0e0 ${currentPct}%)`
                : `linear-gradient(to right,
                    var(--accent) ${currentPct}%,
                    #23a35a ${currentPct}%,
                    #23a35a ${highestPct}%,
                    #e0e0e0 ${highestPct}%)`
            }}
          >
            <div className="lesson-progress-thumb" style={{ left: `${currentPct}%` }} />
          </div>
        </div>

        <button
          className="lesson-back"
          onClick={nextSlide}
          disabled={currentSlide >= maxUnlocked}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </nav>

      <div className="lesson-body" data-slide-type={slides[currentSlide].type}>
        <div className="lesson-card">
          <div key={currentSlide} className="slide-fade-in">
            <SlideRenderer slide={slides[currentSlide]} onTeleport={teleport} onAdvance={nextSlide} />
          </div>
        </div>
      </div>

      <img src={wormyLogo} alt="" className="lesson-mascot" />
    </div>
  );
}
