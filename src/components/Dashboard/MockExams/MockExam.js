import React, { useState } from "react";
import ExamSetter from "./ExamSetter";

export function MockExam() {
  const [isExamSetterVisible, setExamSetterVisible] = useState(false);

  const showExamSetter = () => setExamSetterVisible(true);
  const hideExamSetter = () => setExamSetterVisible(false);

  return (
    <div className="flex flex-wrap w-full h-full gap-5 max-w-[100rem] mx-auto justify-center py-4">
      {isExamSetterVisible && <ExamSetter onClose={hideExamSetter} />}
      <button
        className="w-[35rem] h-[21rem] 2xl:w-1/3 p-3 rounded-lg"
        style={{ border: "solid #2D9CDB" }}
      >
        <div
          onClick={showExamSetter}
          className="flex flex-col w-full gap-3 h-[20rem] justify-center items-center"
        >
          <div>
            <img
              src={require("../../../icons/waec-logo.png")}
              className="w-52 h-52"
            />
          </div>
          <div className="font-bold text-2xl text-[#281266] w-[15rem] text-center">
            West African Exam Council
          </div>
        </div>
      </button>
      <button
        className="w-[35rem] h-[21rem] 2xl:w-1/3 p-3 rounded-lg"
        style={{ border: "solid #2D9CDB" }}
      >
        <div
          onClick={showExamSetter}
          className="flex flex-col w-full gap-3 h-[20rem] justify-center items-center"
        >
          <div>
            <img
              src={require("../../../icons/jamb_logo.png")}
              className="w-52 h-52"
            />
          </div>
          <div className="font-bold text-2xl text-[#281266] w-[15rem] text-center">
            Joint Admissions & Matriculation Board
          </div>
        </div>
      </button>
      <button
        className="w-[35rem] h-[21rem] 2xl:w-1/3 p-3 rounded-lg"
        style={{ border: "solid #2D9CDB" }}
      >
        <div
          onClick={showExamSetter}
          className="flex flex-col w-full gap-3 h-[20rem] justify-center items-center"
        >
          <div>
            <img
              src={require("../../../icons/neco_logo.png")}
              className="w-57 h-52"
            />
          </div>
          <div className="font-bold text-2xl text-[#281266] w-[16rem] text-center">
            The National Examinations Council
          </div>
        </div>
      </button>
      <button
        className="w-[35rem] h-[21rem] 2xl:w-1/3 p-3 rounded-lg"
        style={{ border: "solid #2D9CDB" }}
      >
        <div className="w-full h-[20rem]">
          <div>General Certificate of Education</div>
        </div>
      </button>
    </div>
  );
}

export default MockExam;
