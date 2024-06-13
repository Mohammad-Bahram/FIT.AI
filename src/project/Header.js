import React from "react";
const Header = () => {
  return (
    <header className="w-full h-[100px]  bg-[#edf6fd] flex flex-row items-center justify-center">
      <div className=" flex flex-wrap flex-row justify-between items-center w-[86.11%] h-[60px] bg-white rounded-[30px]">
        <div className="logo w-fit h-auto text-black capitalize font-bold text-[30px] ml-5 ">
          <span>FIT.AI</span>
        </div>
        <nav className="w-[50%] h-full bg-blue-150 flex flex-wrap flex-row justify-evenly  items-center  max-md:hidden ">
          <a
            className="font-bold xl:text-[20px] lg:text-[18px] md:text-[11px] w-fit text-center h-fit   opacity-50 
       hover:opacity-100
            transition-all ease-linear duration-300 capitalize"
            href="#"
          >
            home
          </a>
          <a
            className="font-bold xl:text-[20px] lg:text-[16px] md:text-[11px] w-fit text-center h-fit opacity-50 
            hover:opacity-100
            transition-all ease-linear duration-300 capitalize"
            href="#"
          >
            about us
          </a>
          <a
            className="font-bold xl:text-[20px] lg:text-[16px] md:text-[11px] w-fit text-center h-fit opacity-50 
            hover:opacity-100
            transition-all ease-linear duration-300 capitalize"
            href="#"
          >
            how it works
          </a>
          <a
            className="font-bold xl:text-[20px] lg:text-[16px] md:text-[11px] w-fit text-center h-fit opacity-50 
            hover:opacity-100
            transition-all ease-linear duration-300 capitalize"
            href="#"
          >
            trainers
          </a>
          <a
            className="font-bold xl:text-[20px] lg:text-[16px] md:text-[11px] w-fit text-center h-fit opacity-50 
            hover:opacity-100
            transition-all ease-linear duration-300 capitalize"
            href="#"
          >
            contact us
          </a>
        </nav>
        <div className="lg:w-[250px] md:w-[200px] sm:w-[180px] max-sm:w-[120px] h-full pr-[0.75%]   rounded-[30px] flex flex-row flex-wrap justify-between items-center">
          <a className="text-[#050505] ml-[7%] lg:text-[16px] md:text-[14px] sm:text-[14] max-sm:text-[12px] capitalize font-bold cursor-pointer">
            log in
          </a>
          <a
            className="lg:text-[16px] cursor-pointer  md:text-[14px] sm:text-[14] lg:w-[165px] font-bold sm:w-[110px] max-sm:w-[65px] max-sm:h-[35px] max-sm:leading-[35px] max-sm:text-[12px] md:w-[130px] text-center bg-[#101926] text-white h-[50px] leading-[50px] rounded-[40px] 
            hover:text-[#fa3838]
            transition-all ease-linear duration-300 capitalize"
          >
            sign up
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
