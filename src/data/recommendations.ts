export type InvestmentProfile =
  | "안전형 투자자"
  | "위험중립형 투자자"
  | "공격형 투자자";

export const recommendations: Record<
  InvestmentProfile,
  { id: number; title: string }[]
> = {
  "안전형 투자자": [
    { id: 1, title: "국채" },
    { id: 2, title: "지방채" },
    { id: 3, title: "고금리 예금" },
    { id: 4, title: "MMF" },
  ],
  "위험중립형 투자자": [
    { id: 5, title: "혼합형 펀드" },
    { id: 6, title: "배당주 (코카콜라, SK텔레콤, SCHD)" },
    { id: 7, title: "REITs (신한 알파리츠)" },
  ],
  "공격형 투자자": [
    { id: 8, title: "성장주 (테슬라, 애플, 엔비디아)" },
    { id: 9, title: "레버리지 ETF(TQQQ, SOXL, SPXL)" },
    { id: 10, title: "암호화폐 (비트코인, 이더리움)" },
  ],
};
