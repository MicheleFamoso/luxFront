import { useState, useEffect } from "react";

import {
  TrashIcon,
  PencilIcon,
  XCircleIcon,
  CalendarIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/16/solid";

const AdminHome = () => {
  const [posts, Setposts] = useState([]);
  const token = localStorage.getItem("token");

  const [titolo, setTitolo] = useState("");
  const [primaImmagine, setPrimaImmagine] = useState("");
  const [secondaImmagine, setSecondaImmagine] = useState("");
  const [terzaImmagine, setTerzaImmagine] = useState("");
  const [data, setData] = useState("");
  const [id, setId] = useState("");
  const [dimensione, setDimensione] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [titoloMostra, SetTitoloMostra] = useState("");

  const handlePost = async () => {
    try {
      const response = await fetch("http://localhost:8080/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nel recupero dei post.");
      }
      const data = await response.json();
      Setposts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreatePost = async () => {
    try {
      const response = await fetch("http://localhost:8080/post", {
        method: "POST",
        body: JSON.stringify({
          titolo,
          primaImmagine,
          secondaImmagine,
          terzaImmagine,
          data,
          descrizione,
          dimensione,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nel post");
      }
      await handlePost();
      setShowModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostUpdate = async () => {
    try {
      const response = await fetch("http://localhost:8080/post/" + id, {
        method: "PUT",
        body: JSON.stringify({
          titolo,
          primaImmagine,
          secondaImmagine,
          terzaImmagine,
          data,
          descrizione,
          dimensione,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nella modifica della mostra");
      }
      handlePost();
    } catch (err) {
      console.log(err);
    }
  };

  const deletepost = async () => {
    try {
      const response = await fetch("http://localhost:8080/post/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del post");
      }
      handlePost();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePost();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div className="ml-6">
        <div className={showModal ? "hidden " : ""}>
          <div className="flex justify-between mr-6 ">
            <h1 className="text-6xl">Post</h1>
            <button
              onClick={() => setShowModal(true)}
              className="text-5xl  bg-violet-300 rounded-2xl px-4 pt-1 flex hover:bg-lime-500 "
            >
              +
            </button>
          </div>{" "}
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="mt-10  bg-violet-200 md:py-6 md:px-4 px-2 py-3 rounded-3xl mr-6"
              >
                <div className=" rounded-2xl md:py-4 bg-purple-50 ">
                  <div className="grid grid-cols-3 md:gap-3 gap-1  md:p-4 p-1 rounded-2xl items-center  ">
                    <img
                      src={post.primaImmagine}
                      className="shadow-xl"
                      alt="foto opera 1 "
                    />
                    <img
                      src={post.secondaImmagine}
                      className="shadow-xl"
                      alt="foto opera 2"
                    />
                    <img
                      src={post.terzaImmagine}
                      className="shadow-xl"
                      alt="foto opera 3"
                    />
                  </div>

                  <div className="md:mt-2 py-5 px-4 flex flex-col gap-3   rounded-2xl">
                    <p className="text-center  text-2xl md:text-3xl font-black text-violet-900">
                      {post.titolo}
                    </p>

                    <p className="md:text-2xl text-xl text-center md:text-start">
                      {post.descrizione}
                    </p>
                    <div className="flex justify-between px-3">
                      <div className="flex gap-2">
                        <ArrowsPointingOutIcon className="size-6 text-violet-800"></ArrowsPointingOutIcon>
                        <p className="text-violet-800 font-bold">
                          {" "}
                          {post.dimensione}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <CalendarIcon className="size-6 text-violet-800"></CalendarIcon>
                        <p className="text-violet-800 font-bold">
                          {" "}
                          {post.data}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-end mt-4 ">
                  <button
                    onClick={() => {
                      setId(post.id);
                      setData(post.data);
                      setDescrizione(post.descrizione);
                      setDimensione(post.dimensione);
                      setTitolo(post.titolo);
                      setPrimaImmagine(post.primaImmagine);
                      setSecondaImmagine(post.secondaImmagine);
                      setTerzaImmagine(post.terzaImmagine);
                      setShowModal(true);
                    }}
                    className="bg-violet-300  p-2 rounded-full hover:bg-amber-400"
                  >
                    <PencilIcon className="size-7" />
                  </button>
                  <button
                    onClick={() => {
                      setId(post.id), setDeleteModal(true);
                      SetTitoloMostra(post.titolo);
                    }}
                    className="bg-violet-300 p-2 rounded-full hover:bg-red-400"
                  >
                    <TrashIcon className="size-7 "></TrashIcon>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {showModal && (
          <div className="p-5">
            <div className="flex justify-between">
              <p className="font-bold text-5xl">Post</p>
              <button
                onClick={() => {
                  setId("");
                  setData("");
                  setDescrizione("");
                  setDimensione("");
                  setTitolo("");
                  setPrimaImmagine("");
                  setSecondaImmagine("");
                  setTerzaImmagine("");

                  setShowModal(false);
                }}
              >
                <XCircleIcon className="size-10 text-violet-300 hover:text-red-700"></XCircleIcon>
              </button>
            </div>
            <form
              className="mt-16"
              onSubmit={(e) => {
                e.preventDefault();
                if (id !== "") {
                  handlePostUpdate();
                } else handleCreatePost();
                setId("");
                setData("");
                setDescrizione("");
                setDimensione("");
                setTitolo("");
                setPrimaImmagine("");
                setSecondaImmagine("");
                setTerzaImmagine("");

                setShowModal(false);
              }}
            >
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="titolo" className="w-22">
                  Titolo
                </label>
                <input
                  value={titolo}
                  onChange={(e) => setTitolo(e.target.value)}
                  type="text"
                  id="titolo"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="primaimm" className="w-22">
                  Prima immagine
                </label>
                <input
                  value={primaImmagine}
                  onChange={(e) => setPrimaImmagine(e.target.value)}
                  type="text"
                  id="primaimm"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="secondaImm" className="w-22">
                  Seconda immagine
                </label>
                <input
                  value={secondaImmagine}
                  onChange={(e) => setSecondaImmagine(e.target.value)}
                  type="text"
                  id="secondaImm"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="terzaImm" className="w-22">
                  Terza Immagine
                </label>
                <input
                  value={terzaImmagine}
                  onChange={(e) => setTerzaImmagine(e.target.value)}
                  type="text"
                  id="terzaImm"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="dimensione" className="w-22">
                  Dimensione
                </label>
                <input
                  value={dimensione}
                  onChange={(e) => setDimensione(e.target.value)}
                  type="text"
                  id="dimensione"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="data" className="w-22">
                  Data
                </label>
                <input
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  type="date"
                  id="data"
                  className=" md:w-100 border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"
                />
              </div>
              <div className="flex mt-6 gap-10 md:justify-center">
                <label htmlFor="descrizione" className="w-22">
                  Descrizione
                </label>
                <textarea
                  value={descrizione}
                  onChange={(e) => setDescrizione(e.target.value)}
                  id="descrizione"
                  className="md:w-100 border rounded-sm border-purple-400  focus:outline-2 focus:outline-purple-400  "
                ></textarea>
              </div>
              <div className="flex justify-center mt-10 ">
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
        {deleteModal && (
          <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-violet-50 px-8 py-6 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">Conferma eliminazione</h2>
              <p className="mb-6">
                Sei sicuro di voler eliminare{" "}
                <span className="font-bold">{titoloMostra}</span>
                <span className="font-bold text-violet-950"></span>?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    setId("");
                    setDeleteModal(false);
                  }}
                  className="bg-violet-200 py-2 px-4 rounded-3xl hover:bg-violet-600 hover:text-white"
                >
                  Annulla
                </button>
                <button
                  onClick={() => {
                    setId("");
                    setDeleteModal(false);
                    deletepost();
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
export default AdminHome;
