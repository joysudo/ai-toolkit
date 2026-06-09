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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },

    {
        slideId: "info-cards-test",
        type: "info-cards",
        heading: "this is the heading for the info-cards section",
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
        slideId: "info-timeline-test",
        type: "info-timeline",
        heading: "this is the info timeline heading",
        events: [
            {
                name: "name of event 1",
                date: "1776",
                imageUrl: "https://placeholder.cat/cat",
                imageAlt: "random cat placeholder",
                description: "this should pop up when i click"
            },
            {
                name: "name of event 1",
                date: "1776",
                imageUrl: "https://placeholder.cat/cat",
                imageAlt: "random cat placeholder",
                description: "this should pop up when i click. wow thi sis so much information for event number two so much information that it increases the text box size greatly, interfering with spacing this should pop up when i click. wow thi sis so much information for event number two so much information that it increases the text box size greatly, interfering with spacing this should pop up when i click. wow thi sis so much information for event number two so much information that it increases the text box size greatly, interfering with spacing"
            },
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