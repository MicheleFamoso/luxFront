import { Outlet } from "react-router-dom";
import LuxNavBar from "./LuxNavBar";
import WorkLux from "./WorkLux";
import FooterLux from "./FooterLux";
const PublicLayout = () => {
  return (
    <div className="  grid grid-rows-[auto_1fr_auto] min-h-screen bg-panna  ">
      <header className=" ">
        <LuxNavBar />
        <WorkLux />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="">
        <FooterLux />
      </footer>
    </div>
  );
};

export default PublicLayout;
