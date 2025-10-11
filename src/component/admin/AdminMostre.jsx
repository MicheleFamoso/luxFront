import { useState, useEffect } from "react";
import {
     CheckIcon,
     PlusIcon
     
  
} from "@heroicons/react/16/solid";
import InfoItem from "./InfoItem";

const AdminMostre = () => {
  const [mostre, setMostre] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const token = localStorage.getItem("token");

  // Fetch mostre
  const handleMostre = async () => {
    try {
      const res = await fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/mostre", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Errore nel caricamento delle mostre");
      const data = await res.json();
      setMostre(data);
      setIsLogin(false);
    } catch (err) {
      console.log(err);
    }
  };

  // Create / Update
  const handleMostraSave = async () => {
    try {
      const method = selectedItem.id ? "PUT" : "POST";
      const url = selectedItem.id
        ? `https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/mostre/${selectedItem.id}`
        : "https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/mostre";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(selectedItem),
      });
      if (!res.ok) throw new Error("Errore nel salvataggio della mostra");
      setSelectedItem(null);
      setShowModal(false);
      handleMostre();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete
  const handleMostraDelete = async () => {
    try {
      const res = await fetch(`https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/mostre/${selectedItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Errore nell'eliminazione della mostra");
      setSelectedItem(null);
      setShowModalDelete(false);
      handleMostre();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMostre();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-2 md:mt-6 md:w-8/12 md:m-auto static">
      {isLogin ? (
        <p className="font-kosugi text-2xl text-gray-extraBold">Caricamento in corso...</p>
      ) : (
        <div>
          {/* Header */}
          <div className={showModal ? "hidden" : "flex px-6 md:px-0 "}>
            <h1 className="text-6xl font-kosugi text-gray-extraBold font-bold flex-1 ">Mostre</h1>
            <button
              onClick={() => {
                setSelectedItem({ titolo: "", luogo: "", data: "", descrizione: "" });
                setShowModal(true);
              }}
              className="text-5xl shadow-md cursor-pointer  bg-gray-mediumBold/70 text-gray-bold hover:text-gray-extraBold rounded-full hover:bg-gray-mediumBold"
            >
                <PlusIcon className="w-15 p-3" />
            </button>
          </div>

          {/* Lista mostre */}
          {mostre.length === 0 ? (
            <div className={showModal ? "hidden" : "mt-5 ml-3"}>
              <p className="text-xl font-kosugi text-gray-bold">
                Premi il tasto{" "}
                <span className="font-bold bg-gray-mediumBold/70 rounded-full py-1 text-2xl ">&nbsp;+&nbsp;</span>
                 &nbsp;per aggiungere una mostra.
              </p>
            </div>
          ) : (
            <div className={showModal ? "hidden" : "mt-10 grid grid-cols-1 gap-4"}>
              {mostre.map((mostra) => (
                <InfoItem
                  key={mostra.id}
                  mostra={mostra}
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setShowModalDelete={setShowModalDelete}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal Aggiungi / Modifica */}
      {showModal && selectedItem && (
        <div className="p-5 md:p-0"> 
      
        
           
          
          
          <form
            onSubmit={(e) => {  
              e.preventDefault();
              handleMostraSave();    
            }}
            className=" "
          >
             <p className="font-bold mb-3 md:mb-10 text-5xl text-gray-extraBold font-kosugi  ">{selectedItem.titolo === "" ? 
              ("Aggiungi mostra"):("Modifica mostra")}</p>
            <div className="flex md:gap-10 gap-2  flex-col md:flex-row ">
              <label htmlFor="titolo" className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-60">
                Titolo
              </label>
              <input
                id="titolo"
                className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                value={selectedItem.titolo}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, titolo: e.target.value })
                }
              />
            </div>

            <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
              <label htmlFor="luogo" className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-60">
                Luogo
              </label>
              <input
                id="luogo"
                className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                
                value={selectedItem.luogo}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, luogo: e.target.value })
                }
              />
            </div>

            <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
              <label htmlFor="data" className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-60">
                Data
              </label>
              <input
                id="data"
                type="date"
              
                className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 px-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"

                value={selectedItem.data}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, data: e.target.value })
                }
              />
            </div>

            <div className="flex md:gap-10 gap-2  flex-col md:flex-row  mt-6">
              <label htmlFor="descrizione" className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-60">
                Descrizione
              </label>
              <textarea
                id="descrizione"
               
                className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"

                value={selectedItem.descrizione}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, descrizione: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end mt-12 gap-2">
                 <button onClick={() => setShowModal(false)}
                  className="cursor-pointer bg-panna-medium font-kosugi text-gray-bold hover:text-gray-50  px-6 py-3 rounded-3xl hover:bg-red-400/80">
              Annulla
            </button>
              <button
                type="submit"
                      className="cursor-pointer bg-panna-medium  text-gray-bold  p-3 rounded-full  hover:bg-lime-300/60"

                
              >
                <CheckIcon className="size-7"></CheckIcon>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Modal Delete */}
      {showModalDelete && selectedItem && (
        <div className="fixed inset-0 bg-black/30  backdrop-blur-xs  bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-panna-medium shadow-2xl px-8 py-6 rounded-3xl mx-4">
            <h2 className="text-2xl font-bold mb-4 font-kosugi text-gray-extraBold">Conferma eliminazione</h2>
            <p className="mb-4 text-xl font-kosugi text-gray-bold">
              Sei sicuro di voler eliminare
              <span className="font-bold text-gray-extraBold"> {selectedItem.titolo} </span>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModalDelete(false)}
                className="py-3 px-6 rounded-3xl shadow-md cursor-pointer font-kosugi  bg-gray-mediumBold/30 text-gray-extraBold hover:text-white    hover:bg-gray-mediumBold"
              >
                Annulla
              </button>
              <button
                onClick={handleMostraDelete}
                className="py-3 px-6 rounded-3xl shadow-md cursor-pointer font-kosugi  bg-gray-mediumBold/30 text-gray-extraBold hover:text-white     hover:bg-red-400/80"
              >
                Elimina
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMostre;

