import { useNavigate} from "react-router-dom";

const LuxNavBar =()=>{
      const navigate = useNavigate();
 
    return(
        <div className="text-center mb-6">
                <button
                onClick={()=> navigate("/")

                }
                 className="cursor-pointer font-jacquard text-5xl md:text-9xl mt-8 text-gray-extraBold"> &nbsp; Luciano Famoso &nbsp; </button>
        </div>
    )
}

export default LuxNavBar
