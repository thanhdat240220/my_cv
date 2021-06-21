// https://demo.dashboardpack.com/architectui-angular-pro/
import React, { useState } from "react";
import { AppsOutlined, ArrowDropUp } from "@material-ui/icons";
import LogoSidebar from "@assets/img/theme/admin/logo.png";

interface ISidebar {
  id: number;
  name: string;
  children?: Array<ISidebar>;
}

function AdminTheme() {
  const [sidebarState, setSidebarState] = useState({
    activeId: 1,
    openDropdown: true,
    dropdownId: 0,
    sidebarMini: false,
  });

  const sidebars: Array<ISidebar> = [
    {
      id: 1,
      name: "Dashboard",
      children: [
        {
          id: 1,
          name: "Analytics",
        },
        {
          id: 2,
          name: "Management",
        },
        {
          id: 3,
          name: "Statics",
        },
      ],
    },
    {
      id: 2,
      name: "Page",
      children: [
        {
          id: 4,
          name: "Login",
        },
        {
          id: 5,
          name: "Register",
        },
      ],
    },
  ];

  const checkDropdownOpen = (sidebar: ISidebar) => {
    if (sidebarState.dropdownId === 0)
      return (
        sidebarState.openDropdown &&
        sidebar.children &&
        sidebar.children.map((c) => c.id).indexOf(sidebarState.activeId) > -1
      );
    else
      return sidebarState.dropdownId === sidebar.id
        ? sidebarState.openDropdown
        : false;
  };

  const toggleDropDown = (dropdownId: number) => {
    setSidebarState({
      ...sidebarState,
      openDropdown:
        sidebarState.dropdownId === dropdownId
          ? !sidebarState.openDropdown
          : true,
      dropdownId: dropdownId,
    });
  };

  const renderSidebar = () => {
    return sidebars.map((sidebar, index) => {
      return (
        <React.Fragment key={index}>
          <div className="wrapper-btn-toggle">
            <div
              className={`btn-toggle-gr-dropdown ${
                checkDropdownOpen(sidebar) ? "open" : ""
              }`}
              onClick={() => toggleDropDown(sidebar.id)}
              data-index="1"
            >
              <span className="icon icon-af">
                <AppsOutlined />
              </span>
              <span className="name-text">{sidebar.name}</span>
              <span className="icon icon-bf">
                <ArrowDropUp />
              </span>
            </div>
          </div>
          <div
            className={`gr-link-dropdown ${
              checkDropdownOpen(sidebar) ? "show" : ""
            }`}
            data-index-open="1"
          >
            <ul className="gr-link-list">
              {sidebar.children?.map((child, index) => {
                return (
                  <li>
                    <a
                      href="/"
                      className={`gr-link-item ${
                        child.id === sidebarState.activeId ? "active" : ""
                      }`}
                    >
                      Analytics
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </React.Fragment>
      );
    });
  };
  const miniSidebar = () => {
    setSidebarState({
      ...sidebarState,
      sidebarMini: !sidebarState.sidebarMini,
    });
  };

  return (
    <>
      <div id="admin-theme">
        <section
          id="sidebar"
          className={`${sidebarState.sidebarMini ? "mini-sidebar" : ""}`}
        >
          <div className="sidebar-head">
            <div
              className="logo"
              style={{
                backgroundImage: `url(${LogoSidebar})`,
              }}
            ></div>
            <div
              className={`btn-hamburger ${
                sidebarState.sidebarMini ? "active" : ""
              }`}
              onClick={() => miniSidebar()}
            >
              <span></span>
            </div>
          </div>
          <div className="sidebar-body">
            <h4 className="sidebar-gr-name">Main Navigation</h4>
            <div className="group-link">{renderSidebar()}</div>
          </div>
        </section>
        <section id="header"></section>
        <section id="content"></section>
      </div>
    </>
  );
}

export default AdminTheme;
