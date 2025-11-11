import IntrLux from "./IntrLux";
import Navigatelux from "./NavigateLux";
import WorkLux from "./WorkLux";

const PublicHome = () => {
  return (
    <div className=" mt-2 md:mt-6 md:w-8/12 md:m-auto static">
      <div>
        <IntrLux />
        <Navigatelux />
        <WorkLux />
      </div>
    </div>
  );
};
export default PublicHome;
