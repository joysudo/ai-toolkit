import type { Slide, InfoCardsSlide, InfoTimelineSlide, QuestionMultipleChoiceSlide, QuestionInputSlide, QuestionWordBankSlide, QuestionToggleSlide, InfoTextMediaSlide } from '../types/slides.types';
import { chatPersonas } from '../data/personas';
import { useState } from 'react';

const MCQSlide = ({ slide, onAdvance }: { slide: QuestionMultipleChoiceSlide; onAdvance: () => void }) => {
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
      {checked && selected !== null && (
        <p className={`mcq-feedback ${isCorrect ? 'mcq-feedback--correct' : 'mcq-feedback--wrong'}`}>
          {slide.options[selected].feedback}
        </p>
      )}
      <div className="slide-actions">
        {!checked && (
          <button className="btn-primary" onClick={() => setChecked(true)} disabled={selected === null}>
            Check
          </button>
        )}
        {checked && (
          <>
            <button className="btn-secondary" onClick={() => setShowAnswer(true)}>Why?</button>
            {!isCorrect && (
              <button className="btn-secondary" onClick={reset}>Try again</button>
            )}
            <button className="btn-primary" onClick={onAdvance}>Continue</button>
          </>
        )}
      </div>
    </div>
  );
};

const InputSlide = ({ slide, onTeleport, onAdvance }: { slide: QuestionInputSlide; onTeleport(slideId: string): void; onAdvance: () => void }) => {
  const [answer, setAnswer] = useState('');
  const [inputfeedback, setInputFeedback] = useState('');
  const [correct, setCorrect] = useState(false);

  return (
    <div>
      <h1>{slide.heading}</h1>
      <form
        className="input-slide-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type your answer..." className="input-slide-field" />
        <button onClick={() => {
          if (slide.acceptableAnswers.some((v) => v.trim().toLowerCase() === answer.trim().toLowerCase())) {
            setInputFeedback(slide.feedback);
            setCorrect(true);
          } else {
            setInputFeedback('Not quite. Try looking at that one again...');
            setTimeout(() => onTeleport(slide.remedialSlideId), 1500);
          }
        }} className="input-slide-btn">Submit</button>
      </form>
      {inputfeedback && <p className="input-slide-feedback">{inputfeedback}</p>}
      {correct && (
        <div className="slide-actions">
          <button className="btn-primary" onClick={onAdvance}>Continue</button>
        </div>
      )}
    </div>
  );
};

const CardsSlide = ({ slide, onAdvance }: { slide: InfoCardsSlide; onAdvance: () => void }) => {
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
                <img src={card.imageUrl || undefined} alt={card.imageAlt} />
                <h3>{card.cardHeading}</h3>
              </div>
              <p className="card-face card-back">{card.bodyText}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slide-actions">
        <button className="btn-primary" onClick={onAdvance}>Continue</button>
      </div>
    </div>
  );
};

