import {
  TrashIcon,
  PencilIcon,
 
  CalendarIcon,
  ArrowsPointingOutIcon,
  CheckIcon
} from "@heroicons/react/16/solid";


const  AdminPostItem =({post,setSelectedItem, setShowModal, setDeleteModal})=>{
    return(


         <div
                
                className="my-8"
              >
                <div className=" md:bg-violet-50 md:shadow-md p-6 rounded-3xl">
                  <div className="grid grid-cols-3 md:gap-3 gap-1  md:p-4 p-1 rounded-2xl items-center  ">
                    <img
                      src={post.primaImmagine}
                      className={post.primaImmagine === ""?`hidden`:`shadow-xl`}
                      alt="foto opera 1 "
                      
                    />
                    <img
                      src={post.secondaImmagine}
                      className={post.secondaImmagine === ""?`hidden`:`shadow-xl`}
                      alt="foto opera 2"
                    />
                    <img
                      src={post.terzaImmagine}
                      className={post.terzaImmagine === ""?`hidden`:`shadow-xl`}
                      alt="foto opera 3"
                    />
                  </div>

                  <div className="md:mt-2 py-5 px-4 flex flex-col gap-3   rounded-2xl">
                    <p className="text-center  text-2xl md:text-3xl font-black text-violet-900">
                      {post.titolo}
                    </p>

                    <p className="md:text-2xl text-xl text-center md:text-start">
                      {post.descrizione}
                    </p>
                    <div className="flex justify-between px-3">
                      <div className="flex gap-2">
                        <ArrowsPointingOutIcon className="size-6 text-violet-800"></ArrowsPointingOutIcon>
                        <p className="text-violet-800 font-bold">
                          {" "}
                          {post.dimensione}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <CalendarIcon className="size-6 text-violet-800"></CalendarIcon>
                        <p className="text-violet-800 font-bold">
                          {" "}
                          {post.data}
                        </p>
                      </div>
                    </div>
                       <div className="flex gap-4 justify-end mt-4 ">
                  <button
                    onClick={() => {
                        setSelectedItem(post)
                      setShowModal(true);
                    }}
                    className="bg-violet-300  p-2 rounded-full hover:bg-amber-400"
                  >
                    <PencilIcon className="size-7" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedItem(post)
                       setDeleteModal(true);
                     
                    }}
                    className="bg-violet-300 p-2 rounded-full hover:bg-red-400"
                  >
                    <TrashIcon className="size-7 "></TrashIcon>
                  </button>
                </div>
                  </div>
                </div>

             
              </div>

    )
}

export default AdminPostItem