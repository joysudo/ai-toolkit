import { useState, useEffect, useRef } from 'react'
import { saveProgress, getProgress } from '../firebase/progress';
import { useAuth } from '../firebase/auth';
import type { Slide } from '../types/slides.types';
import { SlideRenderer } from '../components/SlideRenderer';
import wormyLogo from '../assets/logo-placeholder.png';
import { Link } from 'react-router';

interface Props {
  moduleId: string;
  slides: Slide[];
  unlockAll?: boolean;
}

export function Lesson({ moduleId, slides, unlockAll = false }: Props) {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highestUnlocked, setHighestUnlocked] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const lastSavedRef = useRef({ slideIndex: 0, highestUnlocked: 0 });
  const tocRef = useRef<HTMLDivElement>(null);

  // save progress
  useEffect(() => {
    if (currentSlide > highestUnlocked) setHighestUnlocked(currentSlide);
  }, [currentSlide]);
    useEffect(() => {
    if (!user) return;
    const lastSaved = lastSavedRef.current;
    if (
      currentSlide === lastSaved.slideIndex &&
      highestUnlocked === lastSaved.highestUnlocked
    ) {
      return; // nothing changed, skip the write
    }
    const timeoutId = setTimeout(() => {
      const completed = highestUnlocked === slides.length - 1;
      saveProgress(user.uid, moduleId, {
        currentSlideIndex: currentSlide,
        highestUnlocked,
        completed,
      });
      lastSavedRef.current = { slideIndex: currentSlide, highestUnlocked };
    }, 500); // debounce for if the user spams button
    return () => clearTimeout(timeoutId);
  }, [currentSlide, highestUnlocked, user, moduleId, slides.length]);

  useEffect(() => {
    if (!user) return;
    const loadProgress = async () => {
      const saved = await getProgress(user.uid, moduleId);
      if (saved) {
        setCurrentSlide(saved.currentSlideIndex);
        setHighestUnlocked(saved.highestUnlocked);
        lastSavedRef.current = {
          slideIndex: saved.currentSlideIndex,
          highestUnlocked: saved.highestUnlocked,
        };
      }
    };
    loadProgress();
  }, [user, moduleId]);

  // detect toc clicks
  useEffect(() => {
    if (!tocOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (tocRef.current && !tocRef.current.contains(event.target as Node)) {
        setTocOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tocOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return; 
      }
      if (e.key === 'ArrowRight' || e.key === 'd') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'a') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);
  
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  }
  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }
  const teleport = (slideId: string) => {
    const index = slides.findIndex((s) => s.slideId === slideId);
    if (index !== -1) setCurrentSlide(index);
  }
  const jumpToSlide = (index: number) => {
    if (unlockAll || index <= highestUnlocked) {
      setCurrentSlide(index);
      setTocOpen(false);
    }
  }

  return (
    <>
      <div className="nav-bar">
        <button onClick={() => setTocOpen(!tocOpen)} className="toc-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">{/* Icon from coolicons by Kryston Schwarze - https://creativecommons.org/licenses/by/4.0/ */}<path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17h18M3 12h18M3 7h18"/></svg>
        </button>
        {tocOpen && (
          <div className="toc-dropdown" ref={tocRef}>
            {slides.map((slide, i) => {
              const isUnlocked = unlockAll || i <= highestUnlocked;
              const isCurrent = i === currentSlide;
              return (
                <div
                  key={slide.slideId}
                  onClick={() => isUnlocked && jumpToSlide(i)}
                  className="toc-item"
                  style={{
                    padding: '0.5rem 1rem',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                    fontWeight: isCurrent ? 'bold' : 'normal',
                    color: isUnlocked ? 'black' : '#999',
                    background: isCurrent ? '#e0e0e0' : 'transparent',
                    // fix this styling later so it's not arbitrary numbers and random values
                  }}
                >{isUnlocked ? (slide.heading || ' ') : '???'}</div>
              );
            })}
          </div>
        )}
        <Link to='/'>
          <img src={wormyLogo} alt="" className="logo"/>
        </Link>
        <Link to='/dashboard' className="home-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">{/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}<path d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
        </Link>
      </div>
      <div className="slide-container">
        <button onClick={prevSlide} disabled={currentSlide === 0} className="nav-btn prev-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z" />
          </svg>
        </button>
        <div key={currentSlide} className="slide-wrapper slide-fade-in">
          <SlideRenderer slide={slides[currentSlide]} onTeleport={teleport} />
        </div>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="nav-btn next-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="currentColor" d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z" />
          </svg>
        </button>
      </div>
      <div className="lesson-progress-bar">
        <div className="lesson-progress-max" style={{ width: `${Math.round(((highestUnlocked + 1) / slides.length) * 100)}%` }}></div>
        <div className="lesson-progress-current" style={{ width: `${Math.round(((currentSlide + 1) / slides.length) * 100)}%` }}></div>
      </div>
      <style>{/*css*/`
        .nav-bar {
          box-sizing: border-box;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
          padding: 1rem 1.5rem;
          background-color: white;
          // box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
        }

        .nav-bar > a {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo {
          object-fit: contain;
          max-height: 100%;
          width: auto;
        }

        .nav-bar svg {
          display: block;
        }

        .slide-fade-in {
          animation: slideFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          // animation: slideFadeIn 0.35s ease-in forwards;
        }

        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          } 100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-container {
          margin-top: 3.5rem;
          position: relative;
          width: 100vw;
          // min-height: calc(100vh - 3.5rem);
          display: flex; 
          flex-direction: column;
          background-color: white;
          padding: 0 5rem;
        }

        .slide-container > div {
          margin: 0 3rem;
          margin-top: calc(3.5rem + 3rem);
        }

        .nav-btn, .toc-btn {
          /* default css button reset */
          background: none;
          border: none;
          padding: 0;
          margin: 1rem;
          /* styling */
          cursor: pointer;
          font-size: 3rem;
          transition: color 0.1s ease-out;
          color: #666666;
        }

        .nav-btn {
          position: absolute;
          top: calc(50vh - 3.5rem);
          transform: translateY(-50%);
          z-index: 5;
        }

        .nav-btn:hover:not(:disabled) {
          color: #444444;
        }

        .nav-btn:active:not(:disabled) {
          color: #222222;
        }

        .nav-btn:disabled {
          cursor: default;
          opacity: 0;
        }

        .nav-btn.prev-btn { left: 2rem; }
        .nav-btn.next-btn { 
          right: 2rem;
          transform: scaleX(-1) translateY(-50%);
        }

        .toc-dropdown {
          position: absolute;
          top: 100%;
          left: 1.5rem;
          width: 18rem;
          max-height: 20rem;
          overflow-y: auto;
          background-color: white;
          border: 1px solid lightgray;
          border-radius: 0.5rem;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 50;
          animation: tocSlideDown 0.15s ease-out forwards;
        }

        .toc-item {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-radius: 0.25rem;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          color: var(--dark);
          cursor: pointer;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .toc-item:hover {
          background-color: lightgray !important;
        }

        @keyframes tocSlideDown {
          from {
            opacity: 0;
            transform: translateY(-0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .lesson-progress-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.5rem;
          background-color: gray;
        }

        .lesson-progress-max {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: lightgray;
          transition: width 0.2s ease;
        }

        .lesson-progress-current {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: var(--accent);
          transition: width 0.2s ease;
        }
      `}</style>
    </>
  );
}
