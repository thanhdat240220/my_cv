// https://demo.dashboardpack.com/architectui-angular-pro/
import React, { useEffect, useState } from "react";
import { AppsOutlined, ArrowDropUp, ArrowDropDown } from "@material-ui/icons";
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
    mobileLayout: {
      active: false,
      sidebarOpen: false,
      headerOpen: false,
    },
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateLayout();
    });
    updateLayout();
  }, []);

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

  const updateLayout = () => {
    if (
      window.innerWidth <= 992 &&
      !document
        .querySelector("#admin-theme")
        ?.classList.contains("mobile-layout")
    ) {
      setSidebarState({
        ...sidebarState,
        mobileLayout: {
          ...sidebarState.mobileLayout,
          active: true,
        },
      });
    } else if (
      window.innerWidth > 992 &&
      document
        .querySelector("#admin-theme")
        ?.classList.contains("mobile-layout")
    ) {
      setSidebarState({
        ...sidebarState,
        mobileLayout: {
          ...sidebarState.mobileLayout,
          active: false,
        },
      });
    }
  };

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
        <div className="wrapper-btn-toggle" key={index}>
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
          <div
            className={`gr-link-dropdown ${
              checkDropdownOpen(sidebar) ? "show" : ""
            }`}
            data-index-open="1"
          >
            <ul className="gr-link-list">
              {sidebar.children?.map((child, index) => {
                return (
                  <li key={index}>
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
        </div>
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
      <div
        id="admin-theme"
        className={`${sidebarState.sidebarMini ? "mini-sidebar" : ""} ${
          sidebarState.mobileLayout.active ? "mobile-layout" : ""
        }`}
      >
        <section
          id="sidebar-page"
          className={`${
            sidebarState.mobileLayout.sidebarOpen ? "mobile-open" : ""
          }`}
        >
          <div className="sidebar-head">
            <div
              className="logo"
              style={{
                backgroundImage: `url(${LogoSidebar})`,
              }}
            ></div>
          </div>
          <div className="sidebar-body">
            <h4 className="sidebar-gr-name">Layer Main</h4>
            <div className="group-link">{renderSidebar()}</div>
          </div>
          <div className="sidebar-footer">
            <div
              className={`btn-hamburger ${
                sidebarState.sidebarMini ? "active" : ""
              }`}
              onClick={() => miniSidebar()}
            >
              <span></span>
            </div>
          </div>
        </section>
        <section
          id="header-page"
          className={`${
            sidebarState.mobileLayout.headerOpen ? "mobile-open" : ""
          }`}
        >
          <div className="header-container">
            <div className="header-container-mobile">
              <div className="hamburger-sidebar">
                <div
                  className={`btn-hamburger ${
                    sidebarState.mobileLayout.sidebarOpen ? "active" : ""
                  }`}
                  onClick={() => {
                    setSidebarState({
                      ...sidebarState,
                      mobileLayout: {
                        ...sidebarState.mobileLayout,
                        sidebarOpen: !sidebarState.mobileLayout.sidebarOpen,
                      },
                    });
                  }}
                >
                  <span></span>
                </div>
              </div>
              <div className="logo">
                <img src={LogoSidebar} alt="" />
              </div>
              <div
                className="hamburger-head"
                onClick={() => {
                  setSidebarState({
                    ...sidebarState,
                    mobileLayout: {
                      ...sidebarState.mobileLayout,
                      headerOpen: !sidebarState.mobileLayout.headerOpen,
                    },
                  });
                }}
              >
                <span>Button</span>
              </div>
            </div>
            <div className="header-container-desktop">
              <div className="header-left"></div>
              <div className="header-right">
                <div className="item-header fast-actions line-right">
                  <ul className="fast-action__list">
                    <li>
                      <button className="fast-action__item">
                        <span className="icon">
                          <AppsOutlined />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="fast-action__item">
                        <span className="icon">
                          <AppsOutlined />
                        </span>
                      </button>
                    </li>
                    <li>
                      <button className="fast-action__item">
                        <span className="icon">
                          <AppsOutlined />
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="item-header personal-actions line-right">
                  <div className="personal-actions__container">
                    <div className="personal-actions__header">
                      <div className="avatar">
                        <img src={LogoSidebar} alt="avatar" />
                      </div>
                      <div className="info">
                        <h4 className="username">Tran Dat</h4>
                        <p className="nickname">Nickname</p>
                      </div>
                      <div className="icon-dropdown">
                        <ArrowDropDown />
                      </div>
                    </div>
                    <div className="personal-actions__body">
                      <ul className="dropdown">
                        <li>
                          <a href="/" className="dropdown-item">
                            Profile
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="/" className="dropdown-item">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item-header more-actions">
                  <div className="btn-hamburger">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="content-page"></section>
        <div
          className={`bg-layout-mb ${
            sidebarState.mobileLayout.sidebarOpen ? "active" : ""
          }`}
          onClick={() => {
            setSidebarState({
              ...sidebarState,
              mobileLayout: {
                ...sidebarState.mobileLayout,
                sidebarOpen: false,
              },
            });
          }}
        ></div>
      </div>
    </>
  );
}

export default AdminTheme;
