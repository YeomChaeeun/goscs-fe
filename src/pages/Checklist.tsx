// 투자 성향 체크리스트를 기반으로 투자 성향 도출 기능 구현
import React, {useState} from "react";
import {InvestmentProfile, questions} from "../data/questions";
import {useNavigate} from "react-router-dom";
import {useRecoilState, useSetRecoilState} from "recoil";
import {assetState, checklistState} from "../recoil/atoms/assetAtom";
import {theme} from "../App.tsx";

export const assetAllocation = {
  "안전형 투자자": {
    채권: 80,
    현금: 20,
  },
  "균형형 투자자": {
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
  const setAssetStateRecoil = useSetRecoilState(assetState)
  const [state, setState] = useRecoilState(checklistState);
  const { scores, profile } = state;
  const [error, setError] = useState<string | null>(null);

  const handleOptionChange = (questionId: number, value: number) => {
    const updatedScores = [...scores];
    updatedScores[questionId - 1] = value;
    setState((prev) => ({ ...prev, scores: updatedScores }));
  };

  const calculateProfile = () => {
    if (scores.length !== questions.length) {
        setError("모든 항목을 선택해야 결과를 확인할 수 있습니다.");
        // alert(`모든 항목에 응답해주세요!`);
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
    setAssetStateRecoil(determinedProfile);
    navigate('/checklist/result')
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
      {error && (
          <div style={{ color: "red", marginBottom: "20px" }}>
              {error}
          </div>
      )}
      <button onClick={calculateProfile} style={{ marginTop: "20px" }}>
        투자 성향 확인
      </button>
    </div>
  );
};

export default Checklist;
