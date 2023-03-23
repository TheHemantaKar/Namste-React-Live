import { IMG_OFFER_URL } from "../config";

const Carousel = ({ carouselItem }) => {
  const carouselItems = { ...carouselItem };

  return (
    <div className="flex">
      {Object.values(carouselItems).map((carouselImg) => (
        <div
          className="justify-center m-4 mt-10 mb-10 "
          key={carouselImg.bannerId}
        >
          {/* {console.log(carouselImg)} */}
          <img
            src={IMG_OFFER_URL + carouselImg?.data?.creativeId}
            className="h-max transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover: duration-150 cursor-pointer"
            alt="Wild Landscape"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
