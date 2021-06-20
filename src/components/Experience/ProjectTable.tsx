import React from "react";
import ProjectDetail from "./ProjectDetail";
import { projectList } from "../../configs/projectConfig";
import { GetSidebarStateContext } from "~/stores/context";

function ProjectTable() {
  const { sidebarState, sidebarUpdateDispatch } = GetSidebarStateContext();
  const renderTbody = () => {
    return projectList.map((project, index) => {
      return (
        <ProjectDetail
          project={project}
          key={index}
          expandTable={sidebarState}
          setExpandTable={sidebarUpdateDispatch}
        />
      );
    });
  };
  return (
    <table className="project-item__table">
      <thead>
        <tr>
          <th>Project</th>
          <th>Time</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{renderTbody()}</tbody>
    </table>
  );
}

export default ProjectTable;
