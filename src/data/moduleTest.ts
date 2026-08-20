import type { Slide } from "../types/slides.types";

export const moduleTest: Slide[] = [
    {
        slideId: "orient-welcome",
        type: "info-chat",
        heading: "Welcome to the AI Toolkit",
        dialogue: [
            "Hey! I'm Connel. Welcome to the Pi515 AI Toolkit — we're glad you're here.",
            "And I'm Marianne! Before we jump into the course, this short intro will get you oriented.",
            "You'll get a taste of what's ahead and learn how each part of the course works.",
            "Let's go!"
        ]
    },
    {
        slideId: "orient-preview",
        type: "info-cards",
        heading: "Here's what you'll explore",
        cards: [
            {
                imageUrl: "",
                imageAlt: "Icon representing what AI is",
                cardHeading: "What is AI?",
                bodyText: "We'll define Artificial Intelligence clearly — cutting through the hype to explain what it actually is and how it works."
            },
            {
                imageUrl: "",
                imageAlt: "Icon representing AI history",
                cardHeading: "The History of AI",
                bodyText: "AI has been in development since the 1950s. You'll learn the key milestones that led us from early theories to tools like ChatGPT."
            },
            {
                imageUrl: "",
                imageAlt: "Icon representing AI in the real world",
                cardHeading: "AI in the Real World",
                bodyText: "From healthcare to music to your phone — AI is already shaping your world. We'll explore where, how, and what it means for you."
            }
        ]
    },
    {
        slideId: "orient-what-is-ai",
        type: "info-text-media",
        heading: "So, what is AI?",
        textContent: {
            subheading: "A working definition",
            body: "Artificial Intelligence (AI) is a branch of computer science focused on building systems that can perform tasks that typically require human intelligence — things like understanding language, recognizing patterns, and making decisions. It's not magic, and it's not a brain. It's software built to be very good at specific things."
        },
        videoUrl: "https://www.youtube.com/embed/ad79nYk2keg"
    },
    {
        slideId: "orient-timeline",
        type: "info-timeline",
        heading: "AI has a longer history than you might think",
        events: [
            {
                name: "The Turing Test",
                date: "1950",
                imageUrl: "",
                imageAlt: "Alan Turing, 1950",
                description: "British mathematician Alan Turing asks 'Can machines think?' — a question that defines the field of AI to this day."
            },
            {
                name: "Deep Blue",
                date: "1997",
                imageUrl: "",
                imageAlt: "IBM Deep Blue chess computer",
                description: "IBM's chess-playing AI defeats world champion Garry Kasparov, proving machines can outperform humans at complex reasoning."
            },
            {
                name: "Siri Launches",
                date: "2011",
                imageUrl: "",
                imageAlt: "Siri voice assistant icon",
                description: "Apple launches Siri, bringing AI assistants into millions of pockets and making talking to machines feel normal."
            },
            {
                name: "ChatGPT",
                date: "2022",
                imageUrl: "",
                imageAlt: "ChatGPT logo",
                description: "OpenAI's ChatGPT reaches 100 million users in just two months — the fastest-growing app in history — and puts AI in the global spotlight."
            }
        ]
    },
    {
        slideId: "orient-dialogue",
        type: "info-chat",
        heading: "Narrow AI vs. General AI",
        dialogue: [
            "So the AI we have today — what exactly is it?",
            "Almost everything we interact with is what's called 'Narrow AI.' It's trained to do one specific job really well — a music recommendation algorithm, a chatbot, a language translator. All narrow.",
            "Could AI ever be more like a human? Able to do... anything?",
            "That's called Artificial General Intelligence, or AGI. It doesn't exist yet — and experts disagree sharply about whether it ever will, or when. That debate is one of the most important conversations happening in the field right now."
        ]
    },
    {
        slideId: "orient-comparison",
        type: "info-comparison",
        heading: "Two types of AI",
        items: [
            {
                imageUrl: "",
                imageAlt: "Icon for Narrow AI",
                label: "Narrow AI"
            },
            {
                imageUrl: "",
                imageAlt: "Icon for General AI (AGI)",
                label: "General AI (AGI)"
            }
        ],
        body: "Narrow AI is real, in use today, and extremely good at specific tasks. General AI — a system with human-like flexibility across any domain — remains theoretical. Every AI tool you've heard of (ChatGPT, Siri, image generators) is Narrow AI."
    },
    {
        slideId: "orient-mcq",
        type: "question-mcq",
        heading: "Which of the following is an example of Narrow AI?",
        options: [
            {
                text: "A music app that recommends songs based on what you've listened to.",
                isCorrect: true,
                feedback: "Correct! Music recommendation is a focused task — exactly what Narrow AI is designed for. It's very capable within that one domain."
            },
            {
                text: "A robot that can do any job a human can do.",
                isCorrect: false,
                feedback: "That describes Artificial General Intelligence (AGI) — which doesn't exist yet."
            },
            {
                text: "A computer that is smarter than all humans combined.",
                isCorrect: false,
                feedback: "That's called 'Artificial Superintelligence' — a theoretical concept well beyond anything that exists today."
            }
        ],
        explanation: "Narrow AI is designed for a single, specific task. It's extremely capable within that domain but has no ability to do anything outside it. Every AI tool you've heard of — recommendation engines, chatbots, image generators — is Narrow AI."
    },
    {
        slideId: "orient-word-bank",
        type: "question-word-bank",
        heading: "Complete the sentence.",
        beforeBlank: "ChatGPT reached 100 million users in just two",
        afterBlank: "— the fastest any app had ever grown.",
        options: ["years", "months", "weeks", "days"],
        correctAnswer: "months",
        feedback: "Right — two months. For comparison, it took Instagram over two years to hit the same milestone."
    },
    {
        slideId: "orient-toggle",
        type: "question-toggle",
        question: "Have you used an AI tool before — like ChatGPT, Google Translate, or a voice assistant?",
        options: [
            {
                text: "Yes",
                feedback: "Great — you already have some experience to build on. As we go through the course, think about how what you're learning connects to tools you've already used."
            },
            {
                text: "No",
                feedback: "That's completely fine. This course is designed to meet you exactly where you are. You'll be familiar with plenty of AI tools by the end."
            }
        ]
    },
    {
        slideId: "orient-hint",
        type: "info-chat",
        heading: "Heads up",
        dialogue: [
            "The next slide is going to ask you a question.",
            "Should I be nervous?",
            "Not at all — the answer is right here. The person who first asked 'Can machines think?' and proposed a test for machine intelligence was Alan Turing, a British mathematician, in 1950.",
            "Got it. Alan Turing.",
            "Exactly. Now you're ready."
        ]
    },
    {
        slideId: "orient-input",
        type: "question-input",
        heading: "Who first proposed a test for machine intelligence in 1950?",
        acceptableAnswers: ["Alan Turing", "Turing", "alan turing", "turing"],
        feedback: "That's right — Alan Turing. His ideas from over 70 years ago are still shaping the AI you interact with today.",
        remedialSlideId: "orient-hint"
    },
    {
        slideId: "orient-nav-tips",
        type: "info-text-media",
        heading: "Getting around",
        textContent: {
            subheading: "A few ways to navigate",
            body: "Use the arrow buttons at the top of the screen to move between slides, or press the ← and → keys (or A and D) on your keyboard. The bar at the top is your progress tracker — click anywhere on it to jump to any slide you've already unlocked. Once a slide is unlocked, it stays that way. Try going back a few slides now, then come back when you're ready to finish."
        }
    },
    {
        slideId: "orient-done",
        type: "info-chat",
        heading: "You're all set!",
        dialogue: [
            "And that's it — you've completed the orientation!",
            "That was actually interesting. I didn't realize AI had been around since the 1950s.",
            "Most people don't! There's a lot more where that came from. Head back to the dashboard and start Module 1 whenever you're ready.",
            "Let's do it."
        ]
    }
];
