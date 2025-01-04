import React, { useState } from "react";
import { InvestmentProfile, questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";
import Box from "@mui/material/Box";
import { Item } from "../styles/box.tsx";

const Checklist: React.FC = () => {
  const navigate = useNavigate();
  const setAssetStateRecoil = useSetRecoilState(assetState);
  const [state, setState] = useRecoilState(checklistState);
  const { scores } = state;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
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
      determinedProfile = "Conservative Investor";
    } else if (totalScore <= 80) {
      determinedProfile = "Moderate Investor";
    } else {
      determinedProfile = "Aggressive Investor";
    }

    setState((prev) => ({ ...prev, profile: determinedProfile }));
    setAssetStateRecoil(determinedProfile);
    navigate("/checklist/result");
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        gridTemplateRows: "repeat(2, 1fr)",
      }}
    >
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          color: theme.palette.text.primary,
        }}
      >
        <Item>
          <h1>Investment Profile Checklist</h1>
        </Item>
        <div style={{ marginBottom: "20px" }}>
          <Item>
            <h2>{currentQuestion.question}</h2>
          </Item>
          {currentQuestion.options.map((option) => (
            <div key={option.label}>
              <label>
                <input
                  style={{ margin: "10px" }}
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
    </Box>
  );
};

export default Checklist;
