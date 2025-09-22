import { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

const AdminBio = () => {
  const [bios, setBios] = useState([]);
  const [modal, showModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [id, setID] = useState("");

  const handleBio = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/bio", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("errore nel caricamento");
      }
      const data = await response.json();
      setBios(data);
      setNome(data.nome);
      setEmail(data.email);
      setBio(data.bio);
      setIsLoading(false);
      console.log(data);
      console.log(bios);
    } catch (error) {
      console.error("errore", error);
    }
  };

  const addBio = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/bio", {
        method: "POST",
        body: JSON.stringify({ nome, email, bio }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Errore nel salvataggio");
      const newBio = await response.json();
      setBios(newBio);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBio = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/bio/" + id, {
        method: "PUT",
        body: JSON.stringify({ nome, email, bio }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("errore nella modifica");
      const bioUpdate = await response.json();
      setBios(bioUpdate);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleBio();
  }, []);

  return (
    <div className="   mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div className="ml-6">
        {isLoading ? (
          <div>
            <h1>Caricarento in corso...</h1>
          </div>
        ) : bios.length === 0 ? (
          <div className="flex mt-10  justify-center">
            <button
              onClick={() => showModal(true)}
              className="bg-purple-400 px-4 py-2 rounded-sm text-white hover:rounded-4xl hover:bg-purple-700"
            >
              Aggiungi
            </button>
          </div>
        ) : (
          <div className={modal ? "hidden" : ""}>
            <h1 className="text-6xl text-center font-bold">Bio</h1>{" "}
            {bios.map((bio) => {
              return (
                <div
                  key={bio.id}
                  className="  mt-10   bg-violet-200 px-2 py-3 mr-6 rounded-3xl"
                >
                  <div className="bg-violet-50 px-5 py-6 rounded-2xl">
                    <p className="text-4xl text-center font-bold text-violet-800 mb-4">
                      {bio.nome}
                    </p>
                    <p className="text-2xl md:ml-5 md:mr-5 text-center md:px-6"> {bio.bio}</p>

                    <div className="flex gap-2 mt-8 justify-end">
                      <EnvelopeIcon className="size-6 text-violet-800"></EnvelopeIcon>
                      <p className="text-xl text-violet-800 font-bold">
                        {bio.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 justify-end">
                    <button
                      onClick={() => {
                        setID(bio.id);
                        setNome(bio.nome)
                        setBio(bio.bio)
                        setEmail(bio.email)
                        showModal(true);
                      }}
                      className="bg-violet-300  p-2 rounded-full hover:bg-amber-400"
                    >
                      <PencilIcon className="size-7" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {modal && (
        <div className="p-5">
          <div className="flex flex-row ">
            <p className="text-5xl font-bold flex-1 text-center ">
              Modifica Bio
            </p>
          </div>
          <div className="mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault;
                bios.length === 0 ? addBio() : updateBio();
              }}
              className="bg-violet-200 rounded-3xl p-3 "
            >
              <div className="bg-violet-50 rounded-2xl py-8 ">
                <div className="px-2 md:px-10">
                  <div className="flex gap-10">
                    <label className="text-2xl " htmlFor="nome">
                      Nome
                    </label>
                    <input
                      placeholder="Mario Rossi"
                      id="nome"
                      type="text"
                      className="text-xl bg-violet-300 py-2 pl-6 rounded-3xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-600"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-6 gap-10 ">
                    <label className="text-2xl" htmlFor="email">
                      Email
                    </label>
                    <input
                      placeholder="pippo@gmail.com"
                      id="email"
                      type="email"
                      className="  text-xl bg-violet-300 py-2 pl-6 rounded-3xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-600"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-8 gap-14">
                    <label className="text-2xl" htmlFor="bio">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      id="bio"
                      placeholder="Tra colori, forme e melodie, esploro il confine tra realtà e immaginazione. Le mie opere nascono da curiosità, notti insonni e caffè troppo forti, cercando di catturare ciò che le parole non riescono a descrivere"
                      className=" text-xl  bg-violet-300 py-2 px-6 rounded-3xl w-full focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-violet-600  "
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => {
                    setID("")
                    setNome("")
                    setBio("")
                    setEmail("")
                    showModal(false)}}
                  className="bg-violet-300 p-2 rounded-full hover:bg-red-400"
                >
                  <TrashIcon className="size-7 "></TrashIcon>
                </button>
                <button
                  type="submit"
                  className="bg-violet-300 p-2 rounded-full  hover:bg-lime-400"
                >
                  <CheckIcon className="size-7"></CheckIcon>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBio;