const TimelineSlide = ({ slide, onAdvance }: { slide: InfoTimelineSlide; onAdvance: () => void }) => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const reveal = (i: number) => setRevealed(prev => ({ ...prev, [i]: !prev[i] }));
  return (
    <div>
      <h1>{slide.heading}</h1>
      <div className="timeline-container">
        {slide.events.map((event, i) => (
          <div key={i} className="timeline-column">
            <div className="timeline-top">
              {i % 2 === 0 ? (
                <button className="timeline-img-btn" onClick={() => reveal(i)} aria-label={`Reveal: ${event.name}`}>
                  <img src={event.imageUrl || undefined} alt={event.imageAlt} />
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
                  <img src={event.imageUrl || undefined} alt={event.imageAlt} />
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
      <div className="slide-actions">
        <button className="btn-primary" onClick={onAdvance}>Continue</button>
      </div>
    </div>
  );
};

const WordBankSlide = ({ slide, onAdvance }: { slide: QuestionWordBankSlide; onAdvance: () => void }) => {
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
          {selected || '        '}
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
      {checked && (
        <div className={`word-bank-feedback ${isCorrect ? 'word-bank-feedback--correct' : 'word-bank-feedback--wrong'}`}>
          <p>{isCorrect ? slide.feedback : 'Not quite — remove your answer and try again.'}</p>
          {!isCorrect && <button className="word-bank-retry-btn" onClick={reset}>Try again</button>}
        </div>
      )}
      <div className="slide-actions">
        {!checked && (
          <button className="btn-primary" onClick={() => setChecked(true)} disabled={!selected}>
            Check
          </button>
        )}
        {checked && (
          <button className="btn-primary" onClick={onAdvance}>Continue</button>
        )}
      </div>
    </div>
  );
};

const ToggleSlide = ({ slide, onAdvance }: { slide: QuestionToggleSlide; onAdvance: () => void }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div>
      {slide.imageUrl && (
        <img src={slide.imageUrl} alt={slide.imageAlt ?? ''} className="toggle-media" />
      )}
      {slide.heading && <h1>{slide.heading}</h1>}
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
      <div className="slide-actions">
        <button className="btn-primary" onClick={onAdvance}>Continue</button>
      </div>
    </div>
  );
};

const TextMediaSlide = ({ slide, onAdvance }: { slide: InfoTextMediaSlide; onAdvance: () => void }) => {
  if (slide.imageUrl) {
    return (
      <div className="text-media-stacked">
        <img src={slide.imageUrl} alt={slide.imageAlt ?? ''} className="text-media-image" />
        <h1>{slide.heading}</h1>
        {slide.textContent.subheading && <h3>{slide.textContent.subheading}</h3>}
        <p>{slide.textContent.body}</p>
        <div className="slide-actions">
          <button className="btn-primary" onClick={onAdvance}>Continue</button>
        </div>
      </div>
    );
  }

  if (!slide.videoUrl) {
    return (
      <div>
        <h1>{slide.heading}</h1>
        {slide.textContent.subheading && <h3>{slide.textContent.subheading}</h3>}
        <p>{slide.textContent.body}</p>
        <div className="slide-actions">
          <button className="btn-primary" onClick={onAdvance}>Continue</button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-media-sidebyside">
      <div className="text-media-text">
        <h1>{slide.heading}</h1>
        {slide.textContent.subheading && <h3>{slide.textContent.subheading}</h3>}
        <p>{slide.textContent.body}</p>
      </div>
      <iframe src={slide.videoUrl} height="315" width="560" allowFullScreen className="text-media-video" />
      <div className="slide-actions">
        <button className="btn-primary" onClick={onAdvance}>Continue</button>
      </div>
    </div>
  );
};

interface Props {
  slide: Slide;
  onTeleport(slideId: string): void;
  onAdvance(): void;
}

export function SlideRenderer({ slide, onTeleport, onAdvance }: Props) {
  switch (slide.type) {
    case 'info-cards':
      return <CardsSlide slide={slide} onAdvance={onAdvance} />;

    case 'info-timeline':
      return <TimelineSlide slide={slide} onAdvance={onAdvance} />;

    case 'info-chat':
      return (
        <div className="chat-container">
          <h1>{slide.heading}</h1>
          {slide.dialogue.map((text, i) => (
            <div className={`chat-pairing${i % 2 === 1 ? ' chat-pairing--reverse' : ''}`} key={i}>
              <img src={chatPersonas[i % 2].iconUrl} alt={chatPersonas[i % 2].name} />
              <p className={i % 2 === 0 ? 'bubble-left' : 'bubble-right'}>
                {text}
              </p>
            </div>
          ))}
          <div className="slide-actions">
            <button className="btn-primary" onClick={onAdvance}>Continue</button>
          </div>
        </div>
      );

    case 'info-text-media':
      return <TextMediaSlide slide={slide} onAdvance={onAdvance} />;

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
          <div className="slide-actions">
            <button className="btn-primary" onClick={onAdvance}>Continue</button>
          </div>
        </div>
      );

    case 'question-mcq':
      return <MCQSlide slide={slide} onAdvance={onAdvance} />;

    case 'question-input':
      return <InputSlide slide={slide} onTeleport={onTeleport} onAdvance={onAdvance} />;

    case 'question-word-bank':
      return <WordBankSlide slide={slide} onAdvance={onAdvance} />;

    case 'question-toggle':
      return <ToggleSlide slide={slide} onAdvance={onAdvance} />;

    default:
      return <div>something went wrong (slide type could not be identified in SlideRenderer.tsx)</div>;
  }
}
