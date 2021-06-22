import { Grid } from "@material-ui/core";
import React from "react";
import FooterSection, { IFooterList } from "./FooterSection";
import { Facebook, GitHub, LinkedIn, Web } from "@material-ui/icons";

function Footer() {
  const section1: Array<IFooterList> = [
    {
      children: "203 Fake St. Mountain View, San Francisco, California, USA",
      icon: <Web />,
    },
    {
      children: "203 Fake St. Mountain View, San Francisco, California, USA",
      icon: <Web />,
    },
    {
      children: "203 Fake St. Mountain View, San Francisco, California, USA",
      icon: <Web />,
    },
  ];
  const section2: Array<IFooterList> = [
    {
      children: "Facebook/dat662",
      icon: <Facebook />,
      link: "https://www.facebook.com/dat662",
    },
    {
      children: "Github/thanhdat240220",
      icon: <GitHub />,
      link: "https://github.com/thanhdat240220",
    },
    {
      children: "LinkedIn",
      icon: <LinkedIn />,
      link: "#",
    },
  ];
  return (
    <>
      <div id="footer">
        <div className="footer__wrapper">
          <Grid container direction="row">
            <Grid item lg={6} className="footer__item">
              <FooterSection listItem={section1} title="ARCHIVES" />
            </Grid>
            <Grid item lg={6} className="footer__item">
              <FooterSection listItem={section2} title="Have question for me" />
            </Grid>
          </Grid>
          <div className="copy-right">
            Copyright ©2021 All rights reserved <br />
            This template is made by thanhdat240220@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
