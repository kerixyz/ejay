// ─── Award / Quiz configuration ───────────────────────────────────────────────
// Edit this file to update all quiz questions, options and award copy.
// correctIndex is zero-based (0 = first option).

export interface AwardConfig {
  id: string;
  emoji: string;
  award: string;
  question: string;      // TODO: swap placeholders below for real inside-joke questions
  options: string[];     // always 4 items; one must be "Ejay"
  correctIndex: number;
  wrongMessage: string;
}

export const QUIZ_CONFIG: AwardConfig[] = [
  {
    id: "smile",
    emoji: "🏆",
    award: "Most Beautiful Smile",
    // TODO: replace with a real question
    question: "Who has the most beautiful smile in the world?",
    options: [
      "Not Ejay",
      "Definitely not Ejay",
      "Ejay",
      "Still not Ejay",
    ],
    correctIndex: 2,
    wrongMessage: "Incorrect. Embarrassing, really.",
  },
  {
    id: "beautiful",
    emoji: "👑",
    award: "Most Beautiful Girl",
    // TODO: replace with a real question
    question: "Who is the most beautiful girl in any room she walks into?",
    options: [
      "Not Ejay",
      "Ejay",
      "Also not Ejay",
      "Nope, not Ejay either",
    ],
    correctIndex: 1,
    wrongMessage: "Wrong. Please reconsider your life choices.",
  },
  {
    id: "hardworking",
    emoji: "💪",
    award: "Hardest Working",
    // TODO: replace with a real question
    question:
      "Who works the night shift, shows up the next day with a full face of energy, and somehow still has plans?",
    options: [
      "Someone else",
      "Not Ejay",
      "Certainly not Ejay",
      "Ejay",
    ],
    correctIndex: 3,
    wrongMessage: "Sadly no. Try again.",
  },
  {
    id: "kendo",
    emoji: "⚔️",
    award: "Craziest Kendoka",
    // TODO: replace with a real question
    question:
      "Who practices kendo with a level of dedication that is frankly a little alarming?",
    options: [
      "Ejay",
      "Not Ejay",
      "Not Ejay at all",
      "Certainly not Ejay",
    ],
    correctIndex: 0,
    wrongMessage: "Incorrect. Borderline offensive.",
  },
  {
    id: "suburi",
    emoji: "🌅",
    award: "Best Daily Suburi Person",
    // TODO: replace with a real question
    question: "Who is out there doing suburi before the sun has fully committed to rising?",
    options: [
      "Not Ejay",
      "Still not Ejay",
      "Ejay",
      "Definitely not Ejay",
    ],
    correctIndex: 2,
    wrongMessage: "No. Just… no.",
  },
];

// ─── Hidden object game ────────────────────────────────────────────────────────
// 10 emoji stamps scattered across the page.
// Positions are set in app/bday/page.tsx.

export interface HiddenItemConfig {
  id: number;
  emoji: string;
}

export const HIDDEN_ITEMS: HiddenItemConfig[] = [
  { id: 0, emoji: "🐱" },
  { id: 1, emoji: "🍋" },
  { id: 2, emoji: "🐶" },
  { id: 3, emoji: "🍫" },
  { id: 4, emoji: "✈️" },
  { id: 5, emoji: "🍕" },
  { id: 6, emoji: "🥋" },
  { id: 7, emoji: "💉" },
  { id: 8, emoji: "🍰" },
  { id: 9, emoji: "☀️" },
];
