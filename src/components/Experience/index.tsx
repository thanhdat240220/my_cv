import React from "react";
import ProjectTimeLine from "./ProjectTimeLine";
import ProjectTable from "./ProjectTable";
import { listTechDefault } from "~/configs/languageDev";

export interface IExpandStatus {
  key: number;
  status: boolean;
}
type TDetailProject = {
  repository?: string;
  teamSize?: number;
  listTech?: Array<listTechDefault>;
  libraries?: Array<{
    name: string;
    link?: string;
  }>;
};
export interface IProjectList {
  key: number;
  name: string;
  time: string;
  desc?: string;
  linkDemo?: string;
  detail?: TDetailProject;
}

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
