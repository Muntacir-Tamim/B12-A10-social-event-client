import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
