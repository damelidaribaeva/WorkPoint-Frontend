import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coworkings from "./pages/Coworkings";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyBookings from "./pages/MyBookings";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coworkings" element={<Coworkings />} />
        <Route path="/coworkings/:type" element={<Coworkings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/booking/:cowId" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
