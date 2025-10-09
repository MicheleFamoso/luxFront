import { useLocation } from "react-router-dom";

const IntrLux = () => {
 const location = useLocation();
  const isHome = location.pathname === "/"

  return (
    <div className="flex justify-center ">
       <div className={`bg-hero bg-cover bg-center  rounded-4xl shadow-xl transition-all duration-500 ease-in-out  ${isHome?"md:h-80 h-70 w-80 md:w-100 pt-10":"md:h-46 h-40 w-80 pt-4" } `}>
      <div className="flex justify-center  md:items-center ">
        <img
          className={` object-cover rounded-full shadow-2xl${isHome? "md:w-40 w-24":"md:20 w-15"}`} 
          src="/public/img-profile.jpg"
          alt="img-profile"
        />
      </div>
      <div className={`text-center   font-kosugi font-extrabold ${isHome?"md:text-4xl text-2xl mt-13":"md:text-2xl mt-4"} `} >
        <p className="text-gray-medium">VISUAL ARTIST</p>
        <p className="text-gray-bold mt-2 ">NAPOLI</p>
      </div>
    </div>
    </div>
   
  );
};

export default IntrLux;
