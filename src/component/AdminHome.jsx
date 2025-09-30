import { useState, useEffect } from "react";

import {
  TrashIcon,
  PencilIcon,
  CalendarIcon,
  ArrowsPointingOutIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

import AdminPostItem from "./AdminPostItem";

const AdminHome = () => {
  const [posts, Setposts] = useState([]);
  const token = localStorage.getItem("token");

  const [selectItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

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
        body: JSON.stringify(selectItem),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("errore nel post");
      }

      setShowModal(false);
      setSelectedItem(null);
      handlePost();
    } catch (err) {
      console.log(err);
    }
  };

  const handlePostUpdate = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/post/" + selectItem.id,
        {
          method: "PUT",
          body: JSON.stringify(selectItem),
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("errore nella modifica della mostra");
      }
      setSelectedItem(false);
      handlePost();
    } catch (err) {
      console.log(err);
    }
  };

  const deletepost = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/post/" + selectItem.id,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Errore nell'eliminazione del post");
      }
      setSelectedItem(null);
      handlePost();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-8/12 md:m-auto static">
      <div className="">
        <div className={showModal ? "hidden " : ""}>
          <div className="flex  mr-6 ">
            <h1 className="text-6xl  flex-1 font-bold text-center">Post</h1>
            <button
              onClick={() => {
                setSelectedItem({
                  titolo: "",
                  primaImmagine: "",
                  secondaImmagine: "",
                  terzaImmagine: "",
                  data: "",
                  descrizione: "",
                  dimensione: "",
                });
                setShowModal(true);
              }}
              className="text-5xl  bg-violet-300 rounded-2xl px-4 pt-1 flex hover:bg-lime-500 "
            >
              +
            </button>
          </div>{" "}
          {posts.map((post) => {
            return (
              <div key={post.id} className="mt-6 grid grid-cols-1 gap-4">
                <AdminPostItem
                  post={post}
                  setSelectedItem={setSelectedItem}
                  setShowModal={setShowModal}
                  setDeleteModal={setDeleteModal}
                />
              </div>
            );
          })}
        </div>

        {showModal && selectItem && (
          <div className="p-5">
            <p className="font-bold  text-center text-5xl text-violet-900 ">
              Post
            </p>

            <form
              className="mt-16 md:bg-violet-50 md:shadow-md md:rounded-3xl md:py-5 md:px-10"
              onSubmit={(e) => {
                e.preventDefault();
                if (!selectItem.id ) {
                  handleCreatePost();
                } else handlePostUpdate()

                setShowModal(false);
              }}
            >
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row ">
                <label
                  htmlFor="titolo"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Titolo
                </label>
                <input
                  value={selectItem.titolo}
                  onChange={(e) =>
                    setSelectedItem({ ...selectItem, titolo: e.target.value })
                  }
                  type="text"
                  id="titolo"
                  className=" text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="primaimm"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Prima immagine
                </label>
                <input
                  value={selectItem.primaImmagine}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectItem,
                      primaImmagine: e.target.value,
                    })
                  }
                  type="text"
                  id="primaimm"
                  className=" text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="secondaImm"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Seconda immagine
                </label>
                <input
                  value={selectItem.secondaImmagine}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectItem,
                      secondaImmagine: e.target.value,
                    })
                  }
                  type="text"
                  id="secondaImm"
                  className=" text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="terzaImm"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Terza Immagine
                </label>
                <input
                  value={selectItem.terzaImmagine}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectItem,
                      terzaImmagine: e.target.value,
                    })
                  }
                  type="text"
                  id="terzaImm"
                  className=" text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="dimensione"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Dimensione
                </label>
                <input
                  value={selectItem.dimensione}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectItem,
                      dimensione: e.target.value,
                    })
                  }
                  type="text"
                  id="dimensione"
                  className=" text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="data"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Data
                </label>
                <input
                  value={selectItem.data}
                  onChange={(e) =>
                    setSelectedItem({ ...selectItem, data: e.target.value })
                  }
                  type="date"
                  id="data"
                  className=" text-xl px-6 bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="descrizione"
                  className="text-2xl text-violet-800 ml-2 md:ml-0 w-80"
                >
                  Descrizione
                </label>
                <textarea
                  value={selectItem.descrizione}
                  onChange={(e) =>
                    setSelectedItem({
                      ...selectItem,
                      descrizione: e.target.value,
                    })
                  }
                  id="descrizione"
                  className="text-xl  bg-violet-200 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-400  "
                ></textarea>
              </div>
              <div className="flex justify-end mt-12 gap-2">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="bg-violet-200 border-1 border-violet-300 px-4 py-2 rounded-3xl hover:bg-red-400"
                >
                  annulla
                </button>
                <button
                  type="submit"
                  className="bg-violet-200 border-1 border-violet-300 p-2 rounded-full  hover:bg-lime-400"
                >
                  <CheckIcon className="size-7"></CheckIcon>
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
                <span className="font-bold">{selectItem.titolo}</span>
                <span className="font-bold text-violet-950"></span>?
              </p>
              <div className="flex justify-around">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setDeleteModal(false);
                  }}
                  className="bg-violet-200 py-2 px-4 rounded-3xl hover:bg-violet-600 hover:text-white"
                >
                  Annulla
                </button>
                <button
                  onClick={() => {
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
