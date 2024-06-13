import React from "react";
import "./main.css";
const Seventhsection = () => {
  return (
    <div className="background w-full py-12 h-fit flex flex-col flex-wrap justify-start items-center gap-y-5 mb-16">
      <h2 className="text-center lg:w-[45%] md:w-[55%] sm:w-[65%] lg:text-[40px] md:text-[30px] sm:text-[35px] max-sm:text-[25px] font-bold capitalize max-sm:w-[75%] ">
        subscribe for our newsletter for daily update
      </h2>
      <div className="relative lg:w-[50%] md:w-[60%] sm:w-[70%]  max-sm:w-[80%] max-sm:flex max-sm:flex-col max-sm:flex-wrap max-sm:justify-normal max-sm:items-center max-sm:gap-y-4">
        <input
          className="w-full h-[80px] rounded-[40px] placeholder:text-opacity-70 font-bold pl-7 placeholder:capitalize placeholder:text-[18px] 
          max-sm:placeholder:text-[16px]
          max-sm:text-center max-sm:p-0 outline-none"
          placeholder="your email adress here"
          type="text"
        ></input>
        <a className="lg:w-[230px] md:w-[200px]  sm:w-[150px] max-sm:w-[160px] bg-[#101926] capitalize text-center leading-[70px] text-white font-bold block rounded-[35px] cursor-pointer max-md:mx-auto sm:absolute top-[5px] right-2  ">
          see all
        </a>
      </div>
    </div>
  );
};
export default Seventhsection;
