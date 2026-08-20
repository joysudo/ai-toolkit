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
    name: string;
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
  videoUrl: string;
}

export interface InfoComparisonSlide {
  type: "info-comparison";
  heading: string;
  items: {
    imageUrl: string;
    imageAlt: string;
    label: string;
  }[];
  body: string;
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

export interface QuestionWordBankSlide {
  type: "question-word-bank";
  heading: string;
  beforeBlank: string;
  afterBlank: string;
  options: string[];
  correctAnswer: string;
  feedback: string;
}

export interface QuestionToggleSlide {
  type: "question-toggle";
  heading: string;
  preamble?: string;
  question: string;
  options: {
    text: string;
    feedback: string;
  }[];
}

export type Slide =
  | (SlideBase & InfoCardsSlide)
  | (SlideBase & InfoTimelineSlide)
  | (SlideBase & InfoChatSlide)
  | (SlideBase & InfoTextVideoSlide)
  | (SlideBase & InfoComparisonSlide)
  | (SlideBase & QuestionMultipleChoiceSlide)
  | (SlideBase & QuestionInputSlide)
  | (SlideBase & QuestionWordBankSlide)
  | (SlideBase & QuestionToggleSlide);
