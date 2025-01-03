export type InvestmentProfile =
  | "안전형 투자자"
  | "균형형 투자자"
  | "공격형 투자자";

export const recommendations: Record<InvestmentProfile, string[]> = {
  "안전형 투자자": ["국채", "지방채", "고금리 예금", "MMF"],
  "균형형 투자자": [
    "혼합형 펀드",
    "배당주 (코카콜라, SK텔레콤, SCHD)",
    "REITs (신한 알파리츠)",
  ],
  "공격형 투자자": [
    "성장주 (테슬라, 애플, 엔비디아)",
    "레버리지 ETF(TQQQ, SOXL, SPXL)",
    "암호화폐 (비트코인, 이더리움)",
  ],
};
