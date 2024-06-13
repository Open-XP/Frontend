import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  XMarkIcon,
  InformationCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export function ExamSetter({ onClose }) {
  const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);
  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const subjects = ["Mathematics", "English", "Biology", "Chemistry"];
  const years = ["2010", "2011", "2012", "2013"];

  const isSelectionComplete = selectedSubject && selectedYear;

  return (
    <div className="flex w-screen h-screen fixed bg-gray-300 bg-opacity-50 drop-shadow-2xl backdrop-blur-sm justify-center -mt-[3.2rem]">
      <div className="flex w-[30rem] h-[40rem] 2xl:w-[46rem] 2xl:h-[35.938rem] flex-col justify-center bg-white items-center gap-4 mt-[6rem]">
        <div className="flex w-[80%] justify-between items-center">
          <div className="flex items-center text-[2rem] font-[600]">
            Pick Subject of Your Choice
          </div>
          <button onClick={onClose} className="w-[2.5rem] h-[2.5rem]">
            <XMarkIcon />
          </button>
        </div>
        <div className="flex w-[80%] gap-4">
          <div className="flex w-[2.313rem] h-[2.313rem] items-center">
            <InformationCircleIcon />
          </div>
          <div className="text-[0.813rem] font-[400]">
            Choose the Subject you would like to take a test on, with our wide
            range of materials and past questions
          </div>
        </div>
        <div className="flex flex-col w-[80%] gap-2 relative">
          <div className="text-[1rem] font-[400]">Subject</div>
          <div
            className="flex items-center h-[2.938rem] px-3 cursor-pointer"
            style={{ backgroundColor: "rgba(60, 60, 60, 0.09)" }}
            onClick={() => setSubjectDropdownOpen(!subjectDropdownOpen)}
          >
            <div className="w-[97.5%]">
              {selectedSubject || "Select a subject"}
            </div>
            <div className="w-[0.762rem] h-[0.415]">
              <ChevronDownIcon />
            </div>
          </div>
          {subjectDropdownOpen && (
            <div className="absolute top-[4rem] left-0 w-full bg-white border border-gray-300 z-10">
              {subjects.map((subject) => (
                <div
                  key={subject}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSelectedSubject(subject);
                    setSubjectDropdownOpen(false);
                  }}
                >
                  {subject}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col w-[80%] gap-2 relative">
          <div className="text-[1rem] font-[400]">Past Question Year</div>
          <div
            className="flex items-center h-[2.938rem] px-3 cursor-pointer"
            style={{ backgroundColor: "rgba(60, 60, 60, 0.09)" }}
            onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
          >
            <div className="w-[97.5%]">{selectedYear || "Select a year"}</div>
            <div className="w-[0.762rem] h-[0.415]">
              <ChevronDownIcon />
            </div>
          </div>
          {yearDropdownOpen && (
            <div className="absolute top-[4rem] left-0 w-full bg-white border border-gray-300 z-10">
              {years.map((year) => (
                <div
                  key={year}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSelectedYear(year);
                    setYearDropdownOpen(false);
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
        {isSelectionComplete && (
          <div className="w-[80%]" style={{ color: "red" }}>
            Are you sure you picked the right subject and year? Look over it
            carefully.
          </div>
        )}
        <Link
          className="flex items-center justify-center w-[80%] h-[4.813rem] text-center text-[2rem] font-[600] text-white bg-[#281266] no-underline"
          to={"/dashboard/evaluation"}
        >
          <button className="">Start Test</button>
        </Link>
      </div>
    </div>
  );
}

export default ExamSetter;
