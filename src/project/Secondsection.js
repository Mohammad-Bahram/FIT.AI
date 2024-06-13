import React from "react";
const Secondsection = () => {
  return (
    <div className="w-full h-fit py-20 bg-white ">
      <div className=" mx-auto w-[86.11%] h-fit grid md:grid-cols-2 md:grid-rows-1 md:justify-between  md:items-start max-md:grid-cols-1 max-md:grid-rows-[fit,fit] max-md:gap-5">
        <div className="w-full h-fit  flex flex-col flex-wrap justify-start items-start gap-5 max-md:order-1  ">
          <p className="lg:text-[40px] md:text-[30px] sm:text-[35px] max-sm:text-[35px] font-bold capitalize text-left max-md:mx-auto ">
            about us
          </p>
          <p className="text-[black] text-opacity-40 w-[90%] lg:text-[22px] md:text-[20px] sm:txt-[25px] max-sm:text-[17px] font-bold capitalize text-left max-md:text-center max-md:mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
            voluptatem magnam, possimus veniam sunt non itaque cupiditate?
            <span className="md:hidden">
              Quod, voluptatem magnam, possimus veniam sunt non itaque
              cupiditate?
            </span>
          </p>
          <a className="lg:w-[200px] md:w-[180px] max-md:w-[200px] bg-[#101926] capitalize text-center leading-[70px] text-white font-bold block rounded-[35px] cursor-pointer max-md:mx-auto">
            read more
          </a>
        </div>
        <div className="w-full lg:h-[279px] md:h-[279px] max-md:h-fit ">
          <img
            className="w-full h-full max-md:h-auto object-cover rounded-[20px]"
            src="https://i.pinimg.com/564x/a9/ea/89/a9ea89ffa2b45b98751610b557d8a96b.jpg"
            alt="test"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
