import React from "react";
const Footer = () => {
  return (
    <footer className="w-full h-fit pt-16 bg-[#101926] flex flex-col flex-wrap justify-start items-center gap-y-6">
      <h2 className="text-center lg:w-[45%] md:w-[55%] sm:w-[65%] lg:text-[40px] md:text-[30px] sm:text-[35px] max-sm:text-[25px] font-bold capitalize max-sm:w-[75%] text-white ">
        ready to get started?
      </h2>
      <p className="lg:w-[55%] md:w-[70%] h-fit sm:w-[80%] max-sm:w-[85%] text-white text-opacity-40  lg:text-[22px] md:text-[20px] sm:txt-[25px] max-sm:text-[15px] font-bold capitalize text-center">
        Our Platform Ensures That You Have Access To A Diverse Pool of Highly
        Qualified Trainers, Allowing You To Choose The Perfect Match Based On
        Your Unique Preferences And Requirements.
      </p>
      <a className="lg:w-[230px] md:w-[220px] max-md:w-[210px] text-[#101926] bg-white capitalize text-center leading-[70px]  font-bold text-[20px] block rounded-[35px] cursor-pointer max-md:mx-auto">
        get started
      </a>
      <div className="w-[86.11%] border-t-2 h-fit border-[#ffffff71] border-solid pt-8 text-white flex md:flex-row flex-wrap md:justify-between items-center max-md:flex-col max-md:justify-start max-md:items-center max-md:gap-y-5 ">
        <div className="w-fit h-fit">
          <span
            className="lg:text-[14px]
          md:text-[12px] capitalize font-bold max-md:text-[20px]"
          >
            &#169; 2023,all right reserved
          </span>
        </div>
        <div className="w-fit flex flex-wrap flex-row justify-center gap-4 items-center">
          <div className="bg-white rounded-[35px]">
            <img
              className="lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] max-md:w-[42px] max-md:h-[42px] object-cover mix-blend-multiply "
              src="https://i.pinimg.com/564x/ca/29/86/ca2986a43d699a2e11ccc83fd5fb9630.jpg"
              alt="insta"
            ></img>
          </div>
          <div className="rounded-[35px]">
            <img
              className="lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] max-md:w-[42px] max-md:h-[42px] object-cover  rounded-[35px] "
              src="https://i.pinimg.com/564x/e5/1d/19/e51d196eda65d3d222c611efd2bb8c7b.jpg"
              alt="insta"
            ></img>
          </div>
          <div className="rounded-[35px]">
            <img
              className="lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] max-md:w-[42px] max-md:h-[42px] object-cover  rounded-[35px] "
              src="https://i.pinimg.com/564x/bb/62/af/bb62afe819b11af8384f2fb814acf28a.jpg"
              alt="insta"
            ></img>
          </div>
          <div className="rounded-[35px]">
            <img
              className="lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] max-md:w-[42px] max-md:h-[42px] object-cover  rounded-[35px] "
              src="https://i.pinimg.com/564x/2b/e7/ce/2be7cee4fe404b8fa86d31d139fab757.jpg"
              alt="insta"
            ></img>
          </div>
          <div className="rounded-[35px]">
            <img
              className="lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] max-md:w-[42px] max-md:h-[42px] object-cover  rounded-[35px] "
              src="https://i.pinimg.com/564x/fd/0f/e5/fd0fe52386f19648a3ba7d650b12fefc.jpg"
              alt="insta"
            ></img>
          </div>
        </div>
        <div className="w-fit h-fit gap-x-3 flex flex-row  items-center">
          <span className="lg:text-[15px] md:text-[11px] max-md:text-[17px] text-white capitalize">
            terms of service
          </span>
          <span className="lg:text-[15px] md:text-[11px] max-md:text-[17px] text-white capitalize">
            FAQ
          </span>
          <span className="lg:text-[15px] md:text-[11px] max-md:text-[17px] text-white capitalize">
            privacy policy
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
