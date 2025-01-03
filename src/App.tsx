import React from "react";
import Questionnaire from "./components/Questionnaire";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path={'/'} element={<Home />} />
            <Route path={'/checklist'} element={<Questionnaire />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
