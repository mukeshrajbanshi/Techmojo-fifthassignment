import "./App.css";
import React from "react";
import FilterCard from "./components/FilterCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import NoMatch from "./components/NoMatch";
import CardDetails from "./components/CardDetails";
import NavbarHeader from "./components/NavbarHeader";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<FilterCard />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/cardDetails" element={<CardDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
