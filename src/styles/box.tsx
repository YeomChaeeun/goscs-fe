import Box, { BoxProps } from "@mui/material/Box";
import styled from "styled-components";

export function Item(props: BoxProps) {
  const { ...other } = props;
  return (
    <Box
      sx={[
        {
          padding: "10px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      ]}
      {...other}
    />
  );
}

export const Li = styled.li`
  font-size: 20px;
  margin-left: 20px;
  margin-top: 30px;
`;
