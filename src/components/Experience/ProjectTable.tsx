import { IExpandStatus } from "@interface/Model/common";
import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { projectList } from '../../configs/projectConfig';

function ProjectTable() {
  const [expandTable, setExpandTable] = useState<IExpandStatus>({
    key: -1,
    status: false,
  });

  const renderTbody = () => {
    return projectList.map((project, index) => {
      return (
        <ProjectDetail
          project={project}
          key={index}
          expandTable={expandTable}
          setExpandTable={setExpandTable}
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
