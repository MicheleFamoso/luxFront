import { useState, useEffect } from "react";

const AboutLux = () => {
  const [bios, setBios] = useState([]);

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
    } catch (error) {
      console.error("errore", error);
    }
  };
  useEffect(() => {
    handleBio();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-8/12 md:m-auto static">
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
                <p className="mt-2 text-4xl font-reenie mb-2 text-gray-extraBold">
                  {bio.bio}
                </p>
                <a
                  href={`mailto:${bio.email}`}
                  className="font-kosugi text-xl text-gray-bold font-bold"
                >
                  {" "}
                  {bio.email}
                </a>
                <a
                  href="https://is.gd/luxfamososhop"
                  className="font-kosugi text-xl text-gray-bold font-bold"
                >
                  Shop
                </a>
              </div>
              <div className="md:ml-30 px-4 md:px-0 mt-10 md:mt-0 ">
                <h3 className="font-kosugi font-extrabold  text-2xl  text-gray-extraBold">
                  SERVICES
                </h3>
                <ul>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">
                    Opere su Commissione
                  </li>
                  <li
                    href="https://is.gd/luxfamososhop"
                    className="font-kosugi font-bold text-gray-bold mb-1"
                  >
                    Vendita Opere e Stampe
                  </li>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">
                    Collaborazioni Creative
                  </li>
                  <li className="font-kosugi font-bold text-gray-bold mb-1">
                    Mostre e Installazioni
                  </li>
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
