import React from "react";
import { useRecoilState } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom";
import { InvestmentProfile, questions } from "../data/questions";
import { recommendations } from "../data/recommendations";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../App.tsx";

const Checklist: React.FC = () => {
  const navigate = useNavigate();

  const [state, setState] = useRecoilState(checklistState);
  const { scores, profile } = state;

  const handleOptionChange = (questionId: number, value: number) => {
    const updatedScores = [...scores];
    updatedScores[questionId - 1] = value;
    setState((prev) => ({ ...prev, scores: updatedScores }));
  };

  const calculateProfile = () => {
    const missingQuestions = scores
      .map((score, index) => (score === 0 ? index + 1 : null))
      .filter((item) => item !== null);

    if (missingQuestions.length > 0) {
      alert(`모든 항목에 응답해주세요: ${missingQuestions.join(", ")}`);
      return;
    }

    const totalScore = scores.reduce((acc, score) => acc + score, 0);

    let determinedProfile: InvestmentProfile;
    if (totalScore <= 40) {
      determinedProfile = "안전형 투자자";
    } else if (totalScore <= 80) {
      determinedProfile = "균형형 투자자";
    } else {
      determinedProfile = "공격형 투자자";
    }

    setState((prev) => ({ ...prev, profile: determinedProfile }));
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: theme.palette.text.primary,
      }}
    >
      <h1>투자 성향 체크리스트</h1>
      {questions.map((question) => (
        <div key={question.id} style={{ marginBottom: "20px" }}>
          <h3>{question.question}</h3>
          {question.options.map((option) => (
            <div key={option.label}>
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.value}
                  checked={scores[question.id - 1] === option.value}
                  onChange={() => handleOptionChange(question.id, option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={calculateProfile} style={{ marginTop: "20px" }}>
        투자 성향 확인
      </button>
      {profile && (
        <div>
          <p>투자 성향 결과 : {profile}</p>
          <h2>추천 종목</h2>
          <ul>
            {recommendations[profile as InvestmentProfile].map((item) => (
              <li key={item.id}>
                <Link to={`/stockdetail/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {profile && (
        <button
          onClick={() => navigate(`/asset-allocation`)}
          style={{ padding: "10px 20px" }}
        >
          자산 분배
        </button>
      )}
    </div>
  );
};

export default Checklist;
