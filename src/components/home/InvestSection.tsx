import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TradeSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(4),
  backgroundImage: "linear-gradient(45deg, #FF6B6B, #c53b2f)",
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const InvestSection = () => {
  const navigate = useNavigate();
  return (
    <TradeSection>
      <Typography variant="h3" gutterBottom>
        Track Stock Trends with Interactive Charts
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "1.5rem", maxWidth: 750 }}>
        Explore the performance of stocks with our{" "}
        <span style={{ textDecoration: "underline" }}>
          <strong>dynamic trend charts.</strong>{" "}
        </span>{" "}
        <br />
        Search for any stock to see its growth trajectory and gain valuable{" "}
        <span style={{ textDecoration: "underline" }}>
          <strong>insights. ✨</strong>{" "}
        </span>{" "}
        <br />
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ mt: 4, alignSelf: "flex-start" }}
        onClick={() => navigate("/investment")}
      >
        Get Started
      </Button>
    </TradeSection>
  );
};

export default InvestSection;
