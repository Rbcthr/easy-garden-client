import React from "react";
import NavBar from "../component/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../component/Footer";
import LoadingState from "../component/LoadingState";


const MainLayout = () => {
  const {state} = useNavigation();
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
          {
            state == "loading" ? <LoadingState></LoadingState> : <Outlet></Outlet>
          }
          
        </div>
      </main>

      <footer className="mt-16">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
