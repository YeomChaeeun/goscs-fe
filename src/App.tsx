// 투자 성향 체크리스트를 기반으로 투자 성향 도출 기능 구현
import React, { useState } from "react";
import { questions, InvestmentProfile } from "./data/questions";
import { recommendations } from "./data/recommendations";

const App: React.FC = () => {
  const [scores, setScores] = useState<number[]>(
    Array(questions.length).fill(0)
  );
  const [profile, setProfile] = useState<InvestmentProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [missingQuestions, setMissingQuestions] = useState<number[]>([]);

  const handleOptionChange = (questionId: number, value: number) => {
    const updatedScores = [...scores];
    updatedScores[questionId - 1] = value;
    setScores(updatedScores);
    setError(null); // 선택 시 에러 메시지 초기화
    setMissingQuestions([]); // 선택 시 누락 항목 초기화
  };

  const calculateProfile = () => {
    const missing = scores
      .map((score, index) => (score === 0 ? index + 1 : null))
      .filter((item) => item !== null) as number[];

    if (missing.length > 0) {
      setError("모든 항목을 선택해야 결과를 확인할 수 있습니다.");
      setMissingQuestions(missing);
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
      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          {error}
          {missingQuestions.length > 0 && (
            <p>선택되지 않은 항목: {missingQuestions.join(", ")}</p>
          )}
        </div>
      )}
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
          <p>당신의 투자 성향은: {profile}</p>
          <h2>추천 종목</h2>
          <ul>
            {recommendations[profile].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
