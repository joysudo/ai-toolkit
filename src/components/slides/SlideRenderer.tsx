import type { Slide } from '../../types/slides.types';
import { chatPersonas } from '../../data/personas';
import { useState } from 'react';

interface Props {
  slide: Slide;
  onTeleport(slideId: string): void;
}

export function SlideRenderer({ slide, onTeleport }: Props) {
  switch (slide.type) {
    case 'info-chat':
      return (
        <div>
          <h1>{slide.heading}</h1>
          {slide.dialogue.map((text, i) => (
            <div className="chat-pairing" style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'}} key={i}>
              <img src={ chatPersonas[i % 2].iconUrl } />
              <p style={{ textAlign: i % 2 === 0 ? 'left' : 'right' }}>
                {text}
              </p>
            </div>
          ))}
          <style>{/*css*/`
            .chat-pairing {
              img {
                width: 10%;
              }
              p {
                width: 90%;
              }
            }
          `}</style>
        </div>
      );
    
    case 'question-input':
      const [answer, setAnswer] = useState('');
      const [feedback, setFeedback] = useState('');
      return (
        <div>
          <h1>{slide.heading}</h1>
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer..."/>
          <button onClick={() => {
            if (slide.acceptableAnswers.some((validAnswer) => validAnswer.trim().toLowerCase() === answer.trim().toLowerCase())) {
              setFeedback(slide.feedback);
            } else {
              setFeedback('Not quite. Try looking at that one again...');
              onTeleport(slide.remedialSlideId);
            }
          }}>Submit</button>
          {feedback && <p>{feedback}</p>}
        </div>
      );
    
    default:
      return <div>Slide type not implemented yet: {slide.type}</div>;
  }
}