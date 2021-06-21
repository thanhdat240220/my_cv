import { Grid } from "@material-ui/core";
import React, { useCallback } from "react";
import Carousel from "@components/Carousel";
import Footer from "./partials/Footer";
import Sidebar from "./partials/Sidebar";
import {
  GetSidebarStateContext,
  SidebarStateProvider,
} from "@stores/context";

function Home({ children }: { children: React.ReactElement }) {
  const { sidebarState } = GetSidebarStateContext();
  console.log(sidebarState.href);
  const renderSidebar = useCallback(() => {
    console.log("renderSidebar");
    return <Sidebar href={sidebarState.href} />;
  }, []);

  return (
    <>
      <SidebarStateProvider>
        <div id="page__profile">
          <Grid container direction="row">
            {renderSidebar()}
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
