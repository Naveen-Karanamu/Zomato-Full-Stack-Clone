import React from "react";

const NutritionCard = ({ image, title }) => {
  return (
    <>
      <div className=" bg-white shadow rounded-md w-28 h-28 lg:h-full md:px-2 pt-2 md:pt-0 md:w-56 lg:pb-6  md:h-56">
        <div className="w-full h-12 md:h-36">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="">
          <h3 className="text-sm my-1 text-center font-light md:text-xl">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

const NutritionCarousalCard = (props) => {
  return (
    <>
      <NutritionCard {...props} />
    </>
  );
};

export default NutritionCarousalCard;