import type { Slide } from "../types/slides.types";

export const module1: Slide[] = [
    {
        slideId: "1",
        type: "info-chat",
        heading: "Welcome to the Pi515 AI Toolkit",
        dialogue: [
            "Hello! I'm Connel, today I am going to walk you through an overview of AI.",
            "Hello! I'm Marianne, I have some questions about AI."
        ]
    },
    {
        slideId: "2",
        type: "info-cards",
        heading: "What are we going to learn?",
        cards: [
            {
                imageUrl: "",
                imageAlt: "Icon representing the definition of AI",
                cardHeading: "The definition of AI",
                bodyText: "Learn what Artificial Intelligence actually means."
            },
            {
                imageUrl: "",
                imageAlt: "Icon representing the history of AI",
                cardHeading: "The history of AI",
                bodyText: "Explore the timeline of AI development from philosophers to ChatGPT."
            },
            {
                imageUrl: "",
                imageAlt: "Icon representing the types of AI",
                cardHeading: "The types of AI",
                bodyText: "Understand the differences between Narrow, General, and Superintelligent AI."
            }
        ]
    },
    {
        slideId: "3",
        type: "info-text-video",
        heading: "What exactly is AI?",
        textContent: {
            body: "There is no one answer to this question so here is an answer that is simple yet comprehensive. Artificial intelligence (AI) is a branch of computer science focused on creating computer programs or machines that can demonstrate intelligence behavior. AI systems are designed to complete tasks that typically require human intelligence, such as analyzing information, translating languages, solving problems, or making decisions."
        },
        videoUrl: "https://www.youtube.com/watch?v=ad79nYk2keg"
    },
    {
        slideId: "4",
        type: "info-chat",
        heading: "",
        dialogue: [
            "I keep hearing about this AI thing but I don't understand!",
            "Understanding AI can be difficult because there are so many definitions out there, however, here is a simplified definition: AI, or Artificial Intelligence, is a computer science field that is based on creating machines and programs that can complete tasks that would normally only be done by humans. AI programs can analyze, translate, solve problems, and make decisions.",
            "I guess that makes a little more sense, but I want to learn about the history of AI.",
            "Great, I'll show you a timeline but first let's see if you can answer this question correctly."
        ]
    },
    {
        slideId: "5",
        type: "question-mcq",
        heading: "What is the best response?",
        options: [
            {
                text: "AI, or Artificial Intelligence, is when computers develop their own intelligence and will take over the world.",
                isCorrect: false,
                feedback: "Try Again Seems like you need to take a step back go back and try again"
            },
            {
                text: "AI, or Artificial Intelligence, is a computer science field that is based on creating machines and programs that can complete tasks that would normally only be done by humans. AI programs can analyze, translate, solve problems, and make decisions.",
                isCorrect: true,
                feedback: "Great response! You know your stuff continue and learn more!"
            }
        ]
    },
    {
        slideId: "6",
        type: "info-timeline",
        heading: "Timeline of AI (Aristotle till the 70s)",
        events: [
            {
                name: "Philosophers such as Aristotle and Descartes wondered if human thinking could be modeled logically.",
                date: "Not provided",
                imageUrl: "",
                imageAlt: "A photo of a Greek philosopher's statue",
                description: "Early philosophical foundations of logical thinking."
            },
            {
                name: "It wasn't until the 19th century that digital computing was started when mathematician George Boole developed Boolean algebra.",
                date: "Not provided",
                imageUrl: "",
                imageAlt: "A diagram showing boolean algebra operations",
                description: "Boolean algebra laid the groundwork for digital computing."
            },
            {
                name: "In 1936 Alan Turing, coined the idea of a 'universal machine' that could perform any computation. This was a founding concept of computer.",
                date: "1936",
                imageUrl: "",
                imageAlt: "A photo of an old and large computer",
                description: "Turing's universal machine concept became foundational to computing."
            },
            {
                name: "In 1956, the term AI or Artificial Intelligence, was coined by John McCarthy during the Dartmouth Conference. This is considered the birthplace of AI as a field.",
                date: "1956",
                imageUrl: "",
                imageAlt: "A photo taken at the Dartmouth Conference",
                description: "The Dartmouth Conference is considered the birthplace of AI."
            },
            {
                name: "During the 1950-70s, three early types of AI were formed. Eliza was considered the first chatbot, SHRDLU, a program for understanding natural language Dendral used for chemical analysis.",
                date: "1950s-70s",
                imageUrl: "",
                imageAlt: "A generic picture of programming",
                description: "Early AI programs included chatbots, natural language processing, and chemical analysis tools."
            }
        ]
    },
    {
        slideId: "7",
        type: "info-timeline",
        heading: "Timeline of AI (70s to Present)",
        events: [
            {
                name: "The 70s and 80s had limited advances because AI couldn't scale to real-life problems. During the 90s, AI shifted to statistical and data driven methods that led to machine learning where systems are trained with data rather than hard-coded rules.",
                date: "1970s - 80s",
                imageUrl: "",
                imageAlt: "A generic photo of circuits shaped to make a human face",
                description: "AI faced limitations but later shifted to machine learning approaches."
            },
            {
                name: "AI began advancing and in 1997, IBM's deep blue won against chess champion Garry Kasparov.",
                date: "1997",
                imageUrl: "",
                imageAlt: "An image of the match between Garry Kasparov and Deep Blue",
                description: "Deep Blue defeated chess champion Garry Kasparov in 1997."
            },
            {
                name: "In the 2010s, Geoffrey Hinton, Yann LeCun, and Yoshua Bengio pioneered deep learning, which is a type of machine learning.",
                date: "Not provided",
                imageUrl: "",
                imageAlt: "An image of the three men side by side",
                description: "Deep learning pioneers advanced the field significantly."
            },
            {
                name: "In 2012, because of deep learning ImageNet was able to go to great lengths in image recognition. In 2016, AlphaGo defeated world champion Lee Sedol in the board game Go.",
                date: "2012 & 2016",
                imageUrl: "",
                imageAlt: "Lee Sedol making a defeated face after losing to AlphaGo",
                description: "AI achieved major milestones in image recognition and board games."
            },
            {
                name: "In November of 2022, ChatGPT was released for public use. Today, we have generative AI such as GPT, BERT, and DALL E, which we can use to generate ideas and images, translate languages, and much more.",
                date: "2022",
                imageUrl: "",
                imageAlt: "ChatGPT's Logo",
                description: "ChatGPT and other generative AI tools became widely available."
            }
        ]
    },
    {
        slideId: "8",
        type: "question-mcq",
        heading: "True or False",
        options: [
            {
                text: "True",
                isCorrect: false,
                feedback: "Incorrect. Alan Turing came up with the idea of the universal machine, not Aristotle."
            },
            {
                text: "False",
                isCorrect: true,
                feedback: "Correct! Alan Turing developed the concept of the universal machine."
            }
        ]
    },
    {
        slideId: "9",
        type: "question-mcq",
        heading: "True or False",
        options: [
            {
                text: "True",
                isCorrect: true,
                feedback: "Correct! John McCarthy coined the term AI at the Dartmouth Conference in 1956."
            },
            {
                text: "False",
                isCorrect: false,
                feedback: "Incorrect. John McCarthy did coin the term AI at the Dartmouth Conference."
            }
        ]
    },
    {
        slideId: "10",
        type: "info-chat",
        heading: "",
        dialogue: [
            "Alright! I now understand the timeline of AI development. But what types of AI are there?",
            "Great question! Let's talk about it. Click the button to continue."
        ]
    },
    {
        slideId: "11",
        type: "info-cards",
        heading: "Three Primary Types of AI",
        cards: [
            {
                imageUrl: "",
                imageAlt: "A minimal and general drawing of a computer",
                cardHeading: "Narrow AI",
                bodyText: "Narrow AI, also called weak AI, is the simplest form of AI and the form that AI is currently in. Narrow AI is for one specific task or purpose, and an example would be the Netflix algorithm or even self-driving cars."
            },
            {
                imageUrl: "",
                imageAlt: "A minimal drawing of a cloud with computer wires coming from the bottom",
                cardHeading: "General AI",
                bodyText: "General AI (or Strong AI) is a theoretical type of intelligence that could match human capabilities. It would not only learn and adapt but also perform a wide range of tasks across different fields. Example: Robots performing intellectual and physical tasks."
            },
            {
                imageUrl: "",
                imageAlt: "A generic drawing of a simple computer robot",
                cardHeading: "Superintelligent AI",
                bodyText: "Superintelligent AI is a hypothetical intelligence that would surpass humans in almost every task. Thankfully, this concept exists only in science-fiction, through the likes of Ultron in Avengers or The Entity in Mission: Impossible."
            }
        ]
    },
    {
        slideId: "12",
        type: "question-mcq",
        heading: "Self-Assessment",
        options: [
            {
                text: "A form of AI where it can do multiple types of things.",
                isCorrect: false,
                feedback: "Read that again"
            },
            {
                text: "A form of AI where it is really good at one specific thing.",
                isCorrect: true,
                feedback: "Correct"
            },
            {
                text: "A form of AI that is better than humans in any task",
                isCorrect: false,
                feedback: "Read that again"
            }
        ]
    },
    {
        slideId: "13",
        type: "question-input",
        heading: "What is another name for Narrow AI?",
        acceptableAnswers: ["Weak AI", "Weak"],
        feedback: "Correct",
        remedialSlideId: ""
    },
    {
        slideId: "14",
        type: "question-input",
        heading: "What is another name for General AI?",
        acceptableAnswers: ["Strong AI", "Strong"],
        feedback: "Correct",
        remedialSlideId: ""
    },
    {
        slideId: "15",
        type: "question-mcq",
        heading: "Choose the correct statement",
        options: [
            {
                text: "Narrow AI is the only form of AI that AI is currently in, however, general AI is a hypothetical form that can one day become something, but Superintelligent AI is only a theory found in sci-fi and pop culture examples.",
                isCorrect: true,
                feedback: "Good job! You know your stuff, great job at being able to tell the difference between AI."
            },
            {
                text: "Narrow AI and general AI are both forms of AI that AI is currently in. However, superintelligent AI is theoretical and fictional.",
                isCorrect: false,
                feedback: "This doesn't seem like the best response..."
            },
            {
                text: "Narrow AI, general AI, and superintelligent AI are all very real forms of AI.",
                isCorrect: false,
                feedback: "This doesn't seem like the best response..."
            }
        ]
    },
    {
        slideId: "16",
        type: "info-chat",
        heading: "",
        dialogue: [
            "AI is slowly making more sense to me. However, I still have questions left about the ethics and bias of AI, how AI actually works, AI Safety, and the careers and future of AI.",
            "Well, I'm glad you've at least begun to understand what AI is. Thankfully, in these next modules, we will be talking about those."
        ]
    }
];