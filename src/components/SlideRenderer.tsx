import type { Slide, InfoCardsSlide, InfoTimelineSlide, QuestionMultipleChoiceSlide, QuestionInputSlide, QuestionWordBankSlide, QuestionToggleSlide } from '../types/slides.types';
import { chatPersonas } from '../data/personas';
import { useState } from 'react';

const MCQSlide = ({slide}: {slide: QuestionMultipleChoiceSlide}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const isCorrect = selected !== null && slide.options[selected].isCorrect;

  const reset = () => { setSelected(null); setChecked(false); setShowAnswer(false); };

  const optionClass = (i: number) => {
    const base = 'mcq-option-btn';
    if (!checked) return selected === i ? `${base} mcq-option-btn--selected` : base;
    if (slide.options[i].isCorrect && (showAnswer || isCorrect)) return `${base} mcq-option-btn--correct`;
    if (i === selected && !isCorrect) return `${base} mcq-option-btn--wrong`;
    return base;
  };

  return (
    <div className="mcq-container">
      <h1 className="mcq-heading">{slide.heading}</h1>
      <div className={`mcq-options${checked ? ' mcq-options--checked' : ''}`}>
        {slide.options.map((option, i) => (
          <button key={i} className={optionClass(i)} onClick={() => { if (!checked) setSelected(i); }}>
            {option.text}
          </button>
        ))}
      </div>
      {!checked && (
        <button className="mcq-check-btn" onClick={() => setChecked(true)} disabled={selected === null}>
          Check
        </button>
      )}
      {checked && (
        <>
          <p className={`mcq-feedback ${isCorrect ? 'mcq-feedback--correct' : 'mcq-feedback--wrong'}`}>
            {slide.options[selected!].feedback}
          </p>
          {!isCorrect && (
            <div className="mcq-wrong-actions">
              {!showAnswer && (
                <button className="mcq-see-answer-btn" onClick={() => setShowAnswer(true)}>See answer</button>
              )}
              <button className="mcq-retry-btn" onClick={reset}>Try again</button>
            </div>
          )}
        </>
      )}
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
            setTimeout(() => onTeleport(slide.remedialSlideId), 1500);
          }
        }} className="input-slide-btn">Submit</button>
      </form>
      {inputfeedback && <p className="input-slide-feedback">{inputfeedback}</p>}
    </div>
  );
};

