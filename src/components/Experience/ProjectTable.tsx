import React, { useState } from "react";
import { IProjectList, IExpandStatus } from "./";
import ProjectDetail from "./ProjectDetail";

function ProjectTable() {
  const [expandTable, setExpandTable] = useState<IExpandStatus>({
    key: -1,
    status: false,
  });
  const projectList: Array<IProjectList> = [
    {
      key: 1,
      name: "a",
      time: "1-2",
      desc: "desc",
      detail: {
        repository: "repository",
        teamSize: 4,
        listTech: ["javascript", "html", "scss/sass", "react", "typescript"],
        libraries: [{
          name: "ant",
          link: "https://ant.design/docs/react/introduce",
        }],
      },
    },
  ];

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
