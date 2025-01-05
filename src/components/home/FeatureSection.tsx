import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";
import { recommendations } from "../../data/recommendations.ts";
import { InvestmentProfile } from "../../data/questions.ts";
import { useSetRecoilState } from "recoil";
import { assetState, checklistState } from "../../recoil/atoms/assetAtom.ts";
import { useNavigate } from "react-router-dom";
import React from "react";
import icon01 from '/src/assets/icon_01.png';
import icon02 from '/src/assets/icon_02.png';
import icon03 from '/src/assets/icon_03.png';

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 4),
  backgroundImage: "linear-gradient(45deg, rgb(255, 69, 58), rgb(211, 79, 65))",
  textAlign: "center",
  minHeight: "100vh",
  color: "white",
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: "white",
  borderRadius: theme.spacing(2),
  margin: theme.spacing(2),
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // justifyContent: "space-between",
  color: "black",
  cursor: "pointer",
}));

// 이미지 아이콘을 위한 스타일드 컴포넌트
const IconImage = styled('img')({
  width: '122px',  // 이미지 크기 조절
  height: '122px',
  objectFit: 'contain'
});

// 아이콘 컨테이너 스타일 추가
const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: "auto", // 상단 컨텐츠와 간격 유지
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
  const getProfileIcons = (profile: InvestmentProfile) => {
    switch (profile) {
      case "Conservative Investor":
        return <IconImage src={icon01} alt="low risk" />
      case "Moderate Investor":
        return  <IconImage src={icon02} alt="medium risk" />
      case "Aggressive Investor":
        return <IconImage src={icon03} alt="high risk" />

      default:
        return null;
    }
  };

  return (
    <FeaturesSection>
      <Typography
        style={{ margin: "50px"}}
        variant="h3"
        gutterBottom
        sx={{fontWeight: 'medium'}}
      >
        There are three investment
        <br />tendencies. Try it 🚀.
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
                  key={profile}
                  onClick={() => {
                    handleSelectProfile(profile);
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    <strong>{profile}</strong>
                  </Typography>
                  <IconContainer>
                    <Box key={profile + 'icon'} sx={{ p: 1 }}>
                      {getProfileIcons(profile)}
                    </Box>
                  </IconContainer>
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
