import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import { useHistory } from "react-router-dom";
import BackgroundSidebar from "../../../../assets/public/bg-sidebar.jpg";
import { sidebarList } from "../../../../configs/sidebar";
import { updateSidebarState } from "~/stores/action/layoutAction";
import { GetSidebarStateContext } from "~/stores/context";

function Sidebar() {
  console.MyConsoleInfo("rendersidebar");
  const { sidebarState, sidebarUpdateDispatch } = GetSidebarStateContext();
  const history = useHistory();

  useEffect(() => {
    const path = window.location.pathname;
    sidebarUpdateDispatch(updateSidebarState(path));
  }, []);
  return (
    <>
      <div
        id="sidebar"
        style={{
          backgroundImage: `url(${BackgroundSidebar})`,
        }}
      >
        <Grid container>
          <Grid xs={12} item>
            <Logo />
          </Grid>
          <Grid xs={12} item>
            <ul className="sidebar-list">
              {sidebarList.map((sidebar) => {
                return (
                  <li className="sidebar-list__item" key={sidebar.href}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.location.pathname !== sidebar.href) {
                          sidebarUpdateDispatch(
                            updateSidebarState(sidebar.href)
                          );
                          history.push(sidebar.href);
                        }
                      }}
                      className={`sidebar-list__item__link ${
                        sidebarState.href === sidebar.href ? "active" : ""
                      } font-700`}
                    >
                      {sidebar.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Grid>
          <Grid xs={12} className="sidebar-footer" item>
            <div className="sidebar-footer__wrapper">
              <h3 className="sidebar-footer__title">My Contact</h3>
              <ul className="sidebar-footer__contact">
                <li>thanhdat240220@gmail.com</li>
                <li>+84 848484848</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default React.memo(Sidebar);
