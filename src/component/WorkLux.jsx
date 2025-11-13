import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Loading from "./Loading";
import PostCarousel from "./PostCarousel";

const WorkLux = () => {
  const [posts, Setposts] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const handlePost = async () => {
    try {
      const response = await fetch(
        "https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/post"
      );
      if (!response.ok) {
        throw new Error("Errore nel recupero dei post.");
      }
      const data = await response.json();
      Setposts(data);
      setIsloading(false);
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
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {posts.map((post) => (
            <PostCarousel key={post.id} post={post} />
          ))}
          <div className="flex justify-center ">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUpCircleIcon className="w-10 text-gray-bold hover:text-gray-extraBold  cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkLux;
