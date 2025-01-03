import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Checklist from "./pages/Checklist.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/checklist"} element={<Checklist />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
