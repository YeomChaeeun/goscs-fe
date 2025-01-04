import { recommendations } from "../data/recommendations.ts";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom.ts";
import { assetAllocation } from "./Checklist.tsx";
import { theme } from "../App.tsx";
import { Item, Li } from "../styles/box.tsx";

const ChecklistResult = () => {
  const navigate = useNavigate();
  const [state] = useRecoilState(checklistState);
  const { profile } = state;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {profile && (
        <div
          style={{
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            color: theme.palette.text.primary,
          }}
        >
          <Item>
            <h1>당신의 투자 성향은: {state.profile}</h1>
          </Item>
          <Item>
            <h2>추천 종목</h2>
            <ul>
              {recommendations[profile].map(
                (item: { id: number; title: string }) => (
                  <Li key={item.id}>
                    <Link to={`/stockdetail/${item.id}`}>{item.title}</Link>
                  </Li>
                )
              )}
            </ul>
          </Item>
          <Item>
            <h2>자산 분배 추천</h2>
            <ul>
              {Object.entries(
                assetAllocation[profile] as { [key: string]: number }
              ).map(([asset, percentage]) => (
                <Li key={asset}>
                  {asset}: {percentage}%
                </Li>
              ))}
            </ul>
          </Item>
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
