import { useState, useEffect } from "react";
import {
  
  PencilIcon,

  CheckIcon,
} from "@heroicons/react/24/outline"

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
      const response = await fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/bio", {
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
      const response = await fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/bio", {
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
      const response = await fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/bio/" + id, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="   mt-2 md:mt-6 md:w-8/12 md:m-auto static">
      <div className="">
        {isLoading ? (
          <div>
            <h1 className="font-kosugi text-2xl text-gray-extraBold">
              Caricarento in corso...
            </h1>
          </div>
        ) : bios.length === 0 ? (
          <div className="flex mt-10  justify-center">
            <button
              onClick={() => showModal(true)}
              className="bg-gray-mediumBold/50 px-4 py-2 rounded-3xl text-gray-extraBold  hover:bg-gray-mediumBold"
            >
              Aggiungi
            </button>
          </div>
        ) : (
          <div className={modal ? "hidden" : "px-6 md:px-0"}>
            <h1 className="text-6xl font-kosugi text-gray-extraBold font-bold">
              Bio
            </h1>{" "}
            {bios.map((bio) => {
              return (
                <div key={bio.id} className="  mt-10  ">
                  <div className="grid md:grid-cols-3 grid-cols-1">
                    <div className="">
                      <p className="text-4xl font-kosugi font-bold text-gray-extraBold mb-2">
                        {bio.nome}
                      </p>
                      <div className=" mt-2 ">
                        
                        <p className=" md:text-xl font-kosugi text-gray-light">
                          {bio.email}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                     
                      <p className="text-2xl mt-6 md:mt-0 font-kosugi text-gray-bold"> {bio.bio}</p>
                    </div>
                  </div>{" "}
                  <div className=" mt-10 flex  justify-end">
                    <button
                      onClick={() => {
                        setID(bio.id);
                        setNome(bio.nome);
                        setBio(bio.bio);
                        setEmail(bio.email);
                        showModal(true);
                      }}
                      className="shadow-md cursor-pointer  bg-gray-mediumBold/50 text-gray-bold hover:text-gray-extraBold   p-2 rounded-full hover:bg-gray-mediumBold"
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
        <div className="px-6 md:px-0">
          <div className="flex flex-row ">
            <p className="text-5xl font-bold text-gray-extraBold font-kosugi ">
            Bio
            </p>
          </div>
          <div className="mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault;
                bios.length === 0 ? addBio() : updateBio();
              }}
            >
              <div className=" ">
                <div className="">
                  <div className="flex md:gap-16 gap-2  flex-col md:flex-row ">
                    <label
                      className="text-2xl font-kosugi text-gray-bold ml-2 md:ml-0"
                      htmlFor="nome"
                    >
                      Nome
                    </label>
                    <input
                      placeholder="Mario Rossi"
                      id="nome"
                      type="text"
                      className="text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-6 md:gap-12 gap-2  flex-col md:flex-row ">
                    <label
                      className="text-2xl font-kosugi text-gray-bold ml-2 md:ml-0"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      placeholder="pippo@gmail.com"
                      id="email"
                      type="email"
                      className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-8 md:gap-18 gap-2  flex-col md:flex-row">
                    <label
                      className="text-2xl font-kosugi text-gray-bold ml-2 md:ml-0"
                      htmlFor="bio"
                    >
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      id="bio"
                      placeholder="Tra colori, forme e melodie, esploro il confine tra realtà e immaginazione. Le mie opere nascono da curiosità, notti insonni e caffè troppo forti, cercando di catturare ciò che le parole non riescono a descrivere"
                      className=" text-xl font-kosugi text-gray-extraBold bg-panna-medium/80 py-2 pl-6 shadow-md rounded-2xl w-full  focus:outline-hidden focus:inset-shadow-sm focus:inset-shadow-gray-mediumBold/30"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="flex justify-end gap-2 md:mt-6 mt-12">
                    <button
                      onClick={() => {
                        setID("");
                        setNome("");
                        setBio("");
                        setEmail("");
                        showModal(false);
                      }}
                      className="cursor-pointer bg-panna-medium font-kosugi text-gray-bold hover:text-gray-50  px-6 py-3 rounded-3xl hover:bg-red-400/80"
                    >
                      Annulla
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer bg-panna-medium  text-gray-bold  p-3 rounded-full  hover:bg-lime-300/60"
                    >
                      <CheckIcon className="size-7"></CheckIcon>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBio;
