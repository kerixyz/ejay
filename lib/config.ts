// ─── Award / Quiz configuration ───────────────────────────────────────────────

export interface PhotoSlot {
  src: string;   // e.g. "/bday/ejay-smile-1.jpg"
  alt: string;
  caption?: string;
}

export interface AwardConfig {
  id: string;
  emoji: string;
  award: string;
  type: "quiz" | "checklist";
  // up to 6 photos shown in the polaroid grid after unlocking
  photos?: PhotoSlot[];
  // quiz fields
  question?: string;
  options?: string[];
  correctIndex?: number;
  wrongMessage?: string;
  // checklist fields
  checklistPrompt?: string;
  checklistItems?: string[];
}

export const QUIZ_CONFIG: AwardConfig[] = [
  {
    id: "beautiful",
    emoji: "🌸",
    award: "Most Beautiful Girl",
    type: "quiz",
    question: "Who is the most beautiful girl in the world?",
    options: [
      "Not Ejay",
      "Definitely not Ejay",
      "Still not Ejay",
      "Ejay",
    ],
    correctIndex: 3,
    wrongMessage: "Incorrect. Embarrassing, really.",
    photos: [
      { src: "/bday/beautiful-1.jpg", alt: "Ejay", caption: "always" },
      { src: "/bday/beautiful-2.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/beautiful-3.jpg", alt: "Ejay", caption: "" },
      // { src: "/bday/beautiful-4.jpg", alt: "Ejay", caption: "" },
      // { src: "/bday/beautiful-5.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/beautiful-6.jpg", alt: "Ejay", caption: "" },
    ],
  },
  {
    id: "nurse",
    emoji: "🐾",
    award: "Best Nurse & Pet Taker",
    type: "quiz",
    question: "Who would drop everything to nurse a sick pet back to health at 3am?",
    options: [
      "A stranger",
      "No one, she'd be asleep",
      "Ejay",
      "Her pets",
    ],
    correctIndex: 2,
    wrongMessage: "Wrong. She would absolutely be up at 3am for them.",
    photos: [
      // Drop pet photos here — up to 6
      { src: "/bday/nurse-1.jpg", alt: "Ejay's pet", caption: "" },
      { src: "/bday/nurse-2.jpg", alt: "Ejay's pet", caption: "" },
      { src: "/bday/nurse-3.jpg", alt: "Ejay's pet", caption: "" },
      { src: "/bday/nurse-4.jpg", alt: "Ejay's pet", caption: "" },
      // { src: "/bday/pets-5.jpg", alt: "Ejay's pet", caption: "" },
      // { src: "/bday/pets-6.jpg", alt: "Ejay's pet", caption: "" },
    ],
  },
  {
    id: "model",
    emoji: "✨",
    award: "Best Model",
    type: "quiz",
    question: "Who could walk into a photoshoot having just woken up and still outshine everyone?",
    options: [
      "Someone who prepared",
      "Ejay",
      "A professional",
      "Not Ejay",
    ],
    correctIndex: 1,
    wrongMessage: "No. Please reconsider.",
    photos: [
      { src: "/bday/model-1.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/model-2.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/model-3.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/model-4.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/model-5.jpg", alt: "Ejay", caption: "" },
      { src: "/bday/model-6.jpg", alt: "Ejay", caption: "" },
    ],
  },
  {
    id: "snacker",
    emoji: "🍫",
    award: "Best Snacker",
    type: "checklist",
    checklistPrompt: "What is ejay's favorite drink",
    checklistItems: [
      "Coca-cola",
      "Coca-cola",
      "Coca-Cola",
      "Coca-cola",
    ],
    photos: [
      // Snack / game themed photos
      { src: "/bday/snacker-1.jpg", alt: "snacks", caption: "" },
      { src: "/bday/snacker-2.jpg", alt: "snacks", caption: "" },
      { src: "/bday/snacker-3.jpg", alt: "snacks", caption: "" },
      { src: "/bday/snacker-4.jpg", alt: "snacks", caption: "" },
      { src: "/bday/snacker-5.jpg", alt: "snacks", caption: "" },
      { src: "/bday/snacker-6.jpg", alt: "snacks", caption: "" },
    ],
  },
  {
    id: "smile",
    emoji: "🌿",
    award: "Best Smile Ever",
    type: "quiz",
    question: "Whose smile is responsible for improving the mood of everyone in a 10-metre radius?",
    options: [
      "Nobody's",
      "Ejay's",
      "The sun's",
    ],
    correctIndex: 1,
    wrongMessage: "Incorrect. Science agrees it's Ejay.",
    photos: [
      { src: "/bday/smile-1.jpg", alt: "Ejay smiling", caption: "" },
      { src: "/bday/smile-2.jpg", alt: "Ejay smiling", caption: "" },
      { src: "/bday/smile-3.jpg", alt: "Ejay smiling", caption: "" },
      { src: "/bday/smile-4.jpg", alt: "Ejay smiling", caption: "" },
      { src: "/bday/smile-5.jpg", alt: "Ejay smiling", caption: "" },
      { src: "/bday/smile-6.jpg", alt: "Ejay smiling", caption: "" },
    ],
  },
];
