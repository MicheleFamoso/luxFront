const FooterLux = () => {
  return (
    <div>
      <div
        className="
         mt-10 md:mt-12  md:m-auto static  md:w-11/12 px-3 md:px-0"
      >
        <hr className=" mx-2 md:mx-0 mb-2 md:mb-6 text-gray-light" />
        <div
          className="grid grid-cols-1 md:grid-cols-4 px-2 md:px-0 md:p-0 mb-8 md:gap-68
        "
        >
          <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">
              Luciano
            </h4>
            <p className="font-kosugi text-gray-bold font-semibold text-2xl">
              aka Lux
            </p>
          </div>
          <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">
              email
            </h4>
            <a
              className="font-kosugi  text-gray-bold font-semibold text-2xl"
              href="mailto:lucianofamoso00@gmail.com"
            >
              lucianofamoso00@gmail.com
            </a>
          </div>
          <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">
              online
            </h4>
            <a
              className="font-kosugi  text-gray-bold font-semibold text-2xl"
              href="https://www.behance.net/lucianofamoso"
            >
              {" "}
              Behance/{" "}
            </a>
            <a
              className="font-kosugi  text-gray-bold  font-semibold text-2xl"
              href="https://www.instagram.com/luxfamoso/"
            >
              Instagram{" "}
            </a>
          </div>
          <div>
            <h4 className="font-kosugi font-bold text-3xl text-gray-extraBold">
              Crafted by
            </h4>
            <a
              className="font-kosugi  text-gray-bold  font-semibold text-2xl"
              href="https://www.linkedin.com/in/michele-famoso/"
            >
              Michele/{" "}
            </a>
            <a
              className="font-kosugi  text-gray-bold font-semibold text-2xl"
              href="mailto:michelefamoso@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterLux;
