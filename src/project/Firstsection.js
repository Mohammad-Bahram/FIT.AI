import React from "react";
const Firstsection = () => {
  return (
    <div className="w-full h-fit pt-14 bg-[#edf6fd]">
      <div className="w-[65%] h-fit flex flex-col flex-wrap items-center justify-start gap-7 mx-auto mb-20">
        <div className="w-[80%] h-fit">
          <p className="lg:text-[40px] md:text-[30px] sm:text-[30px] max-sm:text-[19px] font-bold capitalize text-center ">
            discover the future of fitness with all powered training plans
          </p>
        </div>
        <div className="w-fit h-auto">
          <p className="text-[black] text-opacity-40 lg:text-[25px] md:text-[20px] sm:txt-[17px] max-sm:text-[10px] font-bold capitalize text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
            voluptatem magnam, possimus veniam sunt non itaque cupiditate?
          </p>
        </div>
        <div className="w-fit h-fit">
          <a className="w-[200px] h-[70px] bg-[#101926] capitalize text-center leading-[70px] text-white font-bold block rounded-[35px] cursor-pointer">
            get started
          </a>
        </div>
      </div>

      <div className="w-full bg-slate-700 h-[200px] active">
        <img
          src="https://i.pinimg.com/564x/d6/b9/fc/d6b9fc0d7a5a7a21e9cce2022b11aadb.jpg"
          className="w-full h-full object-cover"
        ></img>
      </div>
    </div>
  );
};

export default Firstsection;
