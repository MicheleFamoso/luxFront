import { useState, useEffect } from "react";

const AdminBio = () => {
  const [bio, setBio] = useState(null);
  const [modal, showModal] = useState(false);

  const handleBio = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/bio/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("errore nel caricamento");
      }
      const data = await response.json();
      setBio(data);
      console.log(data);
      console.log(bio);
    } catch (error) {
      console.error("errore", error);
    }
  };

  useEffect(() => {
    handleBio();
  }, []);

  return (
    <div className="   mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div className="ml-6">
        

        {bio ? (
          <div>
          <h1 className="text-6xl">Bio</h1>
          <div className="  mt-10  ">
            <div className="flex gap-10 items-end">
              <p className=" text-xl text-neutral-700 w-12">Nome </p>

              <p className="text-2xl">{bio.nome}</p>
            </div>
            <hr className="border-t-1 border-t-purple-400 mr-10 ml-20" />
            <div className="flex gap-10 mt-6 items-end">
              <p className=" text-xl text-neutral-700 w-12">Email </p>

              <p className="text-2xl">{bio.email}</p>
            </div>
            <hr className="border-t-1 border-t-purple-400 mr-10 ml-20" />
            <div className="flex gap-10 mt-6 items-end">
              <p className=" text-xl text-neutral-700 w-12">Bio </p>

              <p className="text-2xl"> {bio.bio}</p>
            </div>
            <hr className="border-t-1 border-t-purple-400 mr-10 ml-20" />
            <div className="flex mt-6 md:justify-end justify-center md:mr-10">
              <button
                onClick={() => showModal(true)}
                className="bg-purple-200 py-2 px-4 rounded-4xl hover:bg-purple-500 hover:text-white"
              >
                Modifica
              </button>
            </div>
          </div>
          </div>
        ) : (
          <div className="flex justify-center mt-10">
             <button className="bg-purple-400 px-4 py-2 rounded-sm text-white hover:bg-lime-400">Aggiungi Bio</button>
          </div>
        
        )}
      </div>

      {modal && (
        <div className="  bg-gray-50 absolute top-0 md:mt-20 mt-15 md:w-6/12 w-12/12 h-6/12">
          <div className="flex justify-end mr-4">
            <button
              className="bg-gray-200 font-bold text-gray-600 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white"
              onClick={() => showModal(false)}
            >
              X
            </button>
          </div>
          <div className="ml-6">
            <p className="text-4xl text-gray-800 text-center font-semibold">Modifica</p>
            <form>
              <div className="flex mt-6 gap-10 justify-center">
                   <label htmlFor="nome">Nome</label>
              <input id="nome" type="text"  className=" border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"  />
              </div>
              <div className="flex mt-6 gap-10 justify-center">
                   <label htmlFor="email">Email</label>
              <input id="email" type="email"  className=" border-b border-b-purple-400 focus:outline-hidden focus:border-b-2 focus:border-purple-400"  />
              </div>
                 <div className="flex mt-8 justify-center gap-14">
                   <label htmlFor="bio" >Bio</label>
                    <textarea name="bio" id="bio" cols={24}  className="border rounded-sm border-purple-400  focus:outline-2 focus:outline-purple-400"></textarea>
              </div>
              <div className="flex justify-center-safe mt-20">
                <button className="bg-purple-400 px-4 py-2 rounded-3xl text-white hover:bg-lime-400">Salva Modifiche </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBio;
