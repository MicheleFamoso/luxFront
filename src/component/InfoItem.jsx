import { useState } from "react";
import { MapPinIcon, CalendarIcon, PencilIcon, TrashIcon,ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/16/solid";

const InfoItem = ({ mostra, setSelectedItem, setShowModal, setShowModalDelete }) => {
  const [info, setInfo] = useState(false);

  return (
    <div className="bg-violet-100 px-5 py-6 rounded-2xl mx-5 md:mx-0">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-violet-900">{mostra.titolo}</h1>
        <button onClick={() => setInfo(!info)}>{info?<ChevronUpIcon className="size-7"></ChevronUpIcon>:<ChevronDownIcon className="size-7"></ChevronDownIcon>}</button>
      </div>

      {/* Corpo espandibile */}
      {info && (
        <div>
          <div className="flex gap-4 mt-4 flex-col md:flex-row ">
           
            <div className="flex gap-2">
              <CalendarIcon className="size-6 text-violet-800" />
              <p className="text-violet-800 font-bold">{mostra.data}</p>
            </div> <div className="flex gap-2">
              <MapPinIcon className="size-6 text-violet-800" />
              <p className="text-violet-800 font-bold">{mostra.luogo}</p>
            </div>
          </div>

          <p className="mt-6 text-xl">{mostra.descrizione}</p>

          {/* Bottoni */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => {
                setSelectedItem(mostra);
                setShowModal(true);
              }}
              className="bg-violet-300 p-2 rounded-full hover:bg-amber-400"
            >
              <PencilIcon className="size-7" />
            </button>

            <button
              onClick={() => {
                setSelectedItem(mostra);
                setShowModalDelete(true);
              }}
              className="bg-violet-300 p-2 rounded-full hover:bg-red-400"
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
