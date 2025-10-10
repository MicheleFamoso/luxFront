import { useLocation } from "react-router-dom";
const FooterLux = () => {
    const location = useLocation();
  const isWork = location.pathname === "/work"
  return (
    <div>
      <div className={` mt-10 md:mt-12  md:m-auto static ${ isWork ? "md:w-10/12" :"md:w-8/12"  } `}>
      <hr className=" mx-2 md:mx-0 mb-2 md:mb-6 text-gray-light" />
        <div className="grid grid-cols-1 md:grid-cols-4 px-2 md:px-0 md:p-0 mb-8 md:gap-22
        ">
            <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold" >Luciano</h4>
            <p className="font-kosugi text-gray-bold text-xl">aka lux</p>
            </div>
            <div>
                <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">email</h4>
                <a className="font-kosugi  text-gray-bold text-xl" href="mailto:lucianofamoso00@gmail.com">lucianofamoso00@gmail.com</a>
            </div>
            <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">online</h4>
           <a className="font-kosugi  text-gray-bold text-xl" href="https://www.behance.net/lucianofamoso"> Behance/ </a>
           <a className="font-kosugi  text-gray-bold text-xl" href="https://www.instagram.com/luxfamoso/">instagram </a> 
            </div>
            <div>
              <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">Crafted by</h4>
              <a className="font-kosugi  text-gray-bold text-xl" href="https://www.linkedin.com/in/michele-famoso/">Michele/</a> 
              <a className="font-kosugi  text-gray-bold text-xl" href="mailto:michelefamoso@gmail.com">Email</a>
               
            </div>
        </div>
      </div>
    </div>
  );
};
export default FooterLux;
