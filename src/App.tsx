import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Checklist from "./pages/Checklist.tsx";
import StockDetails from "./pages/Stock_Details.tsx";
import AssetAllocation from "./pages/AssetAllocation.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/details/:id" element={<StockDetails />} />
        <Route path="/asset-allocation/:id" element={<AssetAllocation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
