import React from "react";
import { useParams } from "react-router-dom";

const StockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { title } = useParams<{ title: string }>();

  console.log(title);
  const details = {
    주식: "주식은 기업의 지분을 나타내며, 미국 주식과 한국 주식이 있습니다. 한국 주식은 KOSPI, KOSDAQ 시장에서 거래되며, 미국 주식은 NYSE, NASDAQ에서 거래됩니다. 주식 시장은 각각 한국: 09:00~15:30, 미국: 09:30~16:00(현지 시간) 운영됩니다.",
    채권: "채권은 정부나 기업이 자금을 조달하기 위해 발행하는 고정 수익 증권입니다.",
    현금: "현금은 유동성과 안정성이 높은 자산으로, 단기적 필요 자금으로 적합합니다.",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{id}</h1>
      <p>{details["주식"] || "해당 항목에 대한 설명이 없습니다."}</p>
      <button
        onClick={() => window.history.back()}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default StockDetails;
