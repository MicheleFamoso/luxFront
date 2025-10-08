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
        <div>
          <IntrLux />
        </div>

        {bios.map((bio) => (
          <div key={bio.id} >
            <div className="px-4 md:px-0">
               <h2 className="mt-8 md:text-6xl text-4xl font-kosugi">LUCIANO FAMOSO</h2>
            <h3 className="font-kosugi font-extrabold  text-2xl  text-gray-bold">
              VISUAL ARTIST 
            </h3>
            </div>
           
            <div className="grid md:grid-cols-2 grid-cols-1 mt-6 ">
              <div className="px-4 md:px-0">
                {" "}
                <p className="mt-2 text-4xl font-reenie mb-2 text-gray-extraBold">
                  {bio.bio}
                </p>
                <p className="font-kosugi text-xl text-gray-bold font-bold">
                  {" "}
                  {bio.email}
                </p>
              </div>
              <div className="md:ml-30 px-4 md:px-0 mt-10 md:mt-0 ">
                <h3 className="font-kosugi font-extrabold  text-2xl  text-gray-extraBold">
                  SERVICES
                </h3>
                <ul>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">Opere su Commissione</li>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">Vendita Opere e Stampe</li>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">Collaborazioni Creative</li>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">Mostre e Installazioni</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutLux;
