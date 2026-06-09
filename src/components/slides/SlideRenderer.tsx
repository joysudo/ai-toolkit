import type { Slide } from '../../types/slides.types';
import { chatPersonas } from '../../data/personas';
import { useState } from 'react';

interface Props {
  slide: Slide;
  onTeleport(slideId: string): void;
}

export function SlideRenderer({ slide, onTeleport }: Props) {
  switch (slide.type) {
    case 'info-cards':
      return (
        <div>
          <h1>{slide.heading}</h1>
          <div className="card-container">
            {slide.cards.map((card, i) => (
              <div className="card-wrapper" key={i} onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
                <div className="card-inner">
                  <div className="card-face card-front">
                    <img src={card.imageUrl} alt={card.imageAlt}/>
                    <h3>{card.cardHeading}</h3>
                  </div>
                  <p className="card-face card-back">{card.bodyText}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{/*css*/`
            .card-container {
              display: flex;
              gap: 1rem;
              perspective: 1000px;
            }
            .card-wrapper.is-flipped .card-inner {
              transform: rotateY(180deg);
            }
            .card-inner {
              position: relative;
              width: 100%;
              height: 100%;
              text-align: center;
              transition: transform 0.5s ease;
              transform-style: preserve-3d;
              display: grid;
              grid-template-columns: 1fr;
              grid-template-areas: "card-space";
            }
            .card-front, .card-back {
              grid-area: card-space;
              flex-direction: column;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              backface-visibility: hidden;
              background-color: white;
            }
            .card-back {
              transform: rotateY(180deg)
            }
          `}</style>
        </div>
      );

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

    case 'info-text-video':
      return (
        <div>
          <h1>{slide.heading}</h1>
          <div style={{ display: 'flex' }}>
            <div>
              {slide.textContent.subheading && <h3>{slide.textContent.subheading}</h3>}
              <p>{slide.textContent.body}</p>
            </div>
            <iframe src={slide.videoUrl} height="315" width="560" allowFullScreen></iframe>
          </div>
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
              // make this unlock the "next" button later
            } else {
              setFeedback('Not quite. Try looking at that one again...');
              // add brief pause
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