import { useState } from "react";
import {
  MapPinIcon,
  CalendarIcon,
  PencilIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const InfoItem = ({
  mostra,
  setSelectedItem,
  setShowModal,
  setShowModalDelete,
}) => {
  const [info, setInfo] = useState(false);

  return (
    <div className="bg-panna-medium px-5 py-6 rounded-2xl mx-5 md:mx-0">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="font-bold font-kosugi text-3xl text-gray-extraBold">
          {mostra.titolo}
        </h1>
        <button onClick={() => setInfo(!info)}>
          {info ? (
            <ChevronUpIcon className="size-7 text-gray-extraBold cursor-pointer "></ChevronUpIcon>
          ) : (
            <ChevronDownIcon className="size-7 text-gray-extraBold cursor-pointer "></ChevronDownIcon>
          )}
        </button>
      </div>

      {/* Corpo espandibile */}
      {info && (
        <div>
          <div className="flex gap-2 mt-4 flex-col mb-4 ">
            <div className="flex gap-2">
              <CalendarIcon className="size-6 text-gray-light" />
              <p className="text-gray-light font-bold font-kosugi">{mostra.data}</p>
            </div>{" "}
            <div className="flex gap-2">
              <MapPinIcon className="size-6 text-gray-light" />
              <p className="text-gray-light font-bold font-kosugi">{mostra.luogo}</p>
            </div>
          </div>

          <p className="md:text-2xl text-xl font-kosugi text-gray-bold">{mostra.descrizione}</p>

          {/* Bottoni */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => {
                setSelectedItem(mostra);
                setShowModal(true);
              }}
              className="shadow-md cursor-pointer  bg-gray-mediumBold/50 text-gray-bold hover:text-gray-extraBold   p-2 rounded-full hover:bg-gray-mediumBold"
            >
              <PencilIcon className="size-7" />
            </button>

            <button
              onClick={() => {
                setSelectedItem(mostra);
                setShowModalDelete(true);
              }}
              className="shadow-md cursor-pointer  bg-gray-mediumBold/50 text-gray-bold hover:text-gray-extraBold   p-2 rounded-full hover:bg-gray-mediumBold"
            >
              <TrashIcon className="size-7" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoItem;
