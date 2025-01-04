import React, { useState } from "react";
import { InvestmentProfile, questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";
import Box from "@mui/material/Box";
import { Item } from "../styles/box.tsx";

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

// function Item(props: BoxProps) {
//   const { ...other } = props;
//   return (
//     <Box
//       sx={[
//         {
//           padding: "10px",
//           marginBottom: "20px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         },
//       ]}
//       {...other}
//     />
//   );
// }

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
          <h1>투자 성향 체크리스트</h1>
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
