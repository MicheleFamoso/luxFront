import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const WorkLux = () => {
  const [posts, Setposts] = useState([]);

  const handlePost = async () => {
    try {
      const response = await fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/post");
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
    <div className=" mt-2 md:mt-16 md:w-10/12 md:m-auto static ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="grid md:grid-cols-3 grid-cols-1 gap-6 2xl:gap-10 px-2 md:px-0 mb-40"
        >
          <div className="md:col-span-2 rounded-3xl ">
            <Carousel item={post}/>
          </div>

          <div className="flex flex-col ">
            <div className="mb-3">
              <h2
                className="text-6xl md:text-6xl font-bold font-kosugi break-words text-gray-extraBold mb-2
 "
              >
                {post.titolo}
              </h2>
            </div>
            <div>
              <h4 className="font-kosugi text-3xl text-balance text-gray-bold">
                {post.descrizione}
              </h4>
            </div>

            <div className="mt-auto ">
              <p className="font-kosugi text-gray-light"> date: {post.data}</p>
              <p className="font-kosugi text-gray-light ">
                {" "}
                dimension: {post.dimensione}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center ">
        <button
        onClick={()=> window.scrollTo({top:0, behavior: "smooth"})}
        ><ArrowUpCircleIcon className="w-10 text-gray-bold hover:text-gray-extraBold animate-bounce cursor-pointer"/></button>
      </div>
    </div>
  );
};

export default WorkLux;
