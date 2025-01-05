import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TradeSection = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  padding: theme.spacing(4),
  bgColor:'background.default',
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const InvestSection = () => {
  const navigate = useNavigate();
  return (
    <TradeSection>
      <Typography variant="h3" gutterBottom sx={{fontWeight: 'medium'}}>
        Track Stock Trends
        <br />with Interactive Charts
      </Typography>
      <Typography variant="h6" sx={{ fontSize: "1.5rem", maxWidth: 1000 }}>
        Explore the performance of stocks <br/> with our{" "}
        <span style={{ textDecoration: "underline" }}>
          <strong>dynamic trend charts.</strong>{" "}
        </span>{" "}
        Search for any stock to see
        <br />its growth trajectory and gain valuable{" "}
        <span style={{ textDecoration: "underline" }}>
          <strong>insights. ✨</strong>{" "}
        </span>{" "}
        <br />
      </Typography>
      <Button
        variant="contained"
        // color="secondary"
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
