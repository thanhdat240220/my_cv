import React from "react";
import Tag from "../@myMaterial/Tag";
import { IProject } from "@interface/Model/project";
import { listTechConfig } from "~/configs/languageDev";
import { ISidebarStateInit } from "@interface/State/layoutState";
import { IActionType } from "@interface/share";
import { updateExpand } from "~/stores/action/layoutAction";

function ProjectDetail({
  project,
  expandTable,
  setExpandTable,
}: {
  project: IProject;
  expandTable: ISidebarStateInit;
  setExpandTable: React.Dispatch<IActionType>;
}) {
  const checkNull = (variable: any) => {
    if (variable === null || variable === undefined || variable === "") {
      return "-";
    } else {
      return variable;
    }
  };
  const checkExpandTable = (key: number) => {
    return expandTable.expandKey === key;
  };
  const handleClickExpand = (key: number) => {
    setExpandTable(updateExpand(key));
  };
  const renderTechTags = (tags: Array<string> | undefined) => {
    if (tags)
      return tags.map((tag, index) => {
        const tech = listTechConfig.find((_tech) => _tech.name === tag);
        return (
          <Tag key={index} color={tech?.color} link={tech?.link}>
            {tag}
          </Tag>
        );
      });
    else return "-";
  };
  const renderLibraries = (
    libraries:
      | Array<{
          name: string;
          link?: string;
        }>
      | undefined
  ) => {
    if (libraries)
      return libraries.map((library, index) => {
        return (
          <Tag key={index} link={library.link}>
            {library.name}
          </Tag>
        );
      });
    else return "-";
  };
  return (
    <>
      <tr
        data-expand__index={project.key}
        onClick={() => handleClickExpand(project.key)}
      >
        <td>{checkNull(project.name)}</td>
        <td>{checkNull(project.time)}</td>
        <td>{checkNull(project.desc)}</td>
      </tr>
      <tr>
        <td
          colSpan={3}
          className={`expand__index-index ${
            checkExpandTable(project.key) ? "" : "close"
          }`}
        >
          <ul className="project-detail__list m-list">
            <li className="project-detail__item m-list__item">
              <span className="item__title">Repository: </span>
              <span className="item__content">
                {checkNull(project.detail?.repository)}
              </span>
            </li>
            <li className="project-detail__item m-list__item">
              <span className="item__title">Team Size: </span>
              <span className="item__content">
                {checkNull(project.detail?.teamSize)}
              </span>
            </li>
            <li className="project-detail__item m-list__item">
              <span className="item__title">Tech List: </span>
              <span className="item__content d-inline-flex">
                {renderTechTags(project.detail?.listTech)}
              </span>
            </li>
            <li className="project-detail__item m-list__item">
              <span className="item__title">Library: </span>
              <span className="item__content d-inline-flex">
                {renderLibraries(project.detail?.libraries)}
              </span>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default ProjectDetail;
