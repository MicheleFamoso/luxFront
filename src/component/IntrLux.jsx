const IntrLux = () => {
  return (
    <div className="flex justify-center ">
      <div className="bg-hero bg-cover bg-center  rounded-4xl shadow-xl transition-all duration-500 ease-in-out  md:h-80 h-70 w-80 md:w-150 pt-10">
        <div className="flex justify-center  md:items-center ">
          <img
            className="object-cover rounded-full shadow-2xl
              md:w-30 w-24"
            src="https://i.postimg.cc/2j9dN7W6/img-profile.jpg"
            alt="img-profile"
          />
        </div>
        <div
          className="text-center   font-kosugi font-extrabold 
             md:text-4xl text-2xl mt-8"
        >
          <p className="text-gray-medium">VISUAL ARTIST</p>
          <p className="text-gray-bold mt-2 ">NAPOLI</p>
        </div>
      </div>
    </div>
  );
};

export default IntrLux;
