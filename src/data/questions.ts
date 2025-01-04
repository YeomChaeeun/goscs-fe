export type InvestmentProfile =
  | "Conservative Investor"
  | "Moderate Investor"
  | "Aggressive Investor";

export type Question = {
  id: number;
  question: string;
  options: { label: string; value: number }[];
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Attitude towards market volatility",
    options: [
      { label: "Withdraw investment when the market is volatile.", value: 1 },
      { label: "Do not care about market volatility.", value: 3 },
      {
        label: "Seek additional investment opportunities during volatility.",
        value: 5,
      },
    ],
  },
  {
    id: 2,
    question: "Risk tolerance",
    options: [
      { label: "Cannot tolerate potential losses.", value: 1 },
      { label: "Can tolerate minor losses.", value: 3 },
      { label: "Can tolerate significant losses.", value: 5 },
    ],
  },
  {
    id: 3,
    question: "Investment time horizon",
    options: [
      { label: "1-3 years", value: 1 },
      { label: "4-10 years", value: 3 },
      { label: "More than 10 years", value: 5 },
    ],
  },
  {
    id: 4,
    question: "Financial stability",
    options: [
      {
        label:
          "May need the investment funds due to lack of emergency savings.",
        value: 1,
      },
      { label: "Have emergency savings but not much extra.", value: 3 },
      {
        label: "Have ample emergency savings and are financially stable.",
        value: 5,
      },
    ],
  },
  {
    id: 5,
    question: "Investment experience",
    options: [
      { label: "No investment experience.", value: 1 },
      { label: "Basic investment experience.", value: 3 },
      {
        label: "Experience with various investments like stocks and bonds.",
        value: 5,
      },
    ],
  },
  {
    id: 6,
    question: "Return expectations",
    options: [
      { label: "Prefer stable returns.", value: 1 },
      { label: "Prefer moderate risk and returns.", value: 3 },
      { label: "Willing to take high risks for high returns.", value: 5 },
    ],
  },
  {
    id: 7,
    question: "Attitude towards portfolio diversity",
    options: [
      { label: "Prefer to focus on a single asset.", value: 1 },
      { label: "Prefer some level of diversification.", value: 3 },
      { label: "Believe in diversifying across multiple assets.", value: 5 },
    ],
  },
  {
    id: 8,
    question: "Emergency liquidity needs",
    options: [
      { label: "Must be able to withdraw funds at any time.", value: 1 },
      {
        label: "Some funds can be withdrawn, some can be held long-term.",
        value: 3,
      },
      { label: "Can keep funds invested long-term.", value: 5 },
    ],
  },
  {
    id: 9,
    question: "Age",
    options: [
      { label: "20-35 years old", value: 5 },
      { label: "36-50 years old", value: 3 },
      { label: "51 years old and above", value: 1 },
    ],
  },
  {
    id: 10,
    question: "Job stability",
    options: [
      { label: "Employed full-time.", value: 5 },
      { label: "Self-employed/Freelancer.", value: 3 },
      { label: "Unstable employment or unemployed.", value: 1 },
    ],
  },
  {
    id: 11,
    question: "Monthly income level (after tax)",
    options: [
      { label: "Above 5 million KRW", value: 5 },
      { label: "2-5 million KRW", value: 3 },
      { label: "Below 2 million KRW", value: 1 },
    ],
  },
  {
    id: 12,
    question: "Net asset range (including emergency savings)",
    options: [
      { label: "Above 100 million KRW", value: 5 },
      { label: "50-100 million KRW", value: 3 },
      { label: "Below 50 million KRW", value: 1 },
    ],
  },
  {
    id: 13,
    question: "Do you have any large expenses planned within a year?",
    options: [
      { label: "Yes, a significant amount is needed.", value: 1 },
      { label: "No, most funds can be used long-term.", value: 3 },
      {
        label: "No, none of the funds will be needed for a long time.",
        value: 5,
      },
    ],
  },
  {
    id: 14,
    question: "Current debt status",
    options: [
      { label: "Have significant debt.", value: 1 },
      { label: "Have moderate debt.", value: 3 },
      { label: "Have no debt.", value: 5 },
    ],
  },
  {
    id: 15,
    question: "Savings rate relative to income",
    options: [
      { label: "Below 10%", value: 1 },
      { label: "10-20%", value: 3 },
      { label: "Above 20%", value: 5 },
    ],
  },
  {
    id: 16,
    question: "Level of investment knowledge",
    options: [
      { label: "Know nothing about investments.", value: 1 },
      { label: "Have basic knowledge.", value: 3 },
      { label: "Have professional knowledge.", value: 5 },
    ],
  },
  {
    id: 17,
    question: "Spare funds after living expenses",
    options: [
      { label: "Almost none.", value: 1 },
      { label: "Have some spare funds.", value: 3 },
      { label: "Have sufficient spare funds.", value: 5 },
    ],
  },
  {
    id: 18,
    question: "Risk aversion preference",
    options: [
      { label: "Invest only in safe options.", value: 1 },
      { label: "Can take some risks.", value: 3 },
      { label: "Can take high risks.", value: 5 },
    ],
  },
  {
    id: 19,
    question: "Expected future return goal",
    options: [
      { label: "Satisfied with low returns.", value: 1 },
      { label: "Aim for moderate returns.", value: 3 },
      { label: "Seek the highest possible returns.", value: 5 },
    ],
  },
  {
    id: 20,
    question: "Obligations to financially support family",
    options: [
      { label: "Need to support the family.", value: 1 },
      { label: "Provide partial support.", value: 3 },
      { label: "Have no financial obligations to support family.", value: 5 },
    ],
  },
];
