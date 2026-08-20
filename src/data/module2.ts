import type { Slide } from "../types/slides.types";

export const module2: Slide[] = [
    {
        slideId: "chat-intro",
        type: "info-chat",
        heading: "Ethics and Bias in AI",
        dialogue: [
            "Hello! I'm Connell, the ethics and bias supervisor.",
            "Hello! I'm Marianne, I have some questions about ethics and bias in AI."
        ]
    },
    {
        slideId: "info-what-learn",
        type: "info-cards",
        heading: "Understanding Bias and Ethics in AI",
        cards: [
            {
                imageUrl: "",
                imageAlt: "Icon representing bias in AI",
                cardHeading: "Bias",
                bodyText: "Bias is essential for making any AI and we'll show you how bias plays a crucial role in AI development and decision-making."
            },
            {
                imageUrl: "",
                imageAlt: "Icon showing the connection between bias and AI",
                cardHeading: "How it's related to AI",
                bodyText: "Bias is the difference between a good AI vs less liked AI and we want people to know the differences between biased and unbiased AI systems."
            },
            {
                imageUrl: "",
                imageAlt: "Icon representing ethics",
                cardHeading: "Ethics",
                bodyText: "Ethics can always be tied back to what right from wrong is, forming the foundation for responsible AI development."
            },
            {
                imageUrl: "",
                imageAlt: "Icon showing ethics in AI",
                cardHeading: "How it can be related to AI",
                bodyText: "An AI needs a basic understanding of human morals to make ethical decisions and interact appropriately with users."
            }
        ]
    },
    {
        slideId: "info-bias-basics",
        type: "info-text-media",
        heading: "Learn the basics of Bias",
        textContent: {
            body: "Think of ethics as what right and wrong is and of bias as opinions not facts."
        },
        videoUrl: "https://www.youtube.com/embed/74nP17R7SXY?si=O9AbOH7pZ89wC1m_"
    },
    {
        slideId: "q-true-false-bias",
        type: "question-mcq",
        heading: "True or false: Bias can happen when an AI has a coding error?",
        options: [
            {
                text: "True",
                isCorrect: true,
                feedback: "Correct! Bias can sometimes manifest as coding errors or unintended patterns in AI systems."
            },
            {
                text: "False",
                isCorrect: false,
                feedback: "Incorrect. Bias can indeed be related to coding errors or flawed data patterns in AI systems."
            }
        ],
        explanation: "Bias can enter an AI through coding errors, but also through skewed training data, poor design choices, or inadequate testing. For example, a hiring tool trained mostly on male resumes may learn to rank men higher — not from a bug, but from biased data."
    },
    {
        slideId: "q-true-false-ethics",
        type: "question-mcq",
        heading: "True or false: Ethics can also be known as right from wrong?",
        options: [
            {
                text: "True",
                isCorrect: true,
                feedback: "Correct! Ethics is fundamentally about distinguishing right from wrong."
            },
            {
                text: "False",
                isCorrect: false,
                feedback: "Incorrect. Ethics is indeed the study of what is right and wrong."
            }
        ],
        explanation: "Ethics is the branch of philosophy concerned with what is morally right and wrong. Applied to AI, it means building systems that make fair, honest decisions — and setting rules about what an AI should never do, even if it technically could."
    },
    {
        slideId: "info-what-are-ethics",
        type: "info-text-media",
        heading: "What are Ethics?",
        textContent: {
            body: "Ethics in AI refers to the moral principles and guidelines that govern how AI systems should behave and make decisions."
        },
        videoUrl: "https://www.youtube.com/embed/4vWXpzlL7Mo?si=__8wGubKirAd21hx"
    },
    {
        slideId: "q-teaching-ethics",
        type: "question-input",
        heading: "Teaching an AI right from wrong is?",
        acceptableAnswers: ["Ethics", "ethics"],
        feedback: "Correct! Teaching an AI right from wrong is Ethics.",
        remedialSlideId: "info-what-are-ethics"
    },
    {
        slideId: "info-ethics-bias-details",
        type: "info-text-media",
        heading: "Understanding Ethics and Bias",
        textContent: {
            body: "Ethics: Ethics is when an AI is programed to know morals and what is right from wrong.\n\nBias: Bias is when an AI has a glitch and restricts groups. An example being Amazon developed an AI system to automate resume screening and rank candidates for technical roles. Bias can be in groups like race, age, degrees or gender.\n\nHow they connect: Having both ethics and bias will lead to an AI that will not have any bias and will think logically not emotionally. Having both will help others understand more."
        },
        videoUrl: ""
    },
    {
        slideId: "q-best-response",
        type: "question-mcq",
        heading: "What is the best response when coding an AI?",
        options: [
            {
                text: "Having ethics and morals is important to ensure a fully functional AI",
                isCorrect: true,
                feedback: "Correct! Ethics and morals are both essential for creating a well-functioning AI system."
            },
            {
                text: "we only need one they are basically the same it should work fine without both",
                isCorrect: false,
                feedback: "Incorrect. Ethics and bias are distinct concepts, and both are important for AI development."
            },
            {
                text: "It would take too much time to add both lets just add the more important one",
                isCorrect: false,
                feedback: "Incorrect. Both ethics and bias considerations are crucial and shouldn't be skipped."
            }
        ],
        explanation: "Ethics and bias address different problems. Ethics sets the moral compass — what an AI should and shouldn't do. Managing bias ensures the AI doesn't systematically treat groups unfairly. A system can be ethically designed but still produce biased results if the training data is skewed."
    },
    {
        slideId: "q-identify-unbias",
        type: "question-mcq",
        heading: "Can you identify unbiased and ethical behavior?",
        options: [
            {
                text: "I want an AI to create a picture but it says that my name has too many letters to do so. so i just changed the name i put in.",
                isCorrect: false,
                feedback: "Incorrect. This shows bias in the system that required a workaround."
            },
            {
                text: "I think that the AI is wrong i asked it what 4 + 4 is and it said 20 and rejected me because i showed that it was wrong.",
                isCorrect: false,
                feedback: "Incorrect. This shows a flawed AI that can't accept corrections, which is unethical behavior."
            },
            {
                text: "I asked the AI to help me with my essay and it showed me how to improve it and i aced my test.",
                isCorrect: true,
                feedback: "Correct! This demonstrates unbiased, ethical AI behavior that helps users without discrimination."
            }
        ],
        explanation: "The first two options both reveal problems: one shows an AI that discriminates based on name length, the other shows an AI that rejects accurate corrections. Ethical, unbiased AI helps users accomplish their goals without imposing unfair restrictions or breaking down when challenged."
    },
    {
        slideId: "q-fill-blanks",
        type: "question-input",
        heading: "We use ___ and ___ to create safe AI. Ethics can be known as ___. Bias can be known as ___.",
        acceptableAnswers: ["Ethics, Bias, Morals, opinions", "ethics, bias, morals, opinions", "Ethics, Bias, Morals, Opinions", "ethics, bias, morals, opinions"],
        feedback: "Correct! We use Ethics and Bias to create safe AI. Ethics can also be known as morals, and Bias can be known as opinions.",
        remedialSlideId: "info-ethics-bias-details"
    },
    {
        slideId: "info-learnings",
        type: "info-text-media",
        heading: "Learnings",
        textContent: {
            body: "In this scenario, we have learned to handle a biased AI and what that means.\n\nKeys learned and soft skills developed:\n\nDetail orientated: The ability to see minor mistakes. Being detail oriented is helpful to find errors in code for AI.\n\nActive listening: Communication technique that involves giving full attention, to better understand why something may be happening.\n\nTaking responsibility: Owning what happened by acknowledging my actions and those of the people I'm responsible for, and committing to make things right or enhance the situation.\n\nProviding solutions: Providing concrete solutions in a proactive manner by proposing specific and effective measures to solve a problem."
        },
        videoUrl: ""
    },
    // Escape Room Slides
    {
        slideId: "escape-title",
        type: "info-text-media",
        heading: "Escape Room: Ethics and Bias",
        textContent: {
            body: "The point is to escape a classroom by answering questions to leave the room and complete the whole module."
        },
        videoUrl: ""
    },
    {
        slideId: "escape-lesson1",
        type: "question-mcq",
        heading: "True or false: If an AI offers help to everyone and excludes no one, is this an example of ethics?",
        options: [
            {
                text: "True",
                isCorrect: true,
                feedback: "Correct! This is an example of ethics in action."
            },
            {
                text: "False",
                isCorrect: false,
                feedback: "Incorrect. Offering help to everyone without exclusion is indeed an example of ethical AI behavior."
            }
        ],
        explanation: "A core principle of AI ethics is non-discrimination — the system should treat all users fairly, regardless of their background, identity, or characteristics. Offering help to everyone without exclusion is a straightforward example of that principle in action."
    },
    {
        slideId: "q-corrupt-ai",
        type: "question-mcq",
        heading: "What are signs of corrupt AI?",
        options: [
            {
                text: "Showing why something should not be used.",
                isCorrect: false,
                feedback: "Incorrect. Providing valid reasons against something can be ethical behavior."
            },
            {
                text: "Stating that public speech means you can hurt others.",
                isCorrect: true,
                feedback: "Correct! This is a sign of corrupt AI as it promotes harmful behavior."
            },
            {
                text: "Telling you how earthquakes harm people.",
                isCorrect: false,
                feedback: "Incorrect. Providing factual information about natural disasters is not corrupt behavior."
            }
        ],
        explanation: "Corrupt AI promotes harmful behavior rather than preventing it. Claiming that 'free speech' means you can hurt others is dangerous misinformation that could cause real-world harm. The other two options — explaining risks and providing factual information — are legitimate, helpful behaviors."
    },
    {
        slideId: "q-detect-bias",
        type: "question-mcq",
        heading: "What is the best way to detect bias?",
        options: [
            {
                text: "Ask the AI for further explanation or more information about sources.",
                isCorrect: true,
                feedback: "Correct! Asking for explanations and source information is the best way to detect bias."
            },
            {
                text: "Ignore the common mistakes.",
                isCorrect: false,
                feedback: "Incorrect. Ignoring mistakes won't help detect bias."
            },
            {
                text: "Only use one of the features.",
                isCorrect: false,
                feedback: "Incorrect. Limiting features won't help detect bias."
            }
        ],
        explanation: "Asking an AI to explain its reasoning or cite its sources forces it to make its assumptions visible. This is especially critical when AI makes high-stakes decisions — like hiring, lending, or medical diagnosis — where hidden bias could seriously harm real people."
    },
    {
        slideId: "escape-lesson1-complete",
        type: "info-text-media",
        heading: "Lesson 1 Completed!",
        textContent: {
            body: "Create a section that says lesson one has been completed."
        },
        videoUrl: ""
    },
    {
        slideId: "q-bias-example",
        type: "question-mcq",
        heading: "What is a good example of Bias in AI?",
        options: [
            {
                text: "Offering help with all subjects of school for everyone.",
                isCorrect: false,
                feedback: "Incorrect. This is an example of ethical, unbiased behavior."
            },
            {
                text: "Only helping people over the age of 13",
                isCorrect: true,
                feedback: "Correct! Excluding users based on age is an example of bias."
            },
            {
                text: "Offering help for students struggling with school.",
                isCorrect: false,
                feedback: "Incorrect. This is an example of ethical, helpful behavior."
            }
        ],
        explanation: "Bias in AI means treating people differently based on characteristics that shouldn't affect the outcome — like age, race, gender, or name. Excluding users based solely on age, without a relevant reason, is a textbook example of discriminatory bias baked into the system's design."
    },
    {
        slideId: "q-exclusion-term",
        type: "question-input",
        heading: "When an AI excludes someone from help, that can also be called?",
        acceptableAnswers: ["Bias", "bias"],
        feedback: "Correct! Excluding someone from help is bias.",
        remedialSlideId: "escape-lesson1-complete"
    },
    {
        slideId: "escape-lesson2-complete",
        type: "info-text-media",
        heading: "Lesson 2 Completed!",
        textContent: {
            body: "A section that shows that you completed lesson 2."
        },
        videoUrl: ""
    },
    {
        slideId: "q-ethics-definition",
        type: "question-mcq",
        heading: "True or false: Ethics can be defined as right from wrong",
        options: [
            {
                text: "True",
                isCorrect: true,
                feedback: "Correct! Ethics is indeed defined as the study of right and wrong."
            },
            {
                text: "False",
                isCorrect: false,
                feedback: "Incorrect. Ethics is fundamentally about distinguishing right from wrong."
            }
        ],
        explanation: "Ethics is one of the oldest branches of philosophy, and its core question — what is right and wrong? — applies directly to AI. An AI that gives harmful advice, spreads misinformation, or treats people unfairly is acting unethically, even if it's technically working as programmed."
    },
    {
        slideId: "q-ethics-important",
        type: "question-mcq",
        heading: "Why are ethics important? (select the best answer)",
        options: [
            {
                text: "AI needs to be able to tell right from wrong.",
                isCorrect: true,
                feedback: "Correct! This is a key reason why ethics is important in AI."
            },
            {
                text: "AI can learn on its own",
                isCorrect: false,
                feedback: "Incorrect. While AI can learn, this isn't the primary reason ethics is important."
            },
            {
                text: "It is beneficial for AI to understand what morals are.",
                isCorrect: true,
                feedback: "Correct! Understanding morals is another important aspect of AI ethics."
            }
        ],
        explanation: "Ethics in AI serves two purposes: it tells the system what it should do (be honest, be fair, avoid harm), and what it should never do regardless of instructions. Both listed correct answers point to the same idea — AI needs a moral framework to make safe, trustworthy decisions."
    },
    {
        slideId: "escape-lesson3-complete",
        type: "info-text-media",
        heading: "Lesson 3 Completed!",
        textContent: {
            body: "Create something that says that lesson 3 has been completed."
        },
        videoUrl: ""
    },
    {
        slideId: "q-functional-ai",
        type: "question-input",
        heading: "What is important to make a fully functional AI?",
        acceptableAnswers: ["ethics and bias", "Ethics and bias", "ethics, bias", "Ethics, Bias", "ethics", "bias", "morals", "Ethics", "Bias", "Morals"],
        feedback: "Correct! Ethics and bias (and morals) are all important for creating a fully functional AI.",
        remedialSlideId: "escape-lesson3-complete"
    },
    {
        slideId: "q-fill-ethics-bias",
        type: "question-input",
        heading: "We use ___ to make sure AI knows what ___ are. We need both ___ to ensure the best information. It is a great way to make sure no misinformation is being spread or ___ thinking.",
        acceptableAnswers: [
            "Ethics, morals, ethics and bias, biased",
            "ethics, morals, ethics and bias, biased",
            "Ethics, Morals, Ethics and Bias, Biased"
        ],
        feedback: "Correct! We use Ethics to make sure AI knows what morals are. We need both ethics and bias to ensure the best information. It is a great way to make sure no misinformation is being spread or biased thinking.",
        remedialSlideId: "escape-lesson3-complete"
    },
    {
        slideId: "escape-lesson4-complete",
        type: "info-text-media",
        heading: "Lesson 4 Completed!",
        textContent: {
            body: "Create a section that shows that the last lesson has been passed."
        },
        videoUrl: ""
    },
    {
        slideId: "escape-diploma",
        type: "info-text-media",
        heading: "🎓 Education Diploma",
        textContent: {
            body: "Create an education diploma to show they completed the escape room."
        },
        videoUrl: ""
    },
    {
        slideId: "chat-congrats",
        type: "info-chat",
        heading: "Congratulations!",
        dialogue: [
            "Now you know how to navigate this situation and make the most of the available resources to solve AI related problems.",
            "Hello! I'm Connell, the ethics and bias supervisor.",
            "Hello! I'm Marianne, a happy customer.",
            "Creating a small award showing they completed the ethics and bias module."
        ]
    }
];