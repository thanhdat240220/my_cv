import React from "react";
import { useHistory } from "react-router-dom";
import { updateSidebarAndExpand } from "~/stores/action/layoutAction";
import { GetSidebarStateContext } from "~/stores/context";
import { projectList } from "../../configs/projectConfig";
import { routes } from "../../configs/route";

function Carousel() {
  const history = useHistory();
  const { sidebarUpdateDispatch, sidebarState } = GetSidebarStateContext();
  const redirectDetail = (key: number) => {
    if (
      sidebarState.href !== routes.experience.path ||
      sidebarState.expandKey !== key
    ) {
      sidebarUpdateDispatch(
        updateSidebarAndExpand(routes.experience.path, key)
      );
      if (window.location.pathname !== routes.experience.path)
        history.push(routes.experience.path);
    }
  };
  const renderCarousel = () => {
    return projectList.map((project, index) => {
      return (
        <li className="carousel__list__item" key={index}>
          <div className="card-glassmorphism">
            <div className="card__face face-front">
              <div className="front-container">
                <img src={project.thumbnail} alt={`image_${index}`} />
                <div className="front-content">
                  <h3 className="title">{project.name}</h3>
                </div>
              </div>
            </div>
            <div className="card__face face-back">
              <div className="back-container">
                <div className="desc">{project.desc}</div>
              </div>
              <button
                className="btn btn-more"
                onClick={() => redirectDetail(project.key)}
              >
                More Detail
              </button>
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <div className="main-carousel">
        <div className="carousel-wrapper">
          <ul className="carousel__list">{renderCarousel()}</ul>
        </div>
      </div>
    </>
  );
}

export default Carousel;
