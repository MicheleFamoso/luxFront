import { useNavigate } from "react-router-dom"

const AdminNav =()=>{
    const navigate = useNavigate()
    return(

   <nav className="bg-purple-400 px-20 py-2 flex justify-around md:justify-start ">
        
        <button 
        onClick={()=>{navigate("/admin")}}
        className="md:mr-6">Post</button>
        <button className="md:mr-6">Mostre</button>
        <button>Bio</button>
   </nav>
    )


}

export default AdminNav