import {recommendations} from "../data/recommendations.ts";
import {useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {checklistState} from "../recoil/atoms/assetAtom.ts";
import {theme} from "../App.tsx";
import {Li, StyledLi, StyledLink} from "../styles/box.tsx";
import Button from "@mui/material/Button";
import {assetAllocation} from "../data/assetAllocation.ts";
import {Typography} from "@mui/material";
import {useEffect} from "react";

const ChecklistResult = () => {
  const navigate = useNavigate();
  const state = useRecoilValue(checklistState);
  const { profile } = state;

  useEffect(() => {
    scroll(0, 0)
    if(!profile) navigate('/')
  });

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: '100px 32px 32px 32px',}}>
      {profile && (
        <div
          style={{
            color: theme.palette.text.primary,
          }}
        >
          <Typography>
            <h1>Your Investment Profile: {state.profile}</h1>
          </Typography>
          <Typography>
            <h2>Recommendations</h2>
            <Typography color="primary" variant="h6">These examples are provided for reference only. All investment decisions are entirely your responsibility.</Typography>
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
          </Typography>
          <Typography>
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
          </Typography>
          <br />
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
