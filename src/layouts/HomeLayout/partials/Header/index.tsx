import { Container, Grid } from "@material-ui/core";
import React from "react";

function Header({}) {
  return (
    <>
      <Container id="header-container" maxWidth="lg">
        <Grid container >
          <Grid item xs={12} md={4} lg={4}>
            Avatar
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            Menu
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Header;
