import { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Loading from "./Loading";
const AwardsLux = () => {
  const [mostre, setMostre] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const handleMostre = async () => {
    try {
      const res = await fetch(
        "https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/mostre"
      );
      if (!res.ok) throw new Error("Errore nel caricamento delle mostre");
      const data = await res.json();
      setMostre(data);
      setIsloading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMostre();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-8/12 md:m-auto static">
      <h1 className="text-5xl md:text-6xl font-bold font-kosugi px-6 md:px-0   text-gray-medium mb-12 ">
        Awards/Show
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {mostre.map((mostra, index) => (
            <div key={mostra.id} className=" my-8">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-8 gap-0 px-6 md:px-0">
                <div className="font-kosugi md:mb-0  mb-4">
                  <h2 className="md:text-4xl text-2xl text-gray-extraBold font-bold">
                    {mostra.titolo}
                  </h2>
                  <p className="md:text-2xl text-lg font-semibold text-gray-mediumBold">
                    {mostra.luogo}
                  </p>
                </div>{" "}
                <div className="md:col-span-2 font-kosugi">
                  <p className="md:text-3xl text-xl font-semibold  text-gray-medium ">
                    {mostra.descrizione}
                  </p>
                  <p className=" text-gray-mediumBold text-end md:mb-2">
                    {mostra.data}
                  </p>
                </div>
              </div>
              {index !== mostre.length - 1 && (
                <hr className=" mx-2 md:mx-0 m-2 md:m-6 text-gray-light" />
              )}
            </div>
          ))}
          <div className="flex justify-center ">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUpCircleIcon className="w-10 text-gray-bold hover:text-gray-extraBold  cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AwardsLux;
