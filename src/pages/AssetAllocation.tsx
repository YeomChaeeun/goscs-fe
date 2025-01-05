import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useRecoilValue } from "recoil";
import { checklistState } from "../recoil/atoms/assetAtom";
import { theme } from "../App.tsx";
import { Box } from "@mui/material";
import { Item } from "../styles/box.tsx";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

const AssetAllocation: React.FC = () => {
  const navigate = useNavigate();
  const [totalAsset, setTotalAsset] = useState<number | "">("");

  const assetStateRecoil = useRecoilValue(checklistState);

  const allocation = {
    "Conservative Investor": { Bonds: 80, Savings: 20 },
    "Moderate Investor": { Bonds: 40, Stocks: 40, REITs: 20 },
    "Aggressive Investor": { Stocks: 60, Leverage: 30, Cryptocurrency: 10 },
  };

  useEffect(() => {}, [totalAsset]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/,/g, "");
    if (!isNaN(Number(value))) {
      setTotalAsset(Number(value));
    } else if (value === "") {
      setTotalAsset("");
    }
  };

  const profileType = assetStateRecoil.profile;
  if (!profileType) {
    return (
      <p>
        Investment profile is not selected. Please go back to the previous page.
      </p>
    );
  }
  const percentages = allocation[profileType as keyof typeof allocation];

  const data = [
    ["Category", "Amount (₩)"],
    ...Object.entries(percentages).map(([key, value]) => [
      key,
      (Number(totalAsset) * value) / 100,
    ]),
  ];

  const options = {
    title: "Asset Allocation",
    pieHole: 0.4,
    slices: [{ offset: 0.1 }],
  };

  const formatNumber = (value: number | "") => {
    if (value === "") return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        gridTemplateRows: "repeat(2, 1fr)",
        padding: '100px 32px 32px 32px',
      }}
    >
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: theme.palette.text.primary,
        }}
      >
        <Item>
          <h1>Asset Allocation Example for {profileType}</h1>
        </Item>
        <Item>
          <p>
            Assets are distributed according to the following percentages based
            on your investment profile:
          </p>
        </Item>
        <input
          type="text"
          value={formatNumber(totalAsset ? Number(totalAsset) : "")}
          onChange={handleInputChange}
          placeholder="Enter total assets (₩)"
          style={{ marginBottom: "20px", padding: "10px", width: "300px" }}
        />

        {Number(totalAsset) > 0 ? (
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        ) : (
          <p style={{ color: "red" }}>
            Enter the total asset amount to display the graph.
          </p>
        )}
        <br />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: theme.spacing(2.5),
            pb: 2,
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            variant="contained"
            sx={{
              padding: theme.spacing(1.25, 2.5),
            }}
          >
            Go Back
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default AssetAllocation;
