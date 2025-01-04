export type InvestmentProfile =
  | "Conservative Investor"
  | "Moderate Investor"
  | "Aggressive Investor";

export const recommendations: Record<
  InvestmentProfile,
  { id: number; title: string }[]
> = {
  "Conservative Investor": [
    { id: 1, title: "Government Bonds" },
    { id: 2, title: "Corporate Bonds" },
    { id: 3, title: "High-Interest Savings" },
    { id: 4, title: "Money Market Funds (MMF)" },
  ],
  "Moderate Investor": [
    { id: 5, title: "Balanced Funds" },
    { id: 6, title: "Dividend Stocks (Coca-Cola, SK Telecom, SCHD)" },
    { id: 7, title: "REITs (Shinhan Alpha REITs)" },
  ],
  "Aggressive Investor": [
    { id: 8, title: "Growth Stocks (Tesla, Apple, Nvidia)" },
    { id: 9, title: "Leveraged ETFs (TQQQ, SOXL, SPXL)" },
    { id: 10, title: "Cryptocurrencies (Bitcoin, Ethereum)" },
  ],
};
