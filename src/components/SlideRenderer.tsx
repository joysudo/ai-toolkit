import type { Slide, InfoTimelineSlide, QuestionMultipleChoiceSlide, QuestionInputSlide } from '../types/slides.types';
import { chatPersonas } from '../data/personas';
import { useState } from 'react';

const MCQSlide = ({slide}: {slide: QuestionMultipleChoiceSlide}) => {
  const [mcqFeedback, setMcqFeedback] = useState('');
  return (
    <div className="mcq-container">
      <h1 className="mcq-heading">{slide.heading}</h1>
      <div className="mcq-options">
        {slide.options.map((option, i) => (
          <button key={i} onClick={() => setMcqFeedback(option.feedback)} className="mcq-option-btn">
            {option.text}
          </button>
        ))}
      </div>
      {mcqFeedback && <p className="mcq-feedback">{mcqFeedback}</p>}
    </div>
  );
};

const InputSlide = ({ slide, onTeleport }: { slide: QuestionInputSlide; onTeleport(slideId: string): void }) => {
  const [answer, setAnswer] = useState('');
  const [inputfeedback, setInputFeedback] = useState('');
  return (
    <div>
      <h1>{slide.heading}</h1>
      <form
        className="input-slide-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer..." className="input-slide-field"/>
        <button onClick={() => {
          if (slide.acceptableAnswers.some((validAnswer) => validAnswer.trim().toLowerCase() === answer.trim().toLowerCase())) {
            setInputFeedback(slide.feedback);
            // make this unlock the "next" button later
          } else {
            setInputFeedback('Not quite. Try looking at that one again...');
            // add brief pause
            onTeleport(slide.remedialSlideId);
          }
        }} className="input-slide-btn">Submit</button>
      </form>
      {inputfeedback && <p className="input-slide-feedback">{inputfeedback}</p>}
    </div>
  );
};

