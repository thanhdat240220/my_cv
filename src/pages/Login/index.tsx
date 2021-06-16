import React from "react";
import Login from "~/components/Login";
import PageHead from "~/components/PageHead";

function LoginPage() {
  return (
    <>
      <div id="login-page">
        <PageHead title="Login" />
        <Login />
      </div>
    </>
  );
}

export default LoginPage;
