import { Component } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import backgroundImg from "/src/assets/background_img.png";

const ParentContainer = styled(Box)({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
});

const BackgroundImage = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
  backgroundSize: "cover",
  backgroundPosition: "left top",
  backgroundRepeat: "no-repeat",
  transform: "scale(1.5)",
  transformOrigin: "left",
  zIndex: 0,
});

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'calc(100vh)',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  color: "white",
  zIndex: 1,
}));

class MainSection extends Component<{ onClick: () => void | Promise<void> }> {
  render() {
    return (
      <ParentContainer>
        <BackgroundImage />
        <HeroSection>
          <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', width: '100%' }}>
            Personalized Investment Solutions
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ maxWidth: 600, lineHeight: 1.7, textAlign: 'center', margin: '0 auto' }}
          >
            Discover your perfect investment strategy with{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>FinFit!</strong>
            </span>{" "}
            <br />
            We simplify investing for{" "}
            <span style={{ textDecoration: "underline" }}>
              <strong>beginners</strong>
            </span>{" "}
            by analyzing your style and recommending tailored strategies with
            stocks. <br />
            Start your{' '}
            <span style={{ textDecoration: "underline" }}>
              <strong>smarter investing journey</strong>
            </span>{" "}
            with us!
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            onClick={this.props.onClick}
          >
            Start Now
          </Button>
        </HeroSection>
      </ParentContainer>
    );
  }
}

export default MainSection;