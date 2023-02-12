import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/Navbar";
import Contact from "./components/otherpages/Contact";
import Services from "./components/otherpages/Services";
import AboutUs from "./components/otherpages/AboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="about" element={<AboutUs />} />
        <Route exact path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
