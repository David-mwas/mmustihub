import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Hero from "../components/HomePage/Hero";

function HomePage() {
  const [showSideBar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSideBar={showSideBar} />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
