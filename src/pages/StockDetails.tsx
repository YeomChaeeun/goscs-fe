import React, {useMemo} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {investmentDetails} from "../data/investmentDetails";
import {theme} from "../App.tsx";
import {useRecoilValue, useRecoilValueLoadable} from "recoil";
import {assetState} from "../recoil/atoms/assetAtom";
import {Box, Card, CardContent, CircularProgress, Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { newsListSelector } from "../recoil/selectors/selector.ts";

interface NewsItem {
  url: string;
  title: string;
  summary: string;
  wdate: string;
}

const StockDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const assetStateRecoil = useRecoilValue(assetState);
  const investment = investmentDetails.find((item) => item.id === Number(id));

  // recommendedItems에서 랜덤하게 하나의 항목 선택
  const randomItem = useMemo(() => {
    if (!investment?.recommendedItems?.length) return "애플"; // 기본값 설정
    const randomIndex = Math.floor(Math.random() * investment.recommendedItems.length);
    return investment.recommendedItems[randomIndex];
  }, [investment?.recommendedItems]);

  // 선택된 랜덤 항목으로 selector 호출
  const newsLoadable = useRecoilValueLoadable(
    newsListSelector({ itemName: randomItem, itemCount: 3 })
  );

  if (!id) {
    return (
      <div style={{ color: "red", padding: "20px" }}>
        <p>잘못된 접근입니다. ID가 제공되지 않았습니다.</p>
        <button onClick={() => navigate(-1)} style={{ padding: "10px 20px" }}>
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <Container maxWidth="md" sx={{p: 4}}>
      <Typography variant="h4" color="text.primary" sx={{ mb: 2 }}>
        추천 항목 : {investment?.title}
      </Typography>

      <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
        - {investment?.description || "설명이 없습니다."}
      </Typography>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        {assetStateRecoil}를 위한 추천 종목 예시
      </Typography>

      <Typography variant="body1" color="text.primary">
        - {investment?.recommendedItems?.join(", ") || "추천 종목이 없습니다."}
      </Typography>

      {newsLoadable.state === 'loading' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {newsLoadable.state === 'hasValue' && newsLoadable.contents.map((value: NewsItem) => (
        <Card sx={{
          padding: theme.spacing(3),
          borderRadius: theme.spacing(2),
          margin: theme.spacing(2),
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.summary}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {newsLoadable.state === 'hasError' && (
        <Typography color="error" sx={{ textAlign: 'center', my: 4 }}>
          뉴스를 불러오는 중 오류가 발생했습니다.
        </Typography>
      )}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2.5),
        pb: 2
      }}>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"
          sx={{
            padding: theme.spacing(1.25, 2.5),
          }}
        >
          돌아가기
        </Button>
      </Box>
    </Container>
  );
};

export default StockDetails;