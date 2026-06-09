export interface SlideBase {
  slideId: string;
}

export interface InfoCardsSlide {
  type: "info-cards";
  heading: string;
  cards: {
    imageUrl: string;
    imageAlt: string;
    cardHeading: string;
    bodyText: string;
  }[];
}

export interface InfoTimelineSlide {
  type: "info-timeline";
  heading: string;
  events: {
    date: string;
    imageUrl: string;
    imageAlt: string;
    description: string;
  }[];
}

export interface InfoChatSlide {
  type: "info-chat";
  heading: string;
  dialogue: string[];
}

export interface InfoTextVideoSlide {
  type: "info-text-video";
  heading: string;
  textContent: {
    subheading?: string;
    body: string;
  };
  videoEmbedId: string;
}

export interface QuestionMultipleChoiceSlide {
  type: "question-mcq";
  heading: string;
  options: {
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export interface QuestionInputSlide {
  type: "question-input";
  heading: string;
  acceptableAnswers: string[];
  feedback: string;
  remedialSlideId: string;
}

export type Slide =
  | (SlideBase & InfoCardsSlide)
  | (SlideBase & InfoTimelineSlide)
  | (SlideBase & InfoChatSlide)
  | (SlideBase & InfoTextVideoSlide)
  | (SlideBase & QuestionMultipleChoiceSlide)
  | (SlideBase & QuestionInputSlide);