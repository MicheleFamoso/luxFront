import { useNavigate, useLocation } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className=" py-2 flex  backdrop-blur-xs  bg-panna/90 justify-around md:justify-center  fixed top-0 right-0 left-0   ">
      <div className=" bg-panna-medium/50 rounded-4xl p-2  backdrop-blur-sm">
        <button
          onClick={() => {
            navigate("/admin");
          }}
          className={` font-kosugi cursor-pointer py-1 px-4 rounded-2xl  hover:bg-gray-light hover:text-white text-gray-extraBold ${
            location.pathname === "/admin" ? "bg-gray-mediumBold/50" : ""
          }  `}
        >
          Post
        </button>
        <button
          onClick={() => {
            navigate("/admin/mostre");
          }}
          className={`font-kosugi cursor-pointer mx-2 py-1 px-4 rounded-2xl hover:bg-gray-light hover:text-white text-gray-extraBold ${
            location.pathname === "/admin/mostre" ? "bg-gray-mediumBold/50" : ""
          } `}
        >
          Mostre
        </button>
        <button
          onClick={() => {
            navigate("/admin/bio");
          }}
          className={`font-kosugi cursor-pointer py-1 px-4 rounded-2xl hover:bg-gray-light hover:text-white text-gray-extraBold ${
            location.pathname === "/admin/bio" ? "bg-gray-mediumBold/50" : ""
          }`}
        >
          Bio
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
