import { useState, useEffect } from "react";

const AwardsLux = () => {
  const [mostre, setMostre] = useState([]);

  const handleMostre = async () => {
    try {
      const res = await fetch("http://localhost:8080/mostre");
      if (!res.ok) throw new Error("Errore nel caricamento delle mostre");
      const data = await res.json();
      setMostre(data);
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
      {mostre.map((mostra,index) => (
        <div key={mostra.id} className=" mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-0">
            <div className="font-kosugi mb-4 md:mb-0">
              <h2 className="text-4xl text-gray-extraBold">{mostra.titolo}</h2>
              <p className="text-xl text-gray-mediumBold">{mostra.luogo}</p>
            </div>{" "}
            <div className="md:col-span-2 font-kosugi">
              <p className="text-2xl  text-gray-medium ">{mostra.descrizione}</p>
              <p className=" text-gray-mediumBold text-end mt-2">{mostra.data}</p>
            </div>
          </div>
            {index !== mostre.length -1 && (
                <hr className=" mx-2 md:mx-0 m-2 md:m-6 text-gray-light" />
            )}
          
        </div>
      ))}
    </div>
  );
};
export default AwardsLux;
