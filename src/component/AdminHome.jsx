import { useState, useEffect } from "react";

const AdminHome = () => {
  const [posts, Setposts] = useState([]);
  const token = localStorage.getItem("token");

  const [titolo, setTitolo] = useState("");
  const [primaImmagine, setPrimaImmagine] = useState("");
  const [secondaImmagine, setSecondaImmagine] = useState("");
  const [terzaImmagine, setTerzaImmagine] = useState("");
  const [data, setData] = useState("");
 
  const [dimensione, setDimensione] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    await  handlePost();
    setShowModal(false);
    } catch (err) {
      console.log(err);
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
                className="mt-10  bg-violet-200 py-6 px-4 rounded-3xl mr-6"
              >
                <p className="text-center mb-4 text-2xl md:text-3xl font-black text-violet-900">
                  {" "}
                  {post.titolo}
                </p>
                <div className="grid grid-cols-3 gap-3 bg-white/60 p-4 rounded-2xl">
                  <img src={post.primaImmagine} alt="foto opera 1 " />
                  <img src={post.secondaImmagine} alt="foto opera 2" />
                  <img src={post.terzaImmagine} alt="foto opera 3" />
                </div>

                <div className="mt-6  px-4 flex flex-col gap-3">
                  <p className="self-end text-violet-500">{post.dimensione}</p>
                  <p className="md:text-2xl text-xl">{post.descrizione}</p>
                  <p className="text-violet-800">{post.data}</p>
                </div>
                <div className="flex gap-4 justify-end mt-4 mr-6">
                  <button className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-amber-400">
                    Modifica
                  </button>
                  <button className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-red-400">
                    Elimina
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
                onClick={() => setShowModal(false)}
                className="bg-violet-200 hover:bg-red-500 px-4 pt-2 pb-1 rounded-full"
              >
                X
              </button>
            </div>
            <form
              className="mt-16"
              onSubmit={(e) => {
                e.preventDefault();
                handleCreatePost();
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
      </div>
    </div>
  );
};
export default AdminHome;
