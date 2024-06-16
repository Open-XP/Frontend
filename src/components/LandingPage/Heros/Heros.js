import React from "react";
import { Link } from "react-router-dom";

const Heros = () => {
  return (
    <div className="relative flex w-full justify-center">
      <div className="absolute w-full h-[55rem] bg-[#281266] -z-10"></div>
      <img
        src={require("../OverLay/openxp.png")}
        alt="Background overlay"
        className="absolute w-[50%] h-[50rem] object-cover -z-10 mix-blend-multiply"
      />
      <div className="flex w-[90rem] h-[50rem] z-10 mt-[5rem]">
        <div className="flex w-1/2 justify-end items-center">
          <div className="flex flex-col w-[40.5rem] h-[18.9rem] justify-between">
            <h1 className="font-[700] text-[2.5rem] leading-[3.4rem] font-sans text-white">
              Prepare for Your University Exams, and Scholarship Exams.
            </h1>
            <div className="font-[500] text-[0.875rem] leading-[1.192rem] font-sans text-white">
              Embark on a journey towards academic excellence and scholarship
              triumphs. At <br /> Opensourcexp, we offer expert guidance,
              strategic exam prep, and scholarship <br />
              mastery.
            </div>
            <div className="flex gap-[0.75rem]">
              <button className="w-[11.75rem] h-[3.438rem] border-none rounded-[0.563rem] font-sans font-[700] text-[1.25rem] bg-[#2D9CDB] text-white">
                Take Test Now
              </button>
              <button className="w-[9.125rem] h-[3.438rem] border border-white rounded-[0.563rem] font-sans font-[700] text-[1.25rem] text-white">
                Study
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex flex-col w-[31.375rem] h-[38.9rem] items-center justify-center gap-[1.25rem] border rounded-[0.75rem] bg-white">
            <div className="flex flex-col w-[22.375rem] gap-[1.25rem]">
              <h1 className="font-[700] leading-[2.213rem] text-[1.625rem] font-sans">
                Start Preparing For Exams
              </h1>
              <div className="font-[600] font-sans text-[1.25rem] leading-[1.703rem]">
                Email Address<span className="text-red-700">*</span>
              </div>
            </div>
            <div className="flex flex-col w-[22.375rem] gap-[1.813rem]">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-[22.375rem] h-[3.375rem] border border-gray-300 rounded-[0.563rem] pl-[1.25rem] text-[0.875rem] font-sans"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-[22.375rem] h-[3.75rem] border border-gray-300 rounded-[0.563rem] pl-[1.25rem] text-[0.875rem] font-sans"
              />
              <button className="w-[22.375rem] h-[3.75rem] border rounded-[0.563rem] font-sans font-[700] text-[1.25rem] bg-[#2D9CDB] text-white">
                Start Learning For Free
              </button>
            </div>
            <div className="flex w-[22.375rem] justify-center items-center gap-[0.563rem]">
              <div className="w-[8.1rem] h-[1px] bg-[#3C3C3C]"></div>
              <div className="w-[6rem]">or Join Using</div>
              <div className="w-[8.1rem] h-[1px] bg-[#3C3C3C]"></div>
            </div>
            <div className="flex flex-row justify-between w-[23.625rem]">
              <div className="flex flex-row w-[7.5rem] h-[3.188rem] justify-center items-center gap-[0.5rem]">
                <img
                  className="w-[1.688rem] h-[1.688rem]"
                  src={require("../../../icons/linkedin.png")}
                  alt="Google"
                />
                <div className="h-[1.688rem]">LinkedIn</div>
              </div>
              <div className="flex flex-row w-[7.5rem] h-[3.188rem] justify-center items-center gap-[0.5rem]">
                <img
                  className="w-[1.688rem] h-[1.688rem]"
                  src={require("../../../icons/google.png")}
                  alt="Google"
                />
                <div className="h-[1.688rem]">Google</div>
              </div>
              <div className="flex flex-row w-[7.5rem] h-[3.188rem] justify-center items-center gap-[0.5rem]">
                <img
                  className="w-[1.688rem] h-[1.688rem]"
                  src={require("../../../icons/facebook.png")}
                  alt="Google"
                />
                <div className="h-[1.688rem]">Facebook</div>
              </div>
            </div>
            <div className="font-[600] text-[0.813rem] leading-[1.106rem]">
              By continuing you accept the{" "}
              <span className="text-blue-700">Terms of Use</span> and{" "}
              <span className="text-blue-700">Privacy Policy.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heros;
