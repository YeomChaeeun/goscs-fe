import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { investmentDetails } from "../data/investmentDetails";
import { theme } from "../App.tsx";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { assetState } from "../recoil/atoms/assetAtom";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { newsListSelector } from "../recoil/selectors/selector.ts";
import {NewsItem} from "../types/news.ts";

const StockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assetStateRecoil = useRecoilValue(assetState);
  const investment = investmentDetails.find((item) => item.id === Number(id));

  const randomItem = useMemo(() => {
    if (!investment?.recommendedItems?.length) return "Apple"; // Default value
    const randomIndex = Math.floor(
      Math.random() * investment.recommendedItems.length
    );
    return investment.recommendedItems[randomIndex];
  }, [investment?.recommendedItems]);

  const newsLoadable = useRecoilValueLoadable(
    newsListSelector({ itemName: randomItem, itemCount: 3 })
  );

  if (!id) {
    return (
      <div style={{ color: "red" }}>
        <p>Invalid access. No ID provided.</p>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px" }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <Container maxWidth="md" sx={{ padding: '100px 32px 32px 32px' }}>
      <Typography variant="h4" color="text.primary" sx={{ mb: 2 }}>
        Recommended Item: {investment?.title}
      </Typography>

      <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
        - {investment?.description || "No description available."}
      </Typography>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        Example Recommendations for {assetStateRecoil}
      </Typography>

      <Typography variant="body1" color="text.primary">
        -{" "}
        {investment?.recommendedItems?.join(", ") ||
          "No recommendations available."}
      </Typography>

      {newsLoadable.state === "loading" && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {newsLoadable.state === "hasValue" &&
        newsLoadable.contents.map((value: NewsItem) => (
          <Card
            sx={{
              padding: theme.spacing(3),
              borderRadius: theme.spacing(2),
              margin: theme.spacing(2),
              height: "200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={value.title}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="a"
                href={value.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {value.summary}
              </Typography>
            </CardContent>
          </Card>
        ))}

      {newsLoadable.state === "hasError" && (
        <Typography color="error" sx={{ textAlign: "center", my: 4 }}>
          An error occurred while loading the news. Please try reloading again.
        </Typography>
      )}

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
    </Container>
  );
};

export default StockDetails;
