import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Works from "./components/pages/works.jsx";
import PageLayout from "./components/reusable-components/PageLayout.jsx";
import "./components/styles/globals.css";

const App = () => {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageLayout>
    </Router>
  );
};

export default App;