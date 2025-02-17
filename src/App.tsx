import StockDetails from "./pages/StockDetails.tsx";
import DefaultLayout from "./components/DefaultLayout.tsx";
import { ThemeOptions } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetAllocation from "./pages/AssetAllocation.tsx";
import Checklist from "./pages/Checklist.tsx";
import Home from "./pages/Home.tsx";
import "./styles/global.css";
import ChecklistResult from "./pages/ChecklistResult.tsx";
import Investment from "./pages/Investment.tsx";
import Footer from "./components/Footer.tsx";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      'Exo',
      '-apple-system',
    ].join(','),
  },
  palette: {
    mode: "dark",
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
    },
    divider: 'rgba(80,76,76,0.4)',
  },
};

export const theme = createTheme(themeOptions);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <DefaultLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/checklist"} element={<Checklist />} />
            <Route path={"/checklist/result"} element={<ChecklistResult />} />
            <Route path={"/stockdetail/:id"} element={<StockDetails />} />
            <Route path={"/asset-allocation"} element={<AssetAllocation />} />
            <Route path={"/investment"} element={<Investment />} />
          </Routes>
        </DefaultLayout>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
