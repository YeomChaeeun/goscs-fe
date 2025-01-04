import { recommendations } from "../data/recommendations.ts";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom.ts";
import { assetAllocation } from "./Checklist.tsx";
import { theme } from "../App.tsx";
import { Item, Li, StyledLi, StyledLink } from "../styles/box.tsx";

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
            <h1>Your Investment Profile: {state.profile}</h1>
          </Item>
          <Item>
            <h2>Recommendations</h2>
            <ul>
              {recommendations[profile].map(
                (item: { id: number; title: string }) => (
                  <StyledLi key={item.id}>
                    <StyledLink to={`/stockdetail/${item.id}`}>
                      {item.title}
                    </StyledLink>
                  </StyledLi>
                )
              )}
            </ul>
          </Item>
          <Item>
            <h2>Asset Allocation Recommendation</h2>
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
            View Asset Allocation
          </button>
        </div>
      )}
    </div>
  );
};

export default ChecklistResult;
