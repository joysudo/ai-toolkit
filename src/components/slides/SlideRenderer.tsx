import type { Slide } from '../../types/slides.types';
import { chatPersonas } from '../../data/personas';

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

    default:
      return <div>Slide type not implemented yet: {slide.type}</div>;
  }
}