const TimelineSlide = ({ slide }: { slide: InfoTimelineSlide }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const reveal = (i: number) => setRevealed(prev => ({ ...prev, [i]: true }));
  return (
    <div>
      <h1>{slide.heading}</h1>
      <div className="timeline-container">
        {slide.events.map((event, i) => (
          <div key={i} className="timeline-column">
            <div className="timeline-top">
              {i % 2 === 0 ? (
                <button className="timeline-img-btn" onClick={() => reveal(i)} aria-label={`Reveal: ${event.name}`}>
                  <img src={event.imageUrl} alt={event.imageAlt} />
                </button>
              ) : (
                <div className="timeline-reveal" style={{ opacity: revealed[i] ? 1 : 0 }}>
                  <h3>{event.name}</h3>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </div>
              )}
            </div>
            <div className="timeline-line" />
            <div className="timeline-bottom">
              {i % 2 === 1 ? (
                <button className="timeline-img-btn" onClick={() => reveal(i)} aria-label={`Reveal: ${event.name}`}>
                  <img src={event.imageUrl} alt={event.imageAlt} />
                </button>
              ) : (
                <div className="timeline-reveal" style={{ opacity: revealed[i] ? 1 : 0 }}>
                  <h3>{event.name}</h3>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{/*css*/`
        .timeline-container {
          display: flex;
          align-items: stretch;
          min-height: 24rem;
        }
        .timeline-column {
          flex: 1;
          display: grid;
          grid-template-rows: 1fr 3px 1fr;
        }
        .timeline-top {
          display: flex;
          align-items: flex-end;
          padding: 0 0.5rem 0.5rem;
        }
        .timeline-bottom {
          display: flex;
          align-items: flex-start;
          padding: 0.5rem 0.5rem 0;
        }
        .timeline-line {
          background-color: black;
          position: relative;
          width: 100%;
        }
        .timeline-line::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 10px;
          height: 10px;
          border: 3px solid black;
          border-radius: 50%;
          background-color: white;
        }
        .timeline-img-btn {
          background: #f0f0f0;
          border: none;
          padding: 0;
          cursor: pointer;
          width: 100%;
          min-height: 8rem;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .timeline-img-btn img {
          width: 100%;
          height: 100%;
          min-height: 8rem;
          object-fit: cover;
          border-radius: 0.5rem;
          display: block;
        }
        .timeline-reveal {
          transition: opacity 0.2s ease;
          width: 100%;
        }
        .timeline-reveal h3 {
          margin: 0 0 0.25rem;
          font-size: 0.85rem;
        }
        .timeline-reveal p {
          margin: 0 0 0.25rem;
          font-size: 0.8rem;
          color: #555;
        }
        @media (max-width: 768px) {
          .timeline-container {
            flex-direction: column;
            min-height: unset;
          }
          .timeline-column {
            grid-template-rows: unset;
            grid-template-columns: auto 3px auto;
            min-height: 6rem;
          }
          .timeline-top, .timeline-bottom {
            padding: 0.5rem;
          }
          .timeline-line {
            width: 3px;
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
};

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
              <div className="card-wrapper" key={i} onClick={(e) => e.currentTarget.classList.toggle('card-is-flipped')}>
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
              flex-wrap: wrap;
            }
            .card-wrapper {
              flex: 1 1 16rem;
            }
            .card-wrapper.card-is-flipped .card-inner {
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
              padding: 1rem;
              border-radius: 1rem;
              border: 1px solid lightgray;
            }
            .card-front img {
              border-radius: 0.5rem;
              display: block;
              width: 100%;
              object-fit: cover;
            }
            .card-back {
              transform: rotateY(180deg)
            }
          `}</style>
        </div>
      );

    case 'info-timeline':
      return <TimelineSlide slide={slide} />;

    case 'info-chat':
      return (
        <div className="chat-container">
          <h1>{slide.heading}</h1>
          {slide.dialogue.map((text, i) => (
            <div className="chat-pairing" style={{ display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'}} key={i}>
              <img src={ chatPersonas[i % 2].iconUrl } />
              <p className={i % 2 === 0 ? 'bubble-left' : 'bubble-right'}>
                {text}
              </p>
            </div>
          ))}
          <style>{/*css*/`
            .chat-container {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              margin: 0 auto;
            }
            .chat-pairing {
              display: flex;
              align-items: flex-end;
              gap: 0.75rem;

              img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 50%;
                object-fit: cover;
              }

              p {
                margin: 0;
                padding: 0.75rem 1rem;
                max-width: 70%;
                border-radius: 1.25rem;
                line-height: 1.4;
              }
            }
            .bubble-left {
              background-color: #f0f0f0;
              color: #000000;
              border-bottom-left-radius: 0.25rem !important;
            }
            .bubble-right {
              background-color: #39DC78;
              color: #ffffff;
              border-bottom-right-radius: 0.25rem !important;
            }
          `}</style>
        </div>
      );

    case 'info-text-video':
      if (import.meta.env.DEV && slide.videoUrl && slide.videoUrl.includes('watch?v=')) {
        console.warn(`[SlideRenderer] Slide "${slide.slideId}": videoUrl uses a watch URL instead of an embed URL. Replace "youtube.com/watch?v=" with "youtube.com/embed/".`);
      }
      return (
        <div>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{ flexBasis: '50%' }}>
              <h1>{slide.heading}</h1>
              {slide.textContent.subheading && <h3>{slide.textContent.subheading}</h3>}
              <p>{slide.textContent.body}</p>
            </div>
            <iframe src={slide.videoUrl} height="315" width="560" allowFullScreen></iframe>
          </div>
        </div>
      );

    case 'question-mcq':
      return <MCQSlide slide={slide}/>;

    case 'question-input':
      return <InputSlide slide={slide} onTeleport={onTeleport}/>;

    default:
      return <div>something went wrong (slide type could not be identified in SlideRenderer.tsx)</div>;
  }
}
