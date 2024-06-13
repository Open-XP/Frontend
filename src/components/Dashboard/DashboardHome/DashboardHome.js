import React from "react";

export function DashoardHome() {
  return (
    <div className="flex w-full h-full flex-col pb-8 gap-4 max-w-7xl">
      <div className="flex flex-col">
        <div className="flex w-40 h-16 items-center gap-3 font-semibold text-2xl ml-14 mb-0">
          <img
            className="h-10 w-10"
            src={require("../../../icons/medal.png")}
          />
          <div>Rookie</div>
        </div>
        <div className="flex flex-col 2xl:flex-row 2xl:h-[28rem] gap-10 p-5  h-[100rem]">
          <div className="w-full 2xl:w-1/3 h-100 rounded-2xl bg-[#2D9CDB] font-bold text-2xl text-white text-center flex flex-col justify-center items-center gap-3">
            <img
              className="w-28 h-28"
              src={require("../../../icons/review.png")}
            />
            <div>
              Average Exam <br /> Score
            </div>
          </div>
          <div
            className="w-full 2xl:w-1/3 h-100 rounded-2xl font-bold text-2xl text-center flex flex-col justify-center items-center gap-3"
            style={{ border: "3px solid #2D9CDB" }}
          >
            <img
              className="w-28 h-28"
              src={require("../../../icons/customer-satisfaction.png")}
            />
            <div>
              Average Drill <br /> Score
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-1/3 h-100 rounded-2x gap-3 justify-center p-4">
            <div className="p-3 flex flex-col rounded-xl bg-[#2D9CDB] text-white">
              <div className="text-xl font-extrabold">Study Duration:</div>
              <div className="font-bold text-lg">60hrs</div>
            </div>
            <div className="p-3 flex flex-col rounded-xl bg-[#2D9CDB] text-white">
              <div className="text-xl font-extrabold">Study Ranking:</div>
              <div className="font-bold text-lg">1003</div>
            </div>
            <div className="p-3 flex flex-col rounded-xl bg-[#2D9CDB] text-white">
              <div className="text-xl font-extrabold">Drill Ranking</div>
              <div className="font-bold text-lg">45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashoardHome;
