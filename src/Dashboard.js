import React from "react";
import DashboardCard from "./DashboardCard";
import Graphs from "./Graphs";
import Illustrations from "./Illustrations";
import ProjectCard from "./ProjectCard";

function Dashboard() {
  const data = [
    
      {
        title: "Leads",
        number: "30",
        icon: "fa-calendar",
        color: "dodgerblue",
      },
      {
        title: "contact",
        number: "20,000",
        icon: "fa-dollar-sign",
        color: "#10e095",
      },
    
      {
        title: "Service Request",
        number: "18",
        icon: "fa-comments",
        color: "#f6c23e",
      },
    {
      title: "Tasks",
      number: "75%",
      icon: "fa-clipboard-list",
      progressbar: true,
      color: "#36b9cc",
    },
    {
      title: "Pending Requests",
      number: "18",
      icon: "fa-comments",
      color: "#f6c23e",
    },
  ];
  return (
    <div className="container-fluid">
      <h3 className="page-title mb-4">Dashboard</h3>
      <div className="row">
        {data.map((obj, index) => {
          return <DashboardCard key={index} data={obj} />;
        })}
      </div>
      <div className="row">
        <Graphs />
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <ProjectCard />
        </div>
        <div className="col-lg-6 mb-4">
          <Illustrations />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;