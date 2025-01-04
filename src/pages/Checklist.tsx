import React, { useState } from "react";
import { InvestmentProfile, questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";

export const assetAllocation = {
  "안전형 투자자": {
    채권: 80,
    현금: 20,
  },
  "위험중립형 투자자": {
    주식: 50,
    채권: 40,
    현금: 10,
  },
  "공격형 투자자": {
    주식: 80,
    채권: 15,
    현금: 5,
  },
};

const Checklist: React.FC = () => {
  const navigate = useNavigate();
  const setAssetStateRecoil = useSetRecoilState(assetState);
  const [state, setState] = useRecoilState(checklistState);
  const { scores, profile } = state;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // 현재 질문 인덱스 관리
  const [error, setError] = useState<string | null>(null);

  const handleOptionChange = (value: number) => {
    const updatedScores = [...scores];
    updatedScores[currentQuestionIndex] = value;
    setState((prev) => ({ ...prev, scores: updatedScores }));
    setError(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      calculateProfile();
    }
  };

  const calculateProfile = () => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);

    let determinedProfile: InvestmentProfile;
    if (totalScore <= 40) {
      determinedProfile = "안전형 투자자";
    } else if (totalScore <= 80) {
      determinedProfile = "위험중립형 투자자";
    } else {
      determinedProfile = "공격형 투자자";
    }

    setState((prev) => ({ ...prev, profile: determinedProfile }));
    setAssetStateRecoil(determinedProfile);
    navigate("/checklist/result");
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: theme.palette.text.primary,
      }}
    >
      <h1>투자 성향 체크리스트</h1>
      <div style={{ marginBottom: "20px" }}>
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.options.map((option) => (
          <div key={option.label}>
            <label>
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                value={option.value}
                checked={scores[currentQuestion.id - 1] === option.value}
                onChange={() => handleOptionChange(option.value)}
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>
      )}
    </div>
  );
};

export default Checklist;
