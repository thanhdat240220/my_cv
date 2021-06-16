import {
    Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
} from "@material-ui/core";
import React from "react";

function Login() {
  return (
    <>
      <div className="page-fluid">
        <h3>Hello</h3>
        <div className="login-form-container">
          <div className="login-form-wrapper">
            <form className="login-form">
              <Grid container direction="row" spacing={3}>
                <Grid item xs={12} md={12}>
                  <FormControl size="medium" fullWidth={true}>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-email" type="text" name="email" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl  size="medium" fullWidth={true}>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-password" type="password" name="password" aria-describedby="my-helper-text" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl>
                        {/* <Button type="">Login</Button> */}
                    </FormControl>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
