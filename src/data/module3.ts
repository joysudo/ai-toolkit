import type { Slide } from "../types/slides.types";

export const module3: Slide[] = [
    {
        slideId: "chat-intro",
        type: "info-chat",
        heading: "How Does AI Work?",
        dialogue: [
            "Hello! I'm Connell, today I am going to walk you through how AI works.",
            "Hello! I'm Marianne, I have some questions about how AI works."
        ]
    },
    {
        slideId: "info-what-learn",
        type: "info-text-media",
        heading: "What Are We Going to Learn?",
        textContent: {
            body: "This module allows you to understand the systems which operate the functioning of Artificial Intelligence, while learning the different types of AI processes.\n\n- What is Machine Learning\n- Types of Machine Learning\n- What are Algorithms\n- Types of Algorithms"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "info-ml-history",
        type: "info-text-media",
        heading: "Machine Learning",
        textContent: {
            subheading: "History of AI",
            body: "IBM describes Machine Learning as 'a branch of AI focused on enabling computers and machines to imitate the way that humans learn, to perform tasks autonomously, and to improve their performance and accuracy through experience and exposure to more data.' Machine Learning works by AI being fed data through a series of events in order to train itself slowly on how to respond to situations. When this process is repeated enough times and it is fed correct data, AI will better provide insights to questions."
        },
        videoUrl: "https://www.youtube.com/embed/eSj80Zr6TEE"
    },
    {
        slideId: "q-ml-train",
        type: "question-mcq",
        heading: "How does Machine Learning train an AI?",
        options: [
            {
                text: "Teaching computers by writing every possible rule they should follow",
                isCorrect: false,
                feedback: ""
            },
            {
                text: "Feeding computers data so they can learn patterns and improve performance over time.",
                isCorrect: true,
                feedback: ""
            },
            {
                text: "Giving computers unlimited internet access so they can find answers themselves.",
                isCorrect: false,
                feedback: ""
            }
        ]
    },
    {
        slideId: "info-supervised",
        type: "info-text-media",
        heading: "Types of Machine Learning: Supervised AI",
        textContent: {
            subheading: "Supervised AI",
            body: "Supervised Machine Learning is training a model with known inputs and outputs. It is like teaching a student, where you provide examples and situations where the outcome is already defined and labeled, which the AI then internalizes to recognize those outcomes when facing similar situations in the future."
        },
        videoUrl: "https://www.youtube.com/embed/4qVRBYAdLAo"
    },
    {
        slideId: "info-reinforcement",
        type: "info-text-media",
        heading: "Types of Machine Learning: Reinforcement AI",
        textContent: {
            subheading: "Reinforcement AI",
            body: "Reinforcement Machine Learning is a form of training that uses a reward system. An agent interacts with the training of the machine by providing data and if the model predicts the accurate solution, it is rewarded. If it doesn't, it is punished and told not to engage in that behavior again. This leads to long-term success in the model and reduces its inaccuracies as the model knows, based on previous interactions with the agent, what responses are the right ones in certain situations and data."
        },
        videoUrl: "https://www.youtube.com/embed/nIgIv4IfJ6s"
    },
    {
        slideId: "info-unsupervised",
        type: "info-text-media",
        heading: "Types of Machine Learning: Unsupervised AI",
        textContent: {
            subheading: "Unsupervised AI",
            body: "Unsupervised Machine Learning is utilizing the AI to engage in tasks humans can't process. It is essentially allowing the model to train itself. By providing datasets that don't have known inputs and outputs, the machine learns how to recognize patterns and trends in vast amounts of data that humans can't. Every time the model does this, it learns more about how to categorize and identify these patterns in the future, training the model to be more efficient and organized over time."
        },
        videoUrl: "https://www.youtube.com/embed/JnnaDNNb380"
    },
    {
        slideId: "q-ml-type",
        type: "question-mcq",
        heading: "What kind of Machine Learning relies on providing data to an AI without known inputs or outputs?",
        options: [
            {
                text: "Unsupervised AI",
                isCorrect: true,
                feedback: ""
            },
            {
                text: "Supervised AI",
                isCorrect: false,
                feedback: ""
            },
            {
                text: "Reinforcement AI",
                isCorrect: false,
                feedback: ""
            }
        ]
    },
    {
        slideId: "info-algorithms",
        type: "info-text-media",
        heading: "Algorithms",
        textContent: {
            subheading: "AI",
            body: 'IBM defines algorithms as: "A machine learning algorithm is a set of rules or processes used by an AI system to conduct tasks—most often to discover new data insights and patterns, or to predict output values from a given set of input variables. Algorithms enable machine learning (ML) to learn."'
        },
        videoUrl: ""
    },
    {
        slideId: "info-algorithm-types",
        type: "info-cards",
        heading: "Types of Algorithms",
        cards: [
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Data_classification_example.svg",
                imageAlt: "data classification diagram",
                cardHeading: "Classification",
                bodyText: "Classification is when an algorithm assigns data and inputs into specific categories, and classifies them."
            },
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Normdist_regression.png",
                imageAlt: "regression line on data points",
                cardHeading: "Regression",
                bodyText: "Regression is an algorithm which focuses on predictions, where it forecasts trends or results that a set of data could turn into in the future."
            },
            {
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cluster-2.svg",
                imageAlt: "data clustering diagram",
                cardHeading: "Clustering",
                bodyText: "Clustering is a technique used to group similar data points together that were previously unlabeled from a random dataset."
            }
        ]
    },
    {
        slideId: "q-regression",
        type: "question-mcq",
        heading: "Which algorithm predicts or forecasts trends and results?",
        options: [
            {
                text: "Regression",
                isCorrect: true,
                feedback: ""
            },
            {
                text: "Clustering",
                isCorrect: false,
                feedback: ""
            },
            {
                text: "Classification",
                isCorrect: false,
                feedback: ""
            }
        ]
    },
    {
        slideId: "q-classification",
        type: "question-mcq",
        heading: "What type of algorithm uses data as a tool or function? (Self-Assessment — timed 30 seconds)",
        options: [
            {
                text: "Regression",
                isCorrect: false,
                feedback: ""
            },
            {
                text: "Classification",
                isCorrect: true,
                feedback: ""
            },
            {
                text: "Clustering",
                isCorrect: false,
                feedback: ""
            }
        ]
    },
    {
        slideId: "q-clustering-input",
        type: "question-input",
        heading: "What type of algorithm uses data to create groups?",
        acceptableAnswers: ["Clustering"],
        feedback: "(sound effect plays)",
        remedialSlideId: "info-algorithm-types"
    },
    {
        slideId: "q-classification-input",
        type: "question-input",
        heading: "What type of algorithm uses data to give an answer or advertisement?",
        acceptableAnswers: ["Classification"],
        feedback: "(sound effect plays)",
        remedialSlideId: "info-algorithm-types"
    },
    {
        slideId: "q-regression-input",
        type: "question-input",
        heading: "What type of algorithm can predict the future, such as weather, popular clothes, etc.?",
        acceptableAnswers: ["Regression"],
        feedback: "(sound effect plays)",
        remedialSlideId: "info-algorithm-types"
    },
    // Escape Room Slides
    {
        slideId: "escape-title",
        type: "info-text-media",
        heading: "AI Mystery Breakout",
        textContent: {
            subheading: "Do you have what it takes?",
            body: "(Title slide with Start button)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "escape-intro",
        type: "info-text-media",
        heading: "Intro",
        textContent: {
            body: "You have entered a dark and unknown world from which you have to get out before it's too late and you will be locked in forever. The only way to leave is through demonstrating your knowledge on how AI works to the rulers of this world, and they will let you leave."
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "escape-mission1-hub",
        type: "info-text-media",
        heading: "Mission 1",
        textContent: {
            body: "(Mission hub slide showing locked missions)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "q-ai-ml-relationship",
        type: "question-mcq",
        heading: "Which of the following best describes the relationship between AI and Machine Learning?",
        options: [
            {
                text: "AI is a broader concept, ML is a subset, and deep learning is a further subset of ML",
                isCorrect: true,
                feedback: ""
            },
            {
                text: "ML is broader than AI, and deep learning is broader than both",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: "Al and ML are the same; deep learning is unrelated",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "escape-mission2-hub",
        type: "info-text-media",
        heading: "Mission 2",
        textContent: {
            body: "(Drag and discover interaction — mission hub slide)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "q-supervised-ai",
        type: "question-mcq",
        heading: "Which type of Machine Learning trains an AI with known inputs and outputs, like a teacher instructing a student?",
        options: [
            {
                text: "Supervised AI",
                isCorrect: true,
                feedback: "(advances to next stage)"
            },
            {
                text: "Unsupervised AI",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: "Reinforcement AI",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "escape-mission3-hub",
        type: "info-text-media",
        heading: "Mission 3",
        textContent: {
            body: "(Mission hub slide)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "q-classification-example",
        type: "question-mcq",
        heading: 'Which one of these algorithms is "Classification"?',
        options: [
            {
                text: 'A model that sorts emails into "spam" and "not spam" categories',
                isCorrect: true,
                feedback: "(advances to next question)"
            },
            {
                text: "A model that calculates the total rainfall expected next week based on weather patterns",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: "A model that predicts the exact dollar value a house will sell for based on location and size",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "q-regression-example",
        type: "question-mcq",
        heading: 'Which of these algorithms is "Regression"?',
        options: [
            {
                text: "A model that estimates the expected price of Bitcoin next month based on historical data",
                isCorrect: true,
                feedback: "Correct!"
            },
            {
                text: "A model that groups customers into similar purchasing behavior clusters",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: "A model that predicts whether a patient does or does not have diabetes",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "q-clustering-example",
        type: "question-mcq",
        heading: 'Which one of these algorithms is "Clustering"?',
        options: [
            {
                text: "A model that groups Netflix users based on similar watching habits to create recommendation categories",
                isCorrect: true,
                feedback: "Correct!"
            },
            {
                text: "A model that predicts whether a Spotify user will cancel their subscription next month",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: "A model that forecasts the number of iPhones Apple will sell next quarter",
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "escape-code",
        type: "info-text-media",
        heading: "Remember the code",
        textContent: {
            body: "The code is: 216"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "escape-mission4-hub",
        type: "info-text-media",
        heading: "Mission 4",
        textContent: {
            body: "(Mission hub slide)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "q-timeline",
        type: "question-mcq",
        heading: "Which of these is the correct timeline for AI?",
        options: [
            {
                text: 'Birth of Al by Alan Turing → Dartmouth Conference establishes the term "Artificial Intelligence" → Rise of Deep Learning & Neural Networks → NLP and Generative AI',
                isCorrect: true,
                feedback: "(advances to next stage)"
            },
            {
                text: 'Birth of Al by Alan Turing → Dartmouth Conference establishes the term "Artificial Intelligence" → NLP and Generative AI → Rise of Deep Learning & Neural Networks',
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            },
            {
                text: 'Birth of Al by Alan Turing → Rise of Deep Learning & Neural Networks → NLP and Generative AI → Dartmouth Conference establishes the term "Artificial Intelligence"',
                isCorrect: false,
                feedback: "Wrong answer! Try again"
            }
        ]
    },
    {
        slideId: "q-math-puzzle",
        type: "question-input",
        heading: "14 + 3",
        acceptableAnswers: ["17"],
        feedback: "(advances to Mission 5)",
        remedialSlideId: "escape-mission4-hub"
    },
    {
        slideId: "escape-mission5-hub",
        type: "info-text-media",
        heading: "Mission 5",
        textContent: {
            body: "(Final mission hub — all missions completed)"
        },
        videoUrl: "https://www.youtube.com/embed/QHjRQwEQjJI?si=qY1VJeSEGsoWVPYp"
    },
    {
        slideId: "chat-congrats",
        type: "info-chat",
        heading: "Congratulations!",
        dialogue: [
            "You now know the workings and technology behind how AI works!",
            "Great job! I guess we can call you an 'AI Expert'!",
            "Keep it up! You're almost done with the toolkit!"
        ]
    }
];