import { Grid } from "@material-ui/core";
import React from "react";
import Carousel from "~/components/Carousel";
import Footer from "./partials/Footer";
import Sidebar from "./partials/Sidebar";

function Home({ children }: { children: React.ReactElement }) {
  return (
    <>
      <div id="page__profile">
        <Grid container direction="row">
          <Sidebar />
          <Grid
            sm={12}
            md={12}
            lg={12}
            item
            className="offset-3 overflow-x-hidden"
          >
            <Grid container className="page-information">
              <Grid xs={12} md={12} lg={8} item >
                {children}
              </Grid>
              <Grid xs={4} item className="col-carousel">
                <Carousel />
              </Grid>
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
