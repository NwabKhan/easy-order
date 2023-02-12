import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/Navbar";
import ContactUs from "./components/otherpages/ContactUs";
import Services from "./components/otherpages/Services";
import AboutUs from "./components/otherpages/AboutUs";
import MyForm from "./components/otherpages/MyForm";
import Help from "./components/otherpages/Help";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="contact us" element={<ContactUs />} />
        <Route exact path="services" element={<Services />} />
        <Route exact path="about" element={<AboutUs />} />
        <Route exact path="form" element={<MyForm />} />
        <Route exact path="help" element={<Help />} />
        <Route exact path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
