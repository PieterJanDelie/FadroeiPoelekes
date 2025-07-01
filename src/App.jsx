import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Tournaments from "./pages/Tournaments/Tournaments";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
  
}

export default App;
