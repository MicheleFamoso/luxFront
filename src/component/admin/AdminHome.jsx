import { useState, useEffect } from "react";

import {
  
  CheckIcon,
  PlusIcon
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
          <div className="flex px-6 md:px-0">
            <h1 className="text-6xl font-kosugi text-gray-extraBold flex-1 font-bold">Post</h1>
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
              className="text-5xl shadow-md cursor-pointer  bg-gray-mediumBold/70 text-gray-bold hover:text-gray-extraBold rounded-full hover:bg-gray-mediumBold"
            >
              <PlusIcon className="w-15 p-3" />
            </button>
          </div>
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
          <div className="p-5 md:p-0">
           

            <form
              className=" "
              onSubmit={(e) => {
                e.preventDefault();
                if (!selectItem.id) {
                  handleCreatePost();
                } else handlePostUpdate();

                setShowModal(false);
              }}
            > <p className="font-bold mb-3 md:mb-10 text-5xl text-gray-extraBold font-kosugi ">
              Post
            </p>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row ">
                <label
                  htmlFor="titolo"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="primaimm"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="secondaImm"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="terzaImm"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="dimensione"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className="text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="data"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className=" text-xl font-kosugi px-6 bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-mediumBold/30"
                />
              </div>
              <div className="flex md:gap-10 gap-2  flex-col md:flex-row mt-6 ">
                <label
                  htmlFor="descrizione"
                  className="text-2xl text-gray-bold font-kosugi ml-2 md:ml-0 w-80"
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
                  className="text-xl text-gray-extraBold  bg-panna-medium/80 font-kosugi py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-mediumBold/30 "
                ></textarea>
              </div>
              <div className="flex justify-end mt-12 gap-2">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  className="cursor-pointer bg-panna-medium font-kosugi text-gray-bold hover:text-gray-50  px-6 py-3 rounded-3xl hover:bg-red-400/80"
                >
                  annulla
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
        {deleteModal && (
          <div className="fixed inset-0 bg-black/30  backdrop-blur-xs  bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-panna-medium px-8 py-8 mx-4 shadow-2xl rounded-3xl">
              <h2 className="text-2xl font-bold mb-4 font-kosugi text-gray-extraBold">Conferma eliminazione</h2>
              <p className="mb-4 text-xl font-kosugi text-gray-bold">
                Sei sicuro di voler eliminare{" "}
                <span className="font-bold text-gray-extraBold">{selectItem.titolo} </span>
                 ?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    setDeleteModal(false); 
                  }}
                  className="py-3 px-6 rounded-3xl shadow-md cursor-pointer font-kosugi  bg-gray-mediumBold/30 text-gray-extraBold hover:text-white    hover:bg-gray-mediumBold"
                >
                  Annulla
                </button>
                <button
                  onClick={() => {
                    setDeleteModal(false);
                    deletepost();
                  }}
                  className="py-3 px-6 rounded-3xl shadow-md cursor-pointer font-kosugi  bg-gray-mediumBold/30 text-gray-extraBold hover:text-white     hover:bg-red-400/80"
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
