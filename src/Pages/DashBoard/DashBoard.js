import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SideBar from "../../components/Dashboard/DashBoardSideBar/SideBar";
import DashboardNavBar from "../../components/Dashboard/DashBoardSideBar/DashboardNavBar";
import DashboardContent from "../../components/Dashboard/DashContent/DashboardContent/DashboardContent";
import Void from "../../components/Dashboard/DashContent/DashboardContent/void";
import MockExam from "../../components/Dashboard/MockExams/MockExam";
import Evaluation from "../../components/Dashboard/EvaluationScreen/Evaluation";

const NewDashBoard = () => {
  const location = useLocation();

  // Check if the current path includes "evaluation"
  const isEvaluationRoute = location.pathname.includes(
    "/mock-exam/evaluation/"
  );

  return (
    <div className="m-0">
      {!isEvaluationRoute && <DashboardNavBar />}
      <div className="flex w-screen h-full pt-40 gap-3">
        {!isEvaluationRoute && <Void />}
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="mock-exam" element={<MockExam />} />
            <Route path="/mock-exam/evaluation/:id" element={<Evaluation />} />
            {/* Add more dashboard specific routes here */}
          </Routes>
        </div>
      </div>
      {!isEvaluationRoute && <SideBar />}
    </div>
  );
};

export default NewDashBoard;
