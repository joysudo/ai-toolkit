import { useState, useEffect } from 'react'
// import { module1 } from '../data/slides';
import type { Slide } from '../types/slides.types';
import { SlideRenderer } from '../components/SlideRenderer';
import wormyLogo from '../assets/wormy-logo.png';
import { Link } from 'react-router';

export function Lesson({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [highestUnlocked, setHighestUnlocked] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    if (currentSlide > highestUnlocked) setHighestUnlocked(currentSlide);
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
    if (index <= highestUnlocked) {
      setCurrentSlide(index);
      setTocOpen(false);
    }
  }

  return (
    <>
      <div style={{position: 'relative', display: 'flex', maxHeight: '5vh', justifyContent: 'space-between'}}>
        <button onClick={() => setTocOpen(!tocOpen)}>Table of Contents</button>
        {tocOpen && (
          <div style={{position: 'absolute', top: '100%', left: '0', background: 'white', padding: '1rem', zIndex: '50'}}>
            {slides.map((slide, i) => {
              const isUnlocked = i <= highestUnlocked;
              const isCurrent = i === currentSlide;
              return (
                <div
                  key={slide.slideId}
                  onClick={() => isUnlocked && jumpToSlide(i)}
                  style={{
                    padding: '0.5rem 1rem',
                    cursor: isUnlocked ? 'pointer' : 'not-allowed',
                    fontWeight: isCurrent ? 'bold' : 'normal',
                    color: isUnlocked ? 'black' : '#999',
                    background: isCurrent ? '#e0e0e0' : 'transparent',
                    // fix this styling later so it's not arbitrary numbers and random values
                  }}
                >{isUnlocked ? slide.heading : '???'}</div>
              );
            })}
          </div>
        )}
        <img src={wormyLogo} alt="" style={{width: 'auto', height: '5vh'}}/>
        <Link to='/'>Return to Home</Link>
      </div>
      <div className="slide-container">
        <button onClick={prevSlide} disabled={currentSlide === 0}>Previous</button>
        <SlideRenderer slide={slides[currentSlide]} onTeleport={teleport} />
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>Next</button>
      </div>
      <style>{/*css*/`
        .slide-container {
          width: 100vw;
          height: 90vh; 
          display: flex; 
          background-color: whitesmoke;
        }
      `}</style>
    </>
  );
}
