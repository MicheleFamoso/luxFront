import { useState, useEffect } from "react";

const AdminBio = () => {
  const [bio, setBio] = useState(null);

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
    <div className=" ml-6  mt-2 md:mt-6 md:w-6/12 md:m-auto">
      <h1 className="text-6xl">Bio</h1>
      {bio ? (
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
            <p className=" text-xl text-neutral-700 w-12">Bio   </p>

            <p className="text-2xl"> {bio.bio}</p>
          </div>
          <hr className="border-t-1 border-t-purple-400 mr-10 ml-20" />
            <div className="flex mt-6 md:justify-end justify-center md:mr-10">
                <button className="bg-purple-200 py-2 px-4 rounded-2xl hover:bg-purple-500 hover:text-white">Modifica</button> 
            </div>
         
        </div>
      ) : (
        <p className="text-center font-bold mt-3">Caricamento in corso...</p>
      )}
    </div>
  );
};

export default AdminBio;
