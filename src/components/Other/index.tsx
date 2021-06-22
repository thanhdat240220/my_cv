import React from "react";
import { useHistory } from "react-router-dom";
import { routes } from "~/configs/route";
import BgPersonal from "@assets/img/theme/personal/bg1.jpg";
import BgAdmin from "@assets/img/theme/admin/admin-preview.png";

function Other() {
  const history = useHistory();

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
                <button
                  className="btn btn-view-theme"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(routes.personal_theme.path);
                  }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </li>
        <li
          className="theme-item"
          style={{
            backgroundImage: `url(${BgAdmin})`,
          }}
        >
          <div className="wrap-content">
            <div className="content">
              <h3 className="title">Admin Dashboard</h3>
              <div className="action">
                <button
                  className="btn btn-view-theme"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(routes.admin_theme.path);
                  }}
                >
                  View
                </button>
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
