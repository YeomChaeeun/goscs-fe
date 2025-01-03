import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Checklist from "./pages/Checklist.tsx";
import StockDetails from "./pages/Stock_Details.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/checklist"} element={<Checklist />} />
        <Route path="/details/:id" Component={StockDetails} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
