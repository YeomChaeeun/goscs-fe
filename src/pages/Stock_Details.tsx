import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recommendations } from "../data/recommendations";
import { investmentDetails } from "../data/investmentDetails";

const StockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // ID로 제목 찾기
  const findTitleById = (id: string) => {
    const allRecommendations = Object.values(recommendations).flatMap(
      (items) => items
    );
    const matchedItem = allRecommendations.find(
      (item) => item.id.toString() === id
    );
    return matchedItem ? matchedItem.title : "해당 항목을 찾을 수 없습니다.";
  };

  if (!id) {
    return (
      <p style={{ color: "red", padding: "20px" }}>ID가 제공되지 않았습니다.</p>
    );
  }

  const title = findTitleById(id);
  const investment = investmentDetails.find((item) => item.title === title);
  const recommendedItems =
    investment?.recommendedItems?.join(", ") || "추천 종목이 없습니다.";

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>추천 항목</h1>
      <p>
        <strong>제목:</strong> {title}
      </p>
      <p>
        <strong>설명:</strong> {investment?.description || "설명이 없습니다."}
      </p>
      <h2>추천 종목</h2>
      <p>{recommendedItems}</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{ marginRight: "10px", padding: "10px 20px" }}
        >
          돌아가기
        </button>
        <button
          onClick={() => navigate(`/asset-allocation/${id}`)}
          style={{ padding: "10px 20px" }}
        >
          자산 분배
        </button>
      </div>
    </div>
  );
};

export default StockDetails;
