import { useState } from 'react'
import { module1 } from './data/slides';
import { SlideRenderer } from './components/slides/SlideRenderer';

function App() {
  let slides = module1;

  const [currentSlide, setCurrentSlide] = useState(0);
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

  return (
    <>
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

export default App
