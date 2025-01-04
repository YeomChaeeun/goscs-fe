import React, {useLayoutEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {investmentDetails} from "../data/investmentDetails";
import {theme} from "../App.tsx";
import {useRecoilValue} from "recoil";
import {assetState} from "../recoil/atoms/assetAtom";
import {Box, Card, CardContent, Container, Typography} from "@mui/material";
import {newsApi} from "../services/newsApi.ts";
import Button from "@mui/material/Button";

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
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const investment = investmentDetails.find((item) => item.id === Number(id));

  const getNewsList = () => {
    const item_name = encodeURIComponent("엔비디아")
    const item_count = 3
    newsApi.getNewsList(item_name, item_count).then(value => {
      setNewsList(value.data)
    })
  }

  useLayoutEffect(() => {
    getNewsList()
  }, []);

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

      {/*<Typography variant="subtitle1" color="text.primary" sx={{ mb: 1 }}>*/}
      {/*  <strong>제목:</strong> {investment?.title}*/}
      {/*</Typography>*/}

      <Typography variant="subtitle1" color="text.primary" sx={{ mb: 2 }}>
        - {investment?.description || "설명이 없습니다."}
      </Typography>

      <Typography variant="h5" color="text.primary" sx={{ mb: 2 }}>
        {assetStateRecoil}를 위한 추천 종목 예시
      </Typography>

      <Typography variant="body1" color="text.primary">
        - {investment?.recommendedItems?.join(", ") || "추천 종목이 없습니다."}
      </Typography>

      {newsList.map((value: NewsItem) => {
        return (
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
          {/*<CardMedia*/}
          {/*  sx={{ height: 140 }}*/}
          {/*  image="/static/images/cards/contemplative-reptile.jpg"*/}
          {/*  title="green iguana"*/}
          {/*/>*/}
          <CardContent>
            <Typography gutterBottom
                        variant="h5"
                        component="a"  // a 태그로 변경
                        href={value.url}  // 실제 URL로 변경 필요
                        target="_blank"  // 새 창으로 열기
                        rel="noopener noreferrer"  // 보안을 위한 속성 추가
            >
              {value.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.summary}
            </Typography>
          </CardContent>
          {/*<CardActions>*/}
          {/*  <Button size="small">Learn More</Button>*/}
          {/*</CardActions>*/}
        </Card>
        )
      })}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2.5),
        pb:2
      }}>
        <Button
          onClick={() => navigate(-1)}
          variant="contained"  // MUI Button 스타일 사용
          sx={{
            padding: theme.spacing(1.25, 2.5),  // "10px 20px"를 theme spacing으로 변경
          }}
        >
          돌아가기
        </Button>
      </Box>
    </Container>
  );
};

export default StockDetails;
