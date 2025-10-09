import { useState, useEffect } from "react";

const WorkLux = () => {
    
    
    const [posts, Setposts] = useState([]);
  
  
    const handlePost = async () => {
    try {
      const response = await fetch("http://localhost:8080/post");
      if (!response.ok) {
        throw new Error("Errore nel recupero dei post.");
      }
      const data = await response.json();
      Setposts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
   useEffect(() => {
    handlePost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className=" mt-2 md:mt-6 md:w-10/12 md:m-auto static">


  </div>;
};

export default WorkLux;
