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

  return (
    <div className=" mt-2 md:mt-16 md:w-10/12 md:m-auto static ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="grid md:grid-cols-3 grid-cols-1 gap-6 px-2 md:px-0 mb-20"
        >
          <div className="md:col-span-2 bg-red-300 rounded-3xl  h-110 "></div>

          <div className="flex flex-col ">
            <div>
              <h2
                className="text-6xl md:text-7xl font-bold font-kosugi break-words text-gray-extraBold mb-2
 "
              >
                {post.titolo}
              </h2>
            </div>
            <div>
              <h4 className="font-kosugi text-4xl text-balance text-gray-bold">
                {post.descrizione}
              </h4>
            </div>

            <div className="mt-auto ">
              <p className="font-kosugi text-gray-light"> date: {post.data}</p>
              <p className="font-kosugi text-gray-light ">
                {" "}
                dimension: {post.dimensione}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkLux;
