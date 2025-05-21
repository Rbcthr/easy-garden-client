import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";


const MainLayout = () => {
  return (
    <div>
      <header>
        {/* nav bar */}
        <div className=" bg-base-100 shadow-sm">
          <NavBar></NavBar>
        </div>

      </header>

      <main>
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      </main>

      <footer className="mt-16">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
