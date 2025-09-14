import { useState, useEffect } from "react";

const AdminMostre = () => {
  const [mostre, setMostre] = useState([]);
  const token = localStorage.getItem("token");
  const [isLogin, setisLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleMostre = async () => {
    try {
      const response = await fetch("http://localhost:8080/mostre", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nel caricamento delle mostre");
      }
      const data = await response.json();
      setMostre(data);
      setisLogin(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(mostre);
  useEffect(() => {
    handleMostre();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div className="ml-6">
 {isLogin ? (
        <p>Caricamento in corso...</p>
      ) : (
        <div>
          <div className="flex justify-between mr-6 ">
             <h1 className="text-6xl">Mostre</h1>
             <button className="text-5xl bg-violet-300 rounded-2xl px-3 flex hover:bg-lime-500">+</button>
          </div>
            {mostre.length === 0 ? (
              <div className="mt-4">
                 <p>Premi il tasto <span className=" font-bold bg-violet-300 rounded-md text-xl  px-1"> +</span> per aggiungere una mostra.</p>
              </div>
             
            ) :  <div className="mt-10 grid grid-cols-1">
            {mostre.map((mostra) => {
              return (
                <div className="mb-5 mr-6 "key={mostra.id} >
                  <div className="bg-violet-200 py-5 px-4 rounded-3xl">
                    <div className="flex justify-between"  >
                      <h1 className="font-bold text-2xl text-violet-900">{mostra.titolo}</h1>
                      <p className="text-violet-800">{mostra.data}</p>
                    </div>
                    <p className="text-violet-800">{mostra.luogo}</p>
                    <p className="mt-2 text-xl">{mostra.descrizione}</p>
                      <div className="flex justify-end gap-3 mt-6">
                        <button className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-amber-400">Modifica</button>
                        <button className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-red-400">Elimina</button>
                      </div>
                  </div>
                
                </div>
              );
            })}
          </div>
            }

         
        </div>
      )}

      </div>
     
    </div>
  );
};
export default AdminMostre;
