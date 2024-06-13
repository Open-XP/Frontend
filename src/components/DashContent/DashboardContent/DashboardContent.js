import React from "react";
import DashboardBarChart from "../../Graphs/Bargraph/Bar";
import AreaOfImprovement from "../../Dashboard/AreaOfImprovement/AreaOfImprovement";
import DashoardHome from "../../Dashboard/DashboardHome/DashboardHome";

export function DashoardContent() {
  return (
    <div className="flex w-full h-full flex-col pb-8 gap-4 max-w-7xl">
      <div>
        <DashoardHome />
      </div>
      <div className="shadow-lg p-5 rounded ">
        <DashboardBarChart />
      </div>
      <div className="p-5 shadow-lg mt-10 rounded mb-5">
        <AreaOfImprovement />
      </div>
    </div>
  );
}

export default DashoardContent;
