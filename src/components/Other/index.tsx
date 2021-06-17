import React from "react";
import BgPersonal from "../../assets/img/theme/background-personal.jpg";

function Other() {
  return (
    <>
      <ul className="theme-list">
        <li
          className="theme-item"
          style={{
            backgroundImage: `url(${BgPersonal})`,
          }}
        >
          <div className="wrap-content">
            <div className="content">
              <h3 className="title">Personal Portfolio</h3>
              <div className="action">
                <button className="btn btn-view-theme">View</button>
              </div>
            </div>
          </div>
        </li>
        <li className="theme-item">
          <div className="wrap-content">
            <div className="content">
              <h3 className="title">Personal Portfolio</h3>
              <div className="action">
                <button className="btn btn-view-theme">View</button>
              </div>
            </div>
          </div>
        </li>
        <li className="theme-item">
          <div className="wrap-content">
            <div className="content">
              <h3 className="title">Personal Portfolio</h3>
              <div className="action">
                <button className="btn btn-view-theme">View</button>
              </div>
            </div>
          </div>
        </li>
        <li className="theme-item">
          <div className="wrap-content">
            <div className="content">
              <h3 className="title">Personal Portfolio</h3>
              <div className="action">
                <button className="btn btn-view-theme">View</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Other;
