import { useState, useEffect } from "react";

const AdminHome = () => {
  const [posts, Setposts] = useState([]);
  const token = localStorage.getItem("token");

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

  useEffect(() => {
    handlePost();
  }, []);

  return (
    <div className=" mt-2 md:mt-6 md:w-6/12 md:m-auto static">
      <div className="ml-6">
        <div className="flex justify-between mr-6 ">
          <h1 className="text-6xl">Post</h1>
          <button className="text-5xl  bg-violet-300 rounded-2xl px-4 pt-1 flex hover:bg-lime-500 ">
            +
          </button>
        </div>
        {posts.map((post) => {
          return (
            <div
              key={post.id}
              className="mt-10  bg-violet-200 py-6 px-4 rounded-3xl mr-6"
            >

               <p className="text-center mb-4 text-2xl md:text-3xl font-black text-violet-900"> {post.titolo}</p>
              <div className="grid grid-cols-3 gap-3 bg-white/60 p-4 rounded-2xl">
                <img src={post.primaImmagine} alt="foto opera 1 " />
                <img src={post.secondaImmagine} alt="foto opera 2"  />
                <img src={post.terzaImmagine} alt="foto opera 3"  />
              </div>

              <div className="mt-6  px-4 flex flex-col gap-3">
               <p className="self-end text-violet-500">{post.dimensione}</p>
               <p className="md:text-2xl text-xl">{post.descrizione}</p>
               <p className="text-violet-800">{post.data}</p>
              </div>
              <div className="flex gap-4 justify-end mt-4 mr-6">
                <button className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-amber-400">Modifica</button>
                <button  className="bg-violet-300 px-3 py-1 rounded-2xl hover:bg-red-400" >Elimina</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AdminHome;
