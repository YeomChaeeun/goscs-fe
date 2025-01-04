import StockDetails from "./pages/StockDetails.tsx";
import DefaultLayout from "./components/DefaultLayout.tsx";
import { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetAllocation from "./pages/AssetAllocation.tsx";
import Checklist from "./pages/Checklist.tsx";
import Home from "./pages/Home.tsx";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#c53b2f",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#0f151b",
      paper: "#142029",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "rgba(234,233,233,0.6)",
      disabled: "rgba(232,232,232,0.38)",
      // hint: '#dd4d3a',
    },
    divider: "rgba(148,146,146,0.12)",
  },
};

const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <DefaultLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/checklist"} element={<Checklist />} />
            <Route path={"/stockdetail/:id"} element={<StockDetails />} />
            <Route path={"/asset-allocation"} element={<AssetAllocation />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
