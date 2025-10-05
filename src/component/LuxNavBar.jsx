import { useNavigate} from "react-router-dom";

const LuxNavBar =()=>{
      const navigate = useNavigate();
 
    return(
        <div className="flex justify-center ">
                <button
                onClick={()=> navigate("/")

                }
                 className="cursor-pointer  py-4 font-jacquard text-9xl mt-6 text-gray-extraBold"> &nbsp; Luciano Famoso &nbsp; </button>
        </div>
    )
}

export default LuxNavBar
