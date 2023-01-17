import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";

// styles
import "./styles/Layout.scss";
import "./styles/App.scss";

// components
import Menu from "./components/molecules/Menu";
import Header from "./components/molecules/Header";
import LandingPage from "./pages/LandingPage";
import Activities from "./pages/Activities";
import Competencies from "./pages/Competencies";
import Guide from "./pages/Guide";
import Organization from "./pages/Organisation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="col-10">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/competencies" element={<Competencies />} />
            <Route path="/organization" element={<Organization />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/*<BrowserRouter>
        <div className="col-12">
          <Routes>
            <Route path="/auth" element={<></>} />
            <Route path="/auth/join" element={<></>} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>*/}
    </>
  );
}

export default App;
