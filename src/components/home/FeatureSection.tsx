import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import { recommendations } from "../../data/recommendations.ts";
import { InvestmentProfile } from "../../data/questions.ts";
import { useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../../recoil/atoms/assetAtom.ts";
import { useNavigate } from "react-router-dom";

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundColor: theme.palette.background.paper,
  textAlign: "center",
  minHeight: "100vh",
  color: "white",
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2),
  height: "230px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "black",
  cursor: "pointer",
}));

const FeatureSection = () => {
  const navigate = useNavigate();
  const setState = useSetRecoilState(checklistState);
  const setAssetStateRecoil = useSetRecoilState(assetState);

  const handleSelectProfile = (profile: InvestmentProfile) => {
    setState((prev) => ({ ...prev, profile: profile }));
    setAssetStateRecoil(profile);
    navigate("/checklist/result");
  };

  return (
    <FeaturesSection>
      <Typography
        style={{ marginTop: "50px", marginBottom: "100px" }}
        variant="h3"
        gutterBottom
      >
        There are three investment tendencies. Try it 🚀.
      </Typography>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {(Object.keys(recommendations) as InvestmentProfile[]).map(
            (profile) => {
              return (
                <FeatureCard
                  onClick={() => {
                    handleSelectProfile(profile);
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    <strong>{profile}</strong>
                  </Typography>
                </FeatureCard>
              );
            }
          )}
        </Box>
      </Container>
    </FeaturesSection>
  );
};

export default FeatureSection;
