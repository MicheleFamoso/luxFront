import { useNavigate } from "react-router-dom";

const Navigatelux = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center md:gap-15.5 gap-3 md:mt-16 mt-10 mb-35 3xl:mb-150">
        <button
          onClick={() => {
            const el = document.getElementById("work-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="font-kosugi text-5xl font-extrabold text-gray-light hover:text-gray-bold cursor-pointer md:transition md:delay-150 md:duration-300 md:ease-in-out md:hover:-translate-y-2 md:hover:scale-120"
        >
          Work
        </button>
        <button
          onClick={() => navigate("/awards")}
          className="font-kosugi text-5xl font-extrabold text-gray-light hover:text-gray-bold cursor-pointer md:transition md:delay-150 md:duration-300 md:ease-in-out md:hover:-translate-y-2 md:hover:scale-120"
        >
          Awards/Shows
        </button>
        <button
          onClick={() => navigate("/about")}
          className="font-kosugi text-5xl font-extrabold text-gray-light hover:text-gray-bold cursor-pointer md:transition md:delay-150 md:duration-300 md:ease-in-out md:hover:-translate-y-2 md:hover:scale-120"
        >
          About
        </button>
      </div>
    </div>
  );
};
export default Navigatelux;
