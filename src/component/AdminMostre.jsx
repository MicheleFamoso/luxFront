import { useState, useEffect } from "react";

const AdminMostre = () => {
  const [mostre, setMostre] = useState([]);
  const token = localStorage.getItem("token");
  const [isLogin, setisLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [titolo, setTitolo] = useState("");
  const [luogo, setLuogo] = useState("");
  const [data, setData] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [id, setId] = useState("");
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [titoloMostra, setTitoloMostra] = useState("");

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

  const handleMostra = async () => {
    try {
      const response = await fetch("http://localhost:8080/mostre", {
        method: "POST",
        body: JSON.stringify({ titolo, luogo, data, descrizione }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nell'aggiunta della mostra");
      }
      handleMostre();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMostraDelete = async () => {
    try {
      const response = await fetch("http://localhost:8080/mostre/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nell'eliminazione della mostra");
      }
      handleMostre();
    } catch (error) {
      console.log(error);
    }
  };

  const handleMostraUpdate = async () => {
    try {
      const response = await fetch("http://localhost:8080/mostre/" + id, {
        method: "PUT",
        body: JSON.stringify({ titolo, luogo, data, descrizione }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nella modifica della mostra");
      }
      handleMostre();
    } catch (err) {
      console.log(err);
    }
  };

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
            <div
              className={showModal ? "hidden " : "flex justify-between mr-6 "}
            >
              <h1 className="text-6xl">Mostre</h1>
              <button
                onClick={() => setShowModal(true)}
                className="text-5xl  bg-violet-300 rounded-2xl px-4 pt-1 flex hover:bg-lime-500 "
              >
                +
              </button>
            </div>
            {mostre.length === 0 ? (
              <div className={showModal ? "hidden" : "mt-5 ml-3 "}>
                <p>
                  Premi il tasto{" "}
                  <span className=" font-bold bg-violet-300 rounded-md text-xl  px-1">
                    {" "}
                    +
                  </span>{" "}
                  per aggiungere una mostra.
                </p>
              </div>
            ) : (
              <div className={showModal ? "hidden" : "mt-10 grid grid-cols-1"}>
                {mostre.map((mostra) => {
                  return (
                    <div className="mb-5 mr-6 " key={mostra.id}>
                      <div className="bg-violet-200 py-5 px-4 rounded-3xl">
                        <div className="flex justify-between">
                          <h1 className="font-bold text-2xl text-violet-900">
                            {mostra.titolo}
                          </h1>
                          <p className="text-violet-800">{mostra.data}</p>
                        </div>
                        <p className="text-violet-800">{mostra.luogo}</p>
                        <p className="mt-2 text-xl">{mostra.descrizione}</p>
                        <div className="flex justify-end gap-3 mt-6">
                          <button
                            onClick={() => {
                              setId(mostra.id);
                              setTitolo(mostra.titolo);
                              setLuogo(mostra.luogo);
                              setData(mostra.data);
                             setDescrizione(mostra.descrizione);
                              setShowModal(true);
                            }}
                            className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-amber-400"
                          >
                            Modifica
                          </button>
                          <button
                            onClick={() => {
                              setId(mostra.id);
                              setTitoloMostra(mostra.titolo);
                              setShowModalDelete(true);
                            }}
                            className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-red-400"
                          >
                            Elimina
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {showModal && (
          <div className="p-5">
            <div className="flex justify-between">
              <p className="font-bold text-3xl">Mostra</p>
              <button
                onClick={() =>{
                   setId("");
                              setTitolo("");
                              setLuogo("");
                              setData("");
                             setDescrizione("");
                  setShowModal(false)
                }
                   }
                className="bg-violet-200 hover:bg-red-500 px-4 pt-2 pb-1 rounded-full"
              >
                X
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (id !== "") {
                  handleMostraUpdate();
                } else {
                  handleMostra();
                }
                setId("");
  setTitolo("");
  setLuogo("");
  setData("");
  setDescrizione("");
  setShowModal(false);
              }}
              className="w-fit"
            >
              <div className="flex mt-6   gap-10 ">
                <label htmlFor="titolo" className="w-22  ">
                  Titolo{" "}
                </label>
                <input
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                  type="text"
                  id="titolo"
                  value={titolo}
                  onChange={(e) => setTitolo(e.target.value)}
                />
              </div>
              <div className="flex mt-6 gap-10 ">
                <label htmlFor="luogo" className="w-22">
                  Luogo
                </label>
                <input
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                  type="text"
                  id="luogo"
                  value={luogo}
                  onChange={(e) => setLuogo(e.target.value)}
                />
              </div>
              <div className="flex mt-6 gap-10 ">
                <label htmlFor="data" className="w-22">
                  Data
                </label>
                <input
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                  type="date"
                  id="data"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="flex mt-6 gap-10 ">
                <label htmlFor="descrizione" className="w-22">
                  Descrizione
                </label>

                <textarea
                  className="md:w-100 border rounded-sm border-purple-400  focus:outline-2 focus:outline-purple-400  "
                  name="descrizione"
                  id="descrizione"
                  value={descrizione}
                  onChange={(e) => setDescrizione(e.target.value)}
                ></textarea>
              </div>
              <div className="flex justify-end mt-10 ">
                <button
                  type="submit"
                  className="bg-purple-400 px-4 py-2 rounded-3xl text-white hover:bg-lime-400"
                >
                  Salva
                </button>
              </div>
            </form>
          </div>
        )}
        {showModalDelete && (
          <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-violet-50 px-8 py-6 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">Conferma eliminazione</h2>
              <p className="mb-6">
                Sei sicuro di voler eliminare{" "}
                <span className="font-bold text-violet-950">
                  {titoloMostra}
                </span>{" "}
                ?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    setId("");
                    setTitoloMostra("");
                    setShowModalDelete(false);
                  }}
                  className="bg-violet-200 py-2 px-4 rounded-3xl hover:bg-violet-600 hover:text-white"
                >
                  Annulla
                </button>
                <button
                  onClick={() => {
                    handleMostraDelete();
                    setShowModalDelete(false);
                  }}
                  className="bg-red-200 py-2 px-4 rounded-3xl hover:bg-red-600 hover:text-white"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AdminMostre;
