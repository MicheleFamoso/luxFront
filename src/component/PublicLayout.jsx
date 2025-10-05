
import { Outlet } from "react-router-dom";
import LuxNavBar from "./LuxNavBar"; 
const PublicLayout =()=>{
    return(
         <div className="  grid grid-rows-[auto_1fr_auto] min-h-screen bg-panna  ">
            <header className=" ">
                <LuxNavBar/>
            </header>
            <main className="">
                <Outlet/>
            </main>
            <footer className="">3</footer>
          </div>
    )
}

export default PublicLayout