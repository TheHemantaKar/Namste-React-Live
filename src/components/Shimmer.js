const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-24">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div
              key={index}
              className="w-[200px] h-[300px] p-2 m-2 shadow-md bg-gray-200 rounded-sm"
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
