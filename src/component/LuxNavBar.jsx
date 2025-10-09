import { useNavigate,useLocation } from "react-router-dom";

const LuxNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/"

  return (
    <div className="text-center mb-6">
      <button
        onClick={() => navigate("/")}
        className={`cursor-pointer font-jacquard transition-all duration-500 ease-in-out text-gray-extraBold
          ${isHome ? "text-5xl md:text-9xl mt-8 mb-16" : "text-5xl md:text-8xl mt-4"}
          
        `}
      >
             {isHome ? "Luciano Famoso" : "L F"}
       
      </button>
    </div>
  );
};

export default LuxNavBar;
