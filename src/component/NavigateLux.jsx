import { useNavigate } from "react-router-dom";

const Navigatelux = () => {
      const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-15.5 mt-16">
      <button className="font-kosugi text-4xl font-bold text-gray-light hover:text-gray-bold cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120">
        Work
      </button>
      <button
      onClick={()=>navigate("/about")}
      className="font-kosugi text-4xl font-bold text-gray-light hover:text-gray-bold cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:scale-120">
        About
      </button>
    </div>
  );
};
export default Navigatelux;
