import {
  TrashIcon,
  PencilIcon,
  CalendarIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

const AdminPostItem = ({
  post,
  setSelectedItem,
  setShowModal,
  setDeleteModal,
}) => {
  const [info, setInfo] = useState(false);
  return (
    <div>
      <div className=" bg-violet-100 px-5 py-6 rounded-2xl mx-5 md:mx-0">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl text-violet-900">{post.titolo}</h1>
          <button onClick={() => setInfo(!info)}>
            {info ? (
              <ChevronUpIcon className="size-7"></ChevronUpIcon>
            ) : (
              <ChevronDownIcon className="size-7"></ChevronDownIcon>
            )}
          </button>
        </div>
        {info && (
          <div className="md:mt-2 flex flex-col gap-2   rounded-2xl">
            <div className="flex  gap-2">
              <div className="flex gap-2">
                <ArrowsPointingOutIcon className="size-6 text-violet-800"></ArrowsPointingOutIcon>
                <p className="text-violet-800 font-bold"> {post.dimensione}</p>
              </div>
              <div className="flex gap-2">
                <CalendarIcon className="size-6 text-violet-800"></CalendarIcon>
                <p className="text-violet-800 font-bold"> {post.data}</p>
              </div>
            </div>{" "}
            <p className="md:text-2xl text-xl text-center md:text-start">
              {post.descrizione}
            </p>
            <div className="grid grid-cols-3  md:gap-3 gap-1  md:p-4 p-1 rounded-2xl md:items-start items-end  ">
              <img
                src={post.primaImmagine}
                className={
                  post.primaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down md:border-9 border-4 border-gray-800 `
                }
                alt="foto opera 1 "
              />
              <img
                src={post.secondaImmagine}
                className={
                  post.secondaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down  md:border-9 border-4  border-gray-800 `
                }
                alt="foto opera 2"
              />
              <img
                src={post.terzaImmagine}
                className={
                  post.terzaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down  md:border-9 border-4 border-gray-800 `
                }
                alt="foto opera 3"
              />
            </div>{" "}
            <div className="flex gap-4 justify-end mt-4 ">
              <button
                onClick={() => {
                  setSelectedItem(post);
                  setShowModal(true);
                }}
                className="bg-violet-300  p-2 rounded-full hover:bg-amber-400"
              >
                <PencilIcon className="size-7" />
              </button>
              <button
                onClick={() => {
                  setSelectedItem(post);
                  setDeleteModal(true);
                }}
                className="bg-violet-300 p-2 rounded-full hover:bg-red-400"
              >
                <TrashIcon className="size-7 "></TrashIcon>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPostItem;
