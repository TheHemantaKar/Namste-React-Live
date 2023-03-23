import Spinner from "../assets/img/loadingSpinner.gif";

export const CarouselShimmer = () => {
  return (
    <div className="flex mt-4">
      <div className="justify-center from-neutral-400 m-4 w-[180px] h-[180px]">
        <img src={Spinner} className="" />
        <h2>Looking for great food near you ...</h2>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="flex justify-center bg-[#171a29] h-56">
        <div className="flex">
          <div className="flex-wrap w-[300px] h-[180px] justify-center mt-5">
            <img src={Spinner} className="m-auto w-[100px] h-[100px]" />
            <h2 className="text-gray-400 text-center font-bold mt-4">
              Looking for great food near you ...
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[20px]">
        <div className="h-[30px] p-1 px-2 bg-gray-200 w-3/6"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-[220px] h-[300px] p-2 m-2">
              <div className="w-[200px] h-[130px] p-2 m-2 shadow-sm bg-gray-200"></div>
              <div className="w-[150px] h-[18px] p-2 m-2 shadow-sm bg-gray-200"></div>
              <div className="w-[100px] h-[14px] p-2 m-2 shadow-sm bg-gray-200"></div>
              <div className="flex">
                <div className="w-[50px] h-[14px] p-2 m-2 shadow-sm bg-gray-200"></div>
                <div className="w-[50px] h-[14px] p-2 m-2 shadow-sm bg-gray-200"></div>
                <div className="w-[50px] h-[14px] p-2 m-2 shadow-sm bg-gray-200"></div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
