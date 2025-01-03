import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/global.css'
import Home from "./pages/Home.tsx";
import Checklist from "./pages/Checklist.tsx";
import StockDetails from "./pages/Stock_Details.tsx";
import GuideDetail from "./pages/GuideDetail.tsx";
import DefaultLayout from "./components/DefaultLayout.tsx";

const App = () => {
  return (
    <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/checklist"} element={<Checklist />} />
            <Route path={"/guide/:id"} element={<GuideDetail />} />
            <Route path="/details/:id" Component={StockDetails} />
          </Routes>
        </DefaultLayout>
    </BrowserRouter>
  );
};
export default App;
