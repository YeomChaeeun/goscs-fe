import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { API_URL } from "../services";
import { CircularProgress, Typography } from "@mui/material";
import {newsApi} from "../services/newsApi.ts";
import {StockItem} from "../types/news.ts";

const InvestmentSection = styled(Box)({
  padding: "100px 32px 32px 32px",
  textAlign: "center",
  color: "white",
});

const Investment = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(["QQQ", "SPY"]);
  const [isLoading, setIsLoading] = useState(true);
  const [stockList, setStockList] = useState<Array<{label:string; id:string}>>([{label:'QQQ', id:'QQQ'},{label:'SPY', id:'SPY'}])

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: Array<{label:string; id:string}>
  ) => {
    if (newValue.length <= 2) {
      if (newValue.length === 2) setIsLoading(true);
      setSelectedItems(newValue.map((item) => item.id));
    }
  };

  useEffect(() => {
    scroll(0, 0)
    const item_name = encodeURIComponent('S&P500')
    newsApi.getMainStockList(item_name).then((value) => {
      const mappedList = value.data.map((item: StockItem) => ({
        id: item.Symbol,
        label: item.Name
      }));

      setStockList([...stockList, ...mappedList]);
    })
  }, []);

  return (
    <InvestmentSection>
      <Typography variant="h4" component="h1" sx={{ p: "2rem", fontWeight: 'bold' }}>
        Investment
      </Typography>
      <Autocomplete
        multiple
        options={stockList}
        value={stockList.filter((option) => selectedItems.includes(option.id))}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select stocks"
            variant="outlined"
            placeholder="Select items (max 2)"
            sx={{
              width: "100%",
              maxWidth: "600px",
              borderRadius: 1,
            }}
          />
        )}
        limitTags={2}
      />
      <br />
      {selectedItems.length === 2 && (
        <Box sx={{ position: "relative" }}>
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
              }}
            >
              <CircularProgress />
            </Box>
          )}
          <img
            src={`${API_URL}/api/adjusted_close_graph?item_code_list=${selectedItems.join(
              ","
            )}`}
            alt="Preview image"
            style={{ width: "100%", maxWidth: "600px" }}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </Box>
      )}
    </InvestmentSection>
  );
};

export default Investment;
