import { useState, useEffect } from "react";
import Loading from "./Loading";

const AboutLux = () => {
  const [bios, setBios] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const handleBio = async () => {
    try {
      const response = await fetch(
        "https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/bio"
      );

      if (!response.ok) {
        throw new Error("errore nel caricamento");
      }
      const data = await response.json();
      setBios(data);
      setIsloading(false);
    } catch (error) {
      console.error("errore", error);
    }
  };
  useEffect(() => {
    handleBio();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-8/12 md:m-auto static px-3 md:px-0">
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            {bios.map((bio) => (
              <div key={bio.id}>
                <div className="px-4 md:px-0">
                  <h2 className="mt-8 md:text-6xl text-4xl font-kosugi">
                    LUCIANO FAMOSO
                  </h2>
                  <h3 className="font-kosugi font-extrabold  text-2xl  text-gray-bold">
                    VISUAL ARTIST
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 mt-6 ">
                  <div className="px-4 md:px-0 md:col-span-2">
                    {" "}
                    <p className="mt-2 font-light text-2xl md:text-3xl font-reenie md:mb-16 mb-6 text-gray-extraBold">
                      {bio.bio}
                    </p>
                    <div className="md:mt-6">
                      <a
                        href={`mailto:${bio.email}`}
                        className="font-kosugi md:text-3xl text-xl text-gray-bold font-bold"
                      >
                        {" "}
                        {bio.email}
                      </a>
                    </div>
                    <div className="md:mt-3">
                      <a
                        href="https://is.gd/luxfamososhop"
                        className="font-kosugi md:text-3xl text-xl text-gray-bold font-bold"
                      >
                        Lux Shop
                      </a>
                    </div>
                  </div>
                  <div className="md:ml-30 px-4 md:px-0 mt-10 md:mt-0 ">
                    <h3 className="font-kosugi font-extrabold  md:text-4xl text-2xl  text-gray-extraBold">
                      SERVICES
                    </h3>
                    <ul>
                      <li className="font-kosugi font-bold md:text-2xl text-xl text-gray-bold mb-1">
                        Opere su commissione
                      </li>
                      <li className="font-kosugi font-bold  md:text-2xl text-xl text-gray-bold mb-1">
                        <a href="https://is.gd/luxfamososhop">
                          Vendita opere e stampe
                        </a>
                      </li>
                      <li className="font-kosugi font-bold  md:text-2xl text-xl text-gray-bold mb-1">
                        Collaborazioni creative
                      </li>
                      <li className="font-kosugi font-bold  md:text-2xl text-xl text-gray-bold mb-1">
                        Mostre e installazioni
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AboutLux;
