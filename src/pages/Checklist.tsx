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

  // const [profile, setProfile] = useState<InvestmentProfile | null>(null);
  // const [error, setError] = useState<string | null>(null);
  const [missingQuestions, setMissingQuestions] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

    // const setAssetStateRecoil = useSetRecoilState(assetState)

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
        setError("모든 항목을 선택해야 결과를 확인할 수 있습니다.");
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
    setAssetStateRecoil(determinedProfile);
    // console.log(determinedProfile)
    // setState((prev) => ({ ...prev, profile: determinedProfile }));
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
                {missingQuestions.length > 0 && (
                    <p>선택되지 않은 항목: {missingQuestions.join(", ")}</p>
                )}
            </div>
        )}
      <button onClick={calculateProfile} style={{ marginTop: "20px" }}>
        투자 성향 확인
      </button>
      {/*{profile && (*/}
      {/*  <div*/}
      {/*    style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}*/}
      {/*  >*/}
      {/*    <p>당신의 투자 성향은: {profile}</p>*/}
      {/*    <h2>추천 종목</h2>*/}
      {/*    <ul>*/}
      {/*      {recommendations[profile].map((item) => (*/}
      {/*        <li key={item.id}>*/}
      {/*          <Link to={`/stockdetail/${item.id}`}>{item.title}</Link>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*    <h2>자산 분배 추천</h2>*/}
      {/*    <ul>*/}
      {/*      {Object.entries(assetAllocation[profile]).map(*/}
      {/*        ([asset, percentage]) => (*/}
      {/*          <li key={asset}>*/}
      {/*            {asset}: {percentage}%*/}
      {/*          </li>*/}
      {/*        )*/}
      {/*      )}*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export default Checklist;
