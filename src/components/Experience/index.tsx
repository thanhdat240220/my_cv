import React from "react";
import ProjectTimeLine from "./ProjectTimeLine";
import ProjectTable from "./ProjectTable";

function MyExperience() {
  return (
    <>
      <div className="page-fluid">
        <div className="experience__wrapper">
          <h3 className="title__page">
            I have been two year exp in develop frontend
          </h3>
          <div className="list__project">
            <div className="list__project-item">
              <ProjectTimeLine />
              <ProjectTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyExperience;
