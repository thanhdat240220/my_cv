import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Logo from "../Logo";
import { useHistory } from "react-router-dom";
// import BackgroundSidebar from "../../../../assets/public/bg-sidebar.jpg";

type TSidebarList = Array<{
  icon?: React.ReactElement;
  name: string;
  href: string;
}>;

function Sidebar() {
  const BackgroundSidebar =
    "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80";
  console.MyConsoleInfo("sidebar-render");
  const [statusSidebar, setStatusSidebar] = useState<{
    current: string;
  }>({
    current: document.location.pathname,
  });
  const history = useHistory();
  const sidebarList: TSidebarList = [
    {
      name: "Information",
      href: "/information",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Other",
      href: "/other",
    },
  ];

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
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(sidebar.href);
                        setStatusSidebar({
                          current: sidebar.href,
                        });
                      }}
                      className={`sidebar-list__item__link ${
                        statusSidebar.current === sidebar.href ? "active" : ""
                      } font-700`}
                    >
                      {sidebar.name}
                    </a>
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

export default Sidebar;
