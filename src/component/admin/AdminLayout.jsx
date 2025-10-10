import { Outlet } from "react-router-dom";
import AdminNav from "./AdminNav";

const AdminLayout = () => {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen bg-panna  ">
      <header className=" ">
        <AdminNav/>
      </header>
      <main className="pt-15 md:pt-10">
        <Outlet />
      </main>
      <footer className="text-center  mb-4 ">
        <p className=" py-2 px-10 font-kosugi text-gray-bold ">Sviluppato da <span className="font-bold text-gray-extraBold"> Michele Famoso</span></p>
      </footer>
    </div>
  );
};

export default AdminLayout;
