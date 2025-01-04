import { Component } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import backgroundImg from "/src/assets/background_img.png";

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(4),
  backgroundSize: "cover",
  backgroundPosition: "center center",
  color: "white",
}));

class MainSection extends Component<{ onClick: () => void | Promise<void> }> {
  render() {
    return (
      <HeroSection>
        <Typography variant="h3" gutterBottom>
          Personalized Investment Solutions
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ maxWidth: 600, lineHeight: 1.7 }}
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
          Start your
          <span style={{ textDecoration: "underline" }}>
            <strong> smarter investing journey</strong>
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
    );
  }
}

export default MainSection;
