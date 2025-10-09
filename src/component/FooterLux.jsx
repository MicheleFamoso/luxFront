const FooterLux = () => {
  return (
    <div>
      <div className=" mt-10 md:mt-12 md:w-8/12 md:m-auto static ">
      <hr className="m-1 mx-10 md:mx-0 mb-6 text-gray-bold" />
        <div className="grid grid-cols-1 md:grid-cols-3 p-10 md:p-0
        ">
            <div>
            <h4>Luciano</h4>
            <p>aka lux</p>
            </div>
            <div>
                <h4>email</h4>
                <p onClick={()=> window.location.href = "mailto:lucianofamoso00@gmail.com"}>lucianofamoso00@gmail.com</p>
            </div>
            <div>
            <h4>online</h4>
            instagram / Behance
            </div>

        </div>
      </div>
    </div>
  );
};
export default FooterLux;