const CardsSlide = ({ slide }: { slide: InfoCardsSlide }) => {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  return (
    <div>
      <h1>{slide.heading}</h1>
      <div className="card-container">
        {slide.cards.map((card, i) => (
          <div
            className={`card-wrapper${flipped[i] ? ' card-is-flipped' : ''}`}
            key={i}
            onClick={() => setFlipped(prev => ({ ...prev, [i]: !prev[i] }))}
          >
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

const WordBankSlide = ({ slide }: { slide: QuestionWordBankSlide }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = selected === slide.correctAnswer;

  const reset = () => { setSelected(null); setChecked(false); };

  return (
    <div>
      <h1>{slide.heading}</h1>
      <div className="word-bank-sentence">
        <span>{slide.beforeBlank} </span>
        <span
          className={`word-bank-blank${selected ? ' word-bank-blank--filled' : ''}${checked ? (isCorrect ? ' word-bank-blank--correct' : ' word-bank-blank--wrong') : ''}`}
          onClick={() => { if (!checked && selected) setSelected(null); }}
        >
          {selected || '        '}
        </span>
        {slide.afterBlank && <span> {slide.afterBlank}</span>}
      </div>
      <div className="word-bank-options">
        {slide.options.map((word, i) => (
          <button
            key={i}
            className={`word-bank-tile${selected === word ? ' word-bank-tile--selected' : ''}`}
            onClick={() => { if (!checked) setSelected(prev => prev === word ? null : word); }}
            disabled={checked && selected !== word}
          >
            {word}
          </button>
        ))}
      </div>
      <button className="word-bank-check-btn" onClick={() => setChecked(true)} disabled={!selected || checked}>
        Check
      </button>
      {checked && (
        <div className={`word-bank-feedback ${isCorrect ? 'word-bank-feedback--correct' : 'word-bank-feedback--wrong'}`}>
          <p>{isCorrect ? slide.feedback : 'Not quite — remove your answer and try again.'}</p>
          {!isCorrect && <button className="word-bank-retry-btn" onClick={reset}>Try again</button>}
        </div>
      )}
      <style>{/*css*/`
        .word-bank-sentence {
          font-size: 1.1rem;
          margin: 1.5rem 0 1rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.25rem;
          padding: 1rem 1.25rem;
          border: 1px solid #e0e0e0;
          border-radius: 0.75rem;
          background: white;
        }
        .word-bank-blank {
          display: inline-block;
          min-width: 6rem;
          border-bottom: 2px dashed #aaa;
          padding: 0.1rem 0.5rem;
          cursor: pointer;
          border-radius: 0.25rem;
          transition: background 0.15s;
        }
        .word-bank-blank--filled {
          border-bottom: 2px solid #333;
          background: #f5f5f5;
        }
        .word-bank-blank--correct {
          border-bottom: 2px solid #22c55e;
          background: #f0fdf4;
          color: #16a34a;
        }
        .word-bank-blank--wrong {
          border-bottom: 2px solid #ef4444;
          background: #fef2f2;
          color: #dc2626;
        }
        .word-bank-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
          padding: 0.75rem;
          background: #f5f5f5;
          border-radius: 0.75rem;
        }
        .word-bank-tile {
          padding: 0.4rem 1rem;
          border: 1.5px solid #ccc;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          font-size: 0.95rem;
          transition: border-color 0.15s, background 0.15s;
        }
        .word-bank-tile:hover:not(:disabled) {
          border-color: #888;
        }
        .word-bank-tile--selected {
          border-color: #333;
          background: #f0f0f0;
        }
        .word-bank-tile:disabled {
          opacity: 0.4;
          cursor: default;
        }
        .word-bank-check-btn {
          padding: 0.6rem 2rem;
          border: none;
          border-radius: 2rem;
          background: #222;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .word-bank-check-btn:disabled {
          opacity: 0.35;
          cursor: default;
        }
        .word-bank-feedback {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .word-bank-feedback p { margin: 0; }
        .word-bank-feedback--correct { background: #f0fdf4; color: #16a34a; }
        .word-bank-feedback--wrong { background: #fef2f2; color: #dc2626; }
        .word-bank-retry-btn {
          padding: 0.35rem 1rem;
          border: 1.5px solid currentColor;
          border-radius: 2rem;
          background: none;
          color: inherit;
          cursor: pointer;
          font-size: 0.9rem;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

const ToggleSlide = ({ slide }: { slide: QuestionToggleSlide }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div>
      {slide.preamble && <p>{slide.preamble}</p>}
      <p><strong>{slide.question}</strong></p>
      <div className="toggle-options">
        {slide.options.map((opt, i) => (
          <button
            key={i}
            className={`toggle-btn${selected === i ? ' toggle-btn--selected' : ''}`}
            onClick={() => setSelected(i)}
          >
            {opt.text}
          </button>
        ))}
      </div>
      {selected !== null && (
        <p className="toggle-feedback">{slide.options[selected].feedback}</p>
      )}
      <style>{/*css*/`
        .toggle-options {
          display: flex;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        .toggle-btn {
          padding: 0.4rem 1.25rem;
          border: 1.5px solid #ccc;
          border-radius: 0.5rem;
          background: white;
          cursor: pointer;
          font-size: 0.95rem;
          transition: border-color 0.15s, background 0.15s;
        }
        .toggle-btn:hover {
          border-color: #888;
        }
        .toggle-btn--selected {
          border-color: #333;
          background: #f0f0f0;
          font-weight: 500;
        }
        .toggle-feedback {
          margin-top: 0.5rem;
          color: #444;
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
      return <CardsSlide slide={slide} />;

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
            {slide.videoUrl && <iframe src={slide.videoUrl} height="315" width="560" allowFullScreen></iframe>}
          </div>
        </div>
      );

    case 'info-comparison':
      return (
        <div>
          <h1>{slide.heading}</h1>
          <div className="comparison-items">
            {slide.items.map((item, i) => (
              <div key={i} className="comparison-item">
                {item.imageUrl && <img src={item.imageUrl} alt={item.imageAlt} className="comparison-img" />}
                {!item.imageUrl && <div className="comparison-img comparison-img--placeholder" />}
                <strong>{item.label}</strong>
              </div>
            ))}
          </div>
          <p>{slide.body}</p>
          <style>{/*css*/`
            .comparison-items {
              display: flex;
              gap: 2rem;
              justify-content: center;
              margin: 1.5rem 0;
              flex-wrap: wrap;
            }
            .comparison-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.75rem;
              text-align: center;
            }
            .comparison-img {
              width: 10rem;
              height: 8rem;
              object-fit: contain;
              border-radius: 0.5rem;
              border: 1px solid #e0e0e0;
              background: #f5f5f5;
            }
            .comparison-img--placeholder {
              display: block;
            }
          `}</style>
        </div>
      );

    case 'question-mcq':
      return <MCQSlide slide={slide}/>;

    case 'question-input':
      return <InputSlide slide={slide} onTeleport={onTeleport}/>;

    case 'question-word-bank':
      return <WordBankSlide slide={slide} />;

    case 'question-toggle':
      return <ToggleSlide slide={slide} />;

    default:
      return <div>something went wrong (slide type could not be identified in SlideRenderer.tsx)</div>;
  }
}
