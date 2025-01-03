import React, { useState } from "react";
import { questions, InvestmentProfile } from "../data/questions";

const Questionnaire: React.FC = () => {
  const [scores, setScores] = useState<number[]>(
    Array(questions.length).fill(0)
  );
  const [profile, setProfile] = useState<InvestmentProfile | null>(null);

  const handleOptionChange = (questionId: number, value: number) => {
    const updatedScores = [...scores];
    updatedScores[questionId - 1] = value;
    setScores(updatedScores);
  };

  const calculateProfile = () => {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);

    let determinedProfile: InvestmentProfile;
    if (totalScore <= 40) {
      determinedProfile = "안전형 투자자";
    } else if (totalScore <= 80) {
      determinedProfile = "균형형 투자자";
    } else {
      determinedProfile = "공격형 투자자";
    }
    setProfile(determinedProfile);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
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
                  onChange={() => handleOptionChange(question.id, option.value)}
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={calculateProfile}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        투자 성향 확인
      </button>
      {profile && (
        <div
          style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}
        >
          당신의 투자 성향은: {profile}
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
