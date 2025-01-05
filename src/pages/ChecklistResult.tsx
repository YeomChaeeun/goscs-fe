import {recommendations} from "../data/recommendations.ts";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {checklistState} from "../recoil/atoms/assetAtom.ts";
import {theme} from "../App.tsx";
import {Item, Li, StyledLi, StyledLink} from "../styles/box.tsx";
import Button from "@mui/material/Button";
import { assetAllocation } from "../data/assetAllocation.ts";

const ChecklistResult = () => {
  const navigate = useNavigate();
  const state = useRecoilValue(checklistState);
  const { profile } = state;
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: '100px 32px 32px 32px',}}>
      {profile && (
        <div
          style={{
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
          <Button
            onClick={() => navigate(`/asset-allocation`)}
            variant="contained"
            sx={{
              padding: theme.spacing(1.25, 2.5),
            }}
          >
            View Asset Allocation
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChecklistResult;
