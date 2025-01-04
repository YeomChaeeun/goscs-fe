import { recommendations } from "../data/recommendations.ts";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom.ts";
import { assetAllocation } from "./Checklist.tsx";
import { theme } from "../App.tsx";

const ChecklistResult = () => {
  const navigate = useNavigate();
  const [state, setState] = useRecoilState(checklistState);
  const { profile } = state;
  return (
    <div>
      {profile && (
        <div
          style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            color: theme.palette.text.primary,
          }}
        >
          <p>당신의 투자 성향은: {state.profile}</p>
          <h2>추천 종목</h2>
          <ul>
            {recommendations[profile].map(
              (item: { id: number; title: string }) => (
                <li key={item.id}>
                  <Link to={`/stockdetail/${item.id}`}>{item.title}</Link>
                </li>
              )
            )}
          </ul>
          <h2>자산 분배 추천</h2>
          <ul>
            {Object.entries(
              assetAllocation[profile] as { [key: string]: number }
            ).map(([asset, percentage]) => (
              <li key={asset}>
                {asset}: {percentage}%
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate(`/asset-allocation`)}
            style={{ padding: "10px 20px" }}
          >
            자산 분배
          </button>
        </div>
      )}
    </div>
  );
};

export default ChecklistResult;
