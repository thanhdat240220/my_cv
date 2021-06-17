import { Grid } from "@material-ui/core";
import React from "react";
import Carousel from "~/components/Carousel";
import Footer from "./partials/Footer";
import Sidebar from "./partials/Sidebar";
import { SidebarStateProvider } from "../../stores/context";

function Home({ children }: { children: React.ReactElement }) {
  return (
    <>
      <SidebarStateProvider>
        <div id="page__profile">
          <Grid container direction="row">
            <Sidebar />
            <Grid
              sm={12}
              md={12}
              lg={12}
              className="offset-md-3 overflow-x-hidden"
              item
            >
              <Grid container className="page-information">
                <Grid xs={12} md={12} lg={8} item>
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
      </SidebarStateProvider>
    </>
  );
}

export default Home;
