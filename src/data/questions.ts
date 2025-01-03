export type InvestmentProfile =
  | "안전형 투자자"
  | "균형형 투자자"
  | "공격형 투자자";

export type Question = {
  id: number;
  question: string;
  options: { label: string; value: number }[];
};

export const questions: Question[] = [
  {
    id: 1,
    question: "시장 변동성에 대한 태도",
    options: [
      { label: "시장 변동이 크면 투자를 철회한다.", value: 1 },
      { label: "시장 변동을 신경 쓰지 않는다.", value: 3 },
      { label: "시장 변동이 클수록 추가 투자 기회를 찾는다.", value: 5 },
    ],
  },
  {
    id: 2,
    question: "리스크 수용 능력",
    options: [
      { label: "손실 가능성을 감수할 수 없다.", value: 1 },
      { label: "약간의 손실은 감수할 수 있다.", value: 3 },
      { label: "큰 손실도 감수할 수 있다.", value: 5 },
    ],
  },
  {
    id: 3,
    question: "투자 목표 기간",
    options: [
      { label: "1-3년", value: 1 },
      { label: "4-10년", value: 3 },
      { label: "10년 이상", value: 5 },
    ],
  },
  // {
  //   id: 4,
  //   question: "재정적 안정성",
  //   options: [
  //     { label: "비상금이 부족하여 투자 자금이 당장 필요할 수 있다.", value: 1 },
  //     { label: "비상금이 있지만 여유롭지는 않다.", value: 3 },
  //     { label: "비상금이 충분하여 재정적으로 안정적이다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 5,
  //   question: "투자 경험",
  //   options: [
  //     { label: "투자 경험이 없다.", value: 1 },
  //     { label: "기초적인 투자 경험이 있다.", value: 3 },
  //     { label: "주식, 채권 등 다양한 투자 경험이 있다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 6,
  //   question: "수익 기대치",
  //   options: [
  //     { label: "안정적인 수익을 원한다.", value: 1 },
  //     { label: "중간 수준의 위험과 수익을 원한다.", value: 3 },
  //     { label: "높은 수익을 위해 높은 위험도 감수할 수 있다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 7,
  //   question: "포트폴리오 다양성에 대한 태도",
  //   options: [
  //     { label: "단일 자산에 집중하는 것이 더 낫다.", value: 1 },
  //     { label: "일부 분산 투자를 선호한다.", value: 3 },
  //     { label: "다양한 자산에 분산 투자해야 한다고 믿는다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 8,
  //   question: "긴급 상황 대비",
  //   options: [
  //     { label: "언제든지 투자 자금을 인출할 수 있어야 한다.", value: 1 },
  //     {
  //       label: "일부는 인출 가능하고 일부는 장기 투자로 유지할 수 있다.",
  //       value: 3,
  //     },
  //     { label: "투자 자금을 장기적으로 유지할 수 있다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 9,
  //   question: "나이",
  //   options: [
  //     { label: "20-35세", value: 5 },
  //     { label: "36-50세", value: 3 },
  //     { label: "51세 이상", value: 1 },
  //   ],
  // },
  // {
  //   id: 10,
  //   question: "직업 안정성",
  //   options: [
  //     { label: "정규직으로 고용되어 있다.", value: 5 },
  //     { label: "자영업자/프리랜서이다.", value: 3 },
  //     { label: "고용 상태가 불안정하거나 미취업 상태다.", value: 1 },
  //   ],
  // },
  // {
  //   id: 11,
  //   question: "월 소득 수준 (세후)",
  //   options: [
  //     { label: "500만 원 이상", value: 5 },
  //     { label: "200-500만 원", value: 3 },
  //     { label: "200만 원 미만", value: 1 },
  //   ],
  // },
  // {
  //   id: 12,
  //   question: "순자산 범위 (비상금 포함)",
  //   options: [
  //     { label: "1억 원 이상", value: 5 },
  //     { label: "5천만 원 - 1억 원", value: 3 },
  //     { label: "5천만 원 미만", value: 1 },
  //   ],
  // },
  // {
  //   id: 13,
  //   question: "앞으로 1년 내 사용해야 하는 금액이 있습니까?",
  //   options: [
  //     { label: "예, 큰 금액이 필요합니다.", value: 1 },
  //     {
  //       label: "아니요, 대부분의 금액은 장기적으로 사용할 수 있습니다.",
  //       value: 3,
  //     },
  //     { label: "아니요, 장기간 전혀 사용할 계획이 없습니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 14,
  //   question: "현재 부채 상태",
  //   options: [
  //     { label: "많은 부채가 있습니다.", value: 1 },
  //     { label: "적당한 부채가 있습니다.", value: 3 },
  //     { label: "부채가 없습니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 15,
  //   question: "소득 대비 저축률",
  //   options: [
  //     { label: "10% 미만", value: 1 },
  //     { label: "10-20%", value: 3 },
  //     { label: "20% 이상", value: 5 },
  //   ],
  // },
  // {
  //   id: 16,
  //   question: "투자에 대한 지식 수준",
  //   options: [
  //     { label: "전혀 모릅니다.", value: 1 },
  //     { label: "기초적인 수준입니다.", value: 3 },
  //     { label: "전문적인 지식을 가지고 있습니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 17,
  //   question: "월 생활비 대비 여유 자금",
  //   options: [
  //     { label: "거의 없습니다.", value: 1 },
  //     { label: "약간 있습니다.", value: 3 },
  //     { label: "충분합니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 18,
  //   question: "위험을 피하기 위한 선호도",
  //   options: [
  //     { label: "안전한 투자만 합니다.", value: 1 },
  //     { label: "조금 위험을 감수할 수 있습니다.", value: 3 },
  //     { label: "높은 위험도 감수할 수 있습니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 19,
  //   question: "미래의 예상 수익 목표",
  //   options: [
  //     { label: "낮은 수익률로도 충분합니다.", value: 1 },
  //     { label: "중간 정도의 수익률을 원합니다.", value: 3 },
  //     { label: "최대한 높은 수익률을 추구합니다.", value: 5 },
  //   ],
  // },
  // {
  //   id: 20,
  //   question: "가족의 재정 지원 의무",
  //   options: [
  //     { label: "가족을 지원해야 합니다.", value: 1 },
  //     { label: "일부만 지원합니다.", value: 3 },
  //     { label: "가족 지원 의무가 없습니다.", value: 5 },
  //   ],
  // },
];
