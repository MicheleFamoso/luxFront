import { useNavigate, useLocation } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="bg-violet-300  py-3 flex justify-around md:justify-center  fixed top-0 right-0 left-0   ">
        <div className="">
               <button
        onClick={() => {
          navigate("/admin");
        }}
        className={`md:mr-6  py-1 px-4 rounded-2xl hover:bg-purple-600 hover:text-white ${
          location.pathname === "/admin" ? "bg-lime-300 " : ""
        }  `}
      >
        Post
      </button>
      <button
        onClick={() => {
          navigate("/admin/mostre");
        }}
        className={`md:mr-6   py-1 px-4 rounded-2xl  hover:bg-purple-600 hover:text-white ${
          location.pathname === "/admin/mostre"
            ? "bg-lime-300"
            : ""
        } `}
      >
        Mostre
      </button>
      <button
        onClick={() => {
          navigate("/admin/bio");
        }}
        className={`  py-1 px-4 rounded-2xl   hover:bg-purple-600 hover:text-white ${
          location.pathname === "/admin/bio" ? "bg-lime-300" : ""
        }`}
      >
        Bio
      </button>
        </div>
   
    </nav>
  );
};

export default AdminNav;
