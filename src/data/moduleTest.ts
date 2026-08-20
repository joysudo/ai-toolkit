import type { Slide } from "../types/slides.types";

export const moduleTest: Slide[] = [
    {
        slideId: "test-chat",
        type: "info-chat",
        heading: "Chat Slide",
        dialogue: [
            "Hi! I'm Connell. This is a chat slide.",
            "Hi! I'm Marianne. Chat slides show a conversation between two characters.",
            "You can have as many bubbles as you need.",
            "Got it — alternating left and right!"
        ]
    },
    {
        slideId: "test-cards",
        type: "info-cards",
        heading: "Cards Slide",
        cards: [
            {
                imageUrl: "",
                imageAlt: "Icon for card one",
                cardHeading: "Card One",
                bodyText: "This is the back of card one. Click any card to flip it."
            },
            {
                imageUrl: "",
                imageAlt: "Icon for card two",
                cardHeading: "Card Two",
                bodyText: "This is the back of card two."
            },
            {
                imageUrl: "",
                imageAlt: "Icon for card three",
                cardHeading: "Card Three",
                bodyText: "This is the back of card three."
            }
        ]
    },
    {
        slideId: "test-timeline",
        type: "info-timeline",
        heading: "Timeline Slide",
        events: [
            {
                name: "First Event",
                date: "2020",
                imageUrl: "",
                imageAlt: "First event",
                description: "Click the image above to reveal this text."
            },
            {
                name: "Second Event",
                date: "2021",
                imageUrl: "",
                imageAlt: "Second event",
                description: "Events alternate above and below the line."
            },
            {
                name: "Third Event",
                date: "2022",
                imageUrl: "",
                imageAlt: "Third event",
                description: "Click each image to reveal its description."
            }
        ]
    },
    {
        slideId: "test-text-video",
        type: "info-text-video",
        heading: "Text / Video Slide",
        textContent: {
            subheading: "Optional Subheading",
            body: "This slide shows text on the left and a video on the right. The subheading is optional. If no video URL is provided, the text takes up the full width."
        },
        videoUrl: "https://www.youtube.com/embed/ad79nYk2keg"
    },
    {
        slideId: "test-mcq",
        type: "question-mcq",
        heading: "Multiple Choice Slide — which is the correct answer?",
        options: [
            {
                text: "This is the correct answer.",
                isCorrect: true,
                feedback: "Correct! Great job."
            },
            {
                text: "This is a wrong answer.",
                isCorrect: false,
                feedback: "Not quite — try again."
            },
            {
                text: "This is also a wrong answer.",
                isCorrect: false,
                feedback: "Not quite — try again."
            }
        ]
    },
    {
        slideId: "test-input",
        type: "question-input",
        heading: "Free Response Slide — type 'hello' to continue",
        acceptableAnswers: ["hello"],
        feedback: "Correct!",
        remedialSlideId: "test-text-video"
    },
    {
        slideId: "test-comparison",
        type: "info-comparison",
        heading: "Comparison Slide",
        items: [
            {
                imageUrl: "",
                imageAlt: "Item A icon",
                label: "Item A"
            },
            {
                imageUrl: "",
                imageAlt: "Item B icon",
                label: "Item B"
            }
        ],
        body: "Comparison slides show two concepts side by side with images and labels, then explanatory text below. Useful for contrasting things like LLM vs SLM or Narrow AI vs General AI."
    },
    {
        slideId: "test-word-bank",
        type: "question-word-bank",
        heading: "Complete the sentence.",
        beforeBlank: "The capital of France is",
        afterBlank: ".",
        options: ["London", "Paris", "Berlin", "Rome"],
        correctAnswer: "Paris",
        feedback: "Correct! Paris is the capital of France."
    },
    {
        slideId: "test-toggle",
        type: "question-toggle",
        heading: "Toggle Slide",
        preamble: "Toggle slides let students answer a short reflective question with compact buttons instead of full-width MCQ options.",
        question: "Have you seen a toggle question before?",
        options: [
            {
                text: "Yes.",
                feedback: "Great — you're already familiar with this format."
            },
            {
                text: "No.",
                feedback: "No problem — now you have!"
            }
        ]
    }
];
