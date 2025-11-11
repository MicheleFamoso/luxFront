const Loading = () => {
  return (
    <div className="w-full  p-4 ">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded-xl"></div>

        <div className="h-4 bg-gray-300 rounded-xl w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-xl w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded-xl w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-xl w-3/4"></div>
        <div className="flex space-x-2 pt-2">
          <div className="h-4 w-24 bg-gray-300 rounded-3xl"></div>
          <div className="h-4 w-16 bg-gray-300 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
