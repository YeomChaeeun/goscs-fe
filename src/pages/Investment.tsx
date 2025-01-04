import React from 'react';
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const InvestmentSection = styled(Box)(({ theme }) => ({
  color: "white",
}));

const Investment = () => {
  return (
    <InvestmentSection>
      investment
    </InvestmentSection>
  );
};

export default Investment;