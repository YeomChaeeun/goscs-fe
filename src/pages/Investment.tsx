import React, { useState } from 'react';
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {API_URL} from "../services";

const InvestmentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  color: "white",
}));

// 선택 가능한 옵션들
const options = [
  { label: 'QQQ', id: 'QQQ' },
  { label: 'SPY', id: 'SPY' },
  { label: 'Apple', id: 'AAPL' },
  { label: 'NVIDIA', id: 'NVDA' },
  { label: 'Alphabet A', id: 'GOOGL' },
  { label: 'Tesla', id: 'TSLA' },
  { label: 'ASML', id: 'ASML' },
  { label: 'Intel', id: 'INTC' },
];

const Investment = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['QQQ', 'SPY']);

  const handleChange = (event: any, newValue: any) => {
    if (newValue.length <= 2) {
      setSelectedItems(newValue.map((item: any) => item.id));
    }
  };

  return (
    <InvestmentSection>
      <Autocomplete
        multiple
        options={options}
        value={options.filter(option => selectedItems.includes(option.id))}
        onChange={handleChange}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select 종목"
            variant="outlined"
            placeholder="Select items (max 2)"
            sx={{
              width: '100%',
              maxWidth: '600px',
              borderRadius: 1,
            }}
          />
        )}
        limitTags={2}
      />
      <br />
      {selectedItems.length === 2 &&
        <img
          src={`${API_URL}/api/adjusted_close_graph?item_code_list=${selectedItems.join(',')}`}
          alt="Preview image"
          style={{width: '100%', maxWidth: '600px',}}
        />
      }
    </InvestmentSection>
  );
};

export default Investment;