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
      <div className=" bg-panna-medium px-5 py-6 rounded-2xl mx-5 md:mx-0">
        <div className="flex justify-between">
          <h1 className="font-bold font-kosugi text-3xl text-gray-extraBold">
            {post.titolo}
          </h1>
          <button onClick={() => setInfo(!info)}>
            {info ? (
              <ChevronUpIcon className="size-7 text-gray-extraBold cursor-pointer "></ChevronUpIcon>
            ) : (
              <ChevronDownIcon className="size-7 text-gray-extraBold cursor-pointer"></ChevronDownIcon>
            )}
          </button>
        </div>
        {info && (
          <div className="md:mt-6 mt-4 flex flex-col gap-2   rounded-2xl">
            <p className="md:text-2xl text-xl font-kosugi text-gray-bold ">
              {post.descrizione}
            </p>
            <div className="">
              <div className="flex gap-2 mb-2">
                <ArrowsPointingOutIcon className="size-6 text-gray-light "></ArrowsPointingOutIcon>
                <p className="text-gray-light font-bold font-kosugi">
                  {" "}
                  {post.dimensione}
                </p>
              </div>
              <div className="flex gap-2">
                <CalendarIcon className="size-6 text-gray-light "></CalendarIcon>
                <p className="text-gray-light font-kosugi font-bold">
                  {" "}
                  {post.data}
                </p>
              </div>
            </div>{" "}
            <div className="grid grid-cols-3  md:gap-3 gap-1  md:p-4 p-1 rounded-2xl  items-end  ">
              <img
                src={post.primaImmagine}
                className={
                  post.primaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down shadow-xl `
                }
                alt="foto opera 1 "
              />
              <img
                src={post.secondaImmagine}
                className={
                  post.secondaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down shadow-xl `
                }
                alt="foto opera 2"
              />
              <img
                src={post.terzaImmagine}
                className={
                  post.terzaImmagine === ""
                    ? `hidden`
                    : ` object-scale-down shadow-xl `
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
                className="bg-gray-mediumBold/70  p-2 rounded-full hover:bg-gray-mediumBold"
              >
                <PencilIcon className="size-7" />
              </button>
              <button
                onClick={() => {
                  setSelectedItem(post);
                  setDeleteModal(true);
                }}
                className="bg-gray-mediumBold/70  p-2 rounded-full hover:bg-gray-mediumBold"
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
