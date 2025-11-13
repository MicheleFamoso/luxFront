const IntrLux = () => {
  return (
    <div className="flex justify-center ">
      <div className="bg-hero bg-cover bg-center  rounded-4xl shadow-lg transition-all duration-500 ease-in-out  md:h-80 h-70 w-80 md:w-150 pt-10">
        <div className="flex justify-center  md:items-center ">
          <img
            className="object-cover rounded-full 
              md:w-30 w-20 opacity-80 "
            src="/img-profile.jpg"
            alt="img-profile"
          />
        </div>
        <div
          className="text-center   font-kosugi 
             md:text-4xl text-3xl mt-6"
        >
          <p className="text-gray-medium font-black">VISUAL ARTIST</p>
          <p className="text-gray-bold text-3xl mt-1 ">Naples</p>
        </div>
      </div>
    </div>
  );
};

export default IntrLux;
