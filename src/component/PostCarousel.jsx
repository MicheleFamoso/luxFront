import Carousel from "./Carousel";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const PostCarousel = ({ post }) => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      key={post.id}
      className="grid md:grid-cols-3 grid-cols-1 gap-6 2xl:gap-1 px-2 md:px-0 mb-40"
    >
      <div className="md:col-span-2 rounded-3xl ">
        <Carousel item={post} />
      </div>

      <div className="flex flex-col px-3 md-px-1">
        <div className="">
          <h2
            className="text-3xl text-center md:text-start md:text-4xl font-black font-kosugi break-words text-gray-extraBold 
 "
          >
            {post.titolo}
          </h2>
        </div>
        <div className="text-center md:text-start">
          {post.data === null ? (
            ""
          ) : (
            <p className="font-kosugi text-gray-light font-black text-xl">
              {" "}
              {post.data}
            </p>
          )}

          {post.dimensione === null || post.dimensione === "" ? (
            ""
          ) : (
            <p className="font-kosugi text-gray-light font-black text-xl">
              {post.dimensione}
            </p>
          )}
        </div>
        {post.descrizione && (
          <div className="flex justify-center md:justify-normal text-gray-light mt-5">
            <button onClick={() => setIsopen(!isOpen)}>
              {" "}
              {!isOpen ? (
                <ChevronDownIcon className="size-7 hover:bg-panna-medium rounded-full p-1 cursor-pointer" />
              ) : (
                <ChevronUpIcon className="size-7 hover:bg-panna-medium rounded-full p-1 cursor-pointer" />
              )}
            </button>
          </div>
        )}

        {isOpen && (
          <div className="mt-3 text-center md:text-start">
            <h4 className="font-kosugi md:text-2xl text-xl text-balance font-bold text-gray-bold">
              {post.descrizione}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCarousel;
