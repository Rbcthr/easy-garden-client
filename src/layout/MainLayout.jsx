import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router";
import Footer from "../component/Footer";


const MainLayout = () => {
  return (
    <div>
      <header>
        <div className=" bg-base-100 shadow-sm">
          <NavBar></NavBar>
        </div>
      </header>

      <main>
        <div className="w-11/12 mx-auto my-16 min-h-screen">
          <Outlet></Outlet>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
