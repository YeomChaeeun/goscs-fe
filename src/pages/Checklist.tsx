import React, { useState } from "react";
import { InvestmentProfile, questions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";
import Box from "@mui/material/Box";
import { Item } from "../styles/box.tsx";
import {styled} from "@mui/material/styles";
import backgroundImg from "/src/assets/background_image_checklist.jpeg";
import {Typography} from "@mui/material";


const ParentContainer = styled(Box)({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
});

const BgSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImg})`,
  minHeight: "40vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(4),
  backgroundSize: "cover",
  backgroundPosition: "right center",
  color: "white",
}));

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
    <ParentContainer>
      <BgSection>
        {/*<Typography>*/}
        {/*  <h1>Checklist</h1>*/}
        {/*</Typography>*/}
      </BgSection>
      <Box
        sx={{
          display: "grid",
          bgcolor: 'white',
          placeItems: "center",
          height: "60vh",
          gridTemplateRows: "repeat(2, 1fr)",
          padding: '2rem',
        }}
      >
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            // color: theme.palette.text.primary,
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <Typography sx={{ pb: 2 }} >
              <h2>Investment Profile Checklist</h2>
            </Typography>
            <Typography sx={{ pb: 1 }}>
              <h3>{currentQuestion.question}</h3>
            </Typography>
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
    </ParentContainer>
  );
};

export default Checklist;
