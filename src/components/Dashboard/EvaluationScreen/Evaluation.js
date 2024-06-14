import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

class Evaluation extends Component {
  render() {
    return (
      <div className="flex flex-col w-screen h-screen -m-[9.9rem]">
        <div className="flex w-screen justify-center shadow-xl">
          <div className="flex flex-row w-[80%] h-[6.375rem] justify-between items-center">
            <div className="flex gap-4 items-center">
              <Link to={"/dashboard"}>
                <button className="flex w-[1.8rem] h-[1.8rem]">
                  <ArrowLeftIcon />
                </button>
              </Link>
              <div className="font-[700] text-[1.5rem]">
                Mathematics Question: 2010
              </div>
            </div>
            <div className="flex text-[#2D9CDB] text-[1.5rem] font-[700] items-center">
              <div>Timer: 25mins Left</div>
            </div>
          </div>
        </div>
        <div className="flex w-screen justify-center mt-[8.25rem]">
          <div className="flex flex-col w-[80%] mt-[rem] gap-4">
            <div className="font-[400] text-[#3C3C3C] text-[1.5rem]">
              Question 1/60
            </div>
            <div className="font-[500] h-fit text-[2.25rem]">
              If the sum of the interior angles of a polygon is 1080°, how many
              sides does the polygon have?
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4">
                <input type="radio" className="w-[1.938rem] h-[1.938rem]" />
                <div className="font-[600] text-[2rem]">3</div>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" className="w-[1.938rem] h-[1.938rem]" />
                <div className="font-[600] text-[2rem]">4</div>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" className="w-[1.938rem] h-[1.938rem]" />
                <div className="font-[600] text-[2rem]">5</div>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" className="w-[1.938rem] h-[1.938rem]" />
                <div className="font-[600] text-[2rem]">8</div>
              </div>
              <div className="flex items-center gap-4">
                <input type="radio" className="w-[1.938rem] h-[1.938rem]" />
                <div className="font-[600] text-[2rem]">6</div>
              </div>
            </div>
            <div className="flex justify-between pt-[3rem]">
              <button className="bg-[#281266] w-[12.25rem] h-[4.5rem] rounded-lg font-[700] text-white text-[1.5rem]">
                Previous
              </button>
              <button className="bg-[#BBE6FF] w-[12.25rem] h-[4.5rem] rounded-lg font-[700] text-[1.5rem]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Evaluation;
