import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <>Not found</>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
  
}

export default App;
