import { useState, useEffect } from "react";
import IntrLux from "./IntrLux";
const AboutLux = () => {
  const [bios, setBios] = useState([]);

  const handleBio = async () => {
    try {
      const response = await fetch("http://localhost:8080/bio", {});

      if (!response.ok) {
        throw new Error("errore nel caricamento");
      }
      const data = await response.json();
      setBios(data);
    } catch (error) {
      console.error("errore", error);
    }
  };
  useEffect(() => {
    handleBio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div>
        <div  >
            < IntrLux />
        </div>
      
        {bios.map((bio) => (

          <div key={bio.id} className="grid grid-cols-2 mt-8 ">
            <div>
              {" "}
              <h3 className="font-kosugi font-extrabold  text-3xl  text-gray-bold">
                VISUAL ARTIST | NAPOLI
              </h3>
              <p className="mt-2 text-4xl font-reenie mb-3 text-gray-extraBold">{bio.bio}</p>
              <p className="font-kosugi text-xl text-gray-bold font-bold">  {bio.email}</p>
              

            </div>
            <div className="ml-30">
              <h3 className="font-kosugi font-extrabold  text-2xl  text-gray-extraBold">SERVICES</h3>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutLux;
