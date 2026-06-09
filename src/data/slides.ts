import type { Slide } from "../types/slides.types";

export const module1: Slide[] = [
    {
        slideId: "info-chat-test",
        type: "info-chat",
        heading: "this is an info-chat test",
        dialogue: [
            "first thing said",
            "second thing said",
            "third thing said",
            "fourth thing said",
        ]
    },
    
    {
        slideId: "info-text-video-test",
        type: "info-text-video",
        heading: "this is an info-text-video test",
        textContent: {
            subheading: "this is a text subheading",
            body: "this is body text. body text body text body text. i am manually typing body text in the age of large language modules. and they said ai could replace us."
        },
        videoEmbedId: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },

    {
        slideId: "info-cards-test",
        type: "info-cards",
        heading: "",
        cards: [
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Grey_kitty.jpg",
                imageAlt: "skinny grey kitty",
                cardHeading: "front of the first card",
                bodyText: "this is the body text that you see after you flip the first card over"
            },
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/72/Grey_kitty.jpg",
                imageAlt: "skinny grey kitty",
                cardHeading: "front of the second card",
                bodyText: "this is the body text that you see after you flip the second card over"
            }
        ]
    },

    {
        slideId: "question-input-test",
        type: "question-input",
        heading: "this is a test for question input. say 'yay' or 'cool'. it will teleport you to info-text-video-test if you get it wrong",
        acceptableAnswers: ["yay", "cool"],
        feedback: "correct hooray",
        remedialSlideId: "info-text-video-test",
    }
] as const;