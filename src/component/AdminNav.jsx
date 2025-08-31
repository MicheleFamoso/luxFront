import { useNavigate, useLocation } from "react-router-dom";

const AdminNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className="bg-purple-400  py-2 flex justify-around md:justify-start  ">
        <div className="md:w-6/12 md:m-auto">
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
