import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { useRecoilValue } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";

const AssetAllocation: React.FC = () => {
  const [totalAsset, setTotalAsset] = useState<number>(0);

  const assetStateRecoil = useRecoilValue(checklistState);

  const allocation = {
    "안전형 투자자": { 채권: 80, 예금: 20 },
    "균형형 투자자": { 채권: 40, 주식: 40, REITs: 20 },
    "공격형 투자자": { 주식: 60, 레버리지: 30, 암호화폐: 10 },
  };

  const profileType = assetStateRecoil.profile;
  if (!profileType) {
    return <p>투자 성향이 선택되지 않았습니다. 이전 페이지로 돌아가 주세요</p>;
  }
  const percentages = allocation[profileType as keyof typeof allocation];

  const data = [
    ["Category", "Amount (₩)"],
    ...Object.entries(percentages).map(([key, value]) => [
      key,
      (totalAsset * value) / 100,
    ]),
  ];

  const options = {
    title: "자산 분배",
    pieHole: 0.4,
    slices: [{ offset: 0.1 }],
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: theme.palette.text.primary,
      }}
    >
      <h1>{profileType}의 자산 분배 예시</h1>
      <p>투자 성향에 따라 자산을 아래 비율로 분배합니다:</p>

      <input
        type="number"
        value={totalAsset}
        onChange={(e) => setTotalAsset(Number(e.target.value))}
        placeholder="총 자산 입력 (₩)"
        style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
      />

      {totalAsset > 0 ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      ) : (
        <p style={{ color: "red" }}>
          총 자산 금액을 입력하면 그래프가 표시됩니다.
        </p>
      )}

      <button
        onClick={() => window.history.back()}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        돌아가기
      </button>
    </div>
  );
};

export default AssetAllocation;
