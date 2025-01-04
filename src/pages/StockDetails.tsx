import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recommendations } from "../data/recommendations";
import { investmentDetails } from "../data/investmentDetails";
import { theme } from "../App.tsx";
import { useRecoilValue } from "recoil";
import { assetState } from "../recoil/atoms/assetAtom";

const StockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assetStateRecoil = useRecoilValue(assetState);

  console.log(assetStateRecoil + "stockdetails");
  const findTitleById = (id: string) => {
    const matchedItem = Object.values(recommendations)
      .flat()
      .find((item) => item.id.toString() === id);
    return matchedItem ? matchedItem.title : "해당 항목을 찾을 수 없습니다.";
  };

  if (!id) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        <p>잘못된 접근입니다. ID가 제공되지 않았습니다.</p>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px" }}>
          돌아가기
        </button>
      </div>
    );
  }

  const title = findTitleById(id);
  const investment = investmentDetails.find((item) => item.title === title);
  const recommendedItems =
    investment?.recommendedItems?.join(", ") || "추천 종목이 없습니다.";

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: theme.palette.text.primary,
      }}
    >
      <h1>추천 항목</h1>
      <p>
        <strong>제목:</strong> {title}
      </p>
      <p>
        <strong>설명:</strong> {investment?.description || "설명이 없습니다."}
      </p>
      <h2>{assetStateRecoil}를 위한 추천 종목 예시</h2>
      <p>{recommendedItems}</p>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          돌아가기
        </button>
      </div>
    </div>
  );
};

export default StockDetails;
