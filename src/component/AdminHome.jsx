import { useState, useEffect } from "react";


const AdminHome = () => {
    const[posts,Setposts] = useState([])
        const token = localStorage.getItem("token")

    const handlePost = async ()=>{

        try{
            const response = await fetch("http://localhost:8080/post",{
                 headers: {
          Authorization: `Bearer ${token}`,
        },
            })
            if(!response.ok){
                throw new Error("Errore nel recupero dei post.")
            }
            const data = await response.json();
            Setposts(data);
            console.log(data)


        }catch(err){
            console.log(err)
        }
    }


    useEffect(()=>{handlePost()},[])




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
                return(
                    <div key={post.id} className="mt-10 grid grid-cols-4 md:grid-cols-3 bg-violet-200 py-6 px-4 rounded-3xl">
                        <div>
                            
                            <div className="flex gap-2 pr-2 ">
                                 <img src={post.primaImmagine} alt="" className="" />
                             <img src={post.secondaImmagine} alt="" />
                              <img src={post.terzaImmagine} alt="" /> 
                            </div> <p>{post.dimensione}</p>
                        </div>
                           
                          
                    </div>
                )
        })}
      </div>
    </div>
  );
};
export default AdminHome;
