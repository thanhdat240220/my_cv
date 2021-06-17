import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Other from "../../components/Other/index";

function OtherPage() {
  return (
    <>
      <Switch>
        <Route path="/other" exact>
            <Other />
        </Route>
        <Route path="/other/blog" exact></Route>
        <Route path="/other/ecommerce-home" exact></Route>
        <Route path="other/animation" exact></Route>
        <Redirect to="/other" from="/other/*"></Redirect>
      </Switch>
    </>
  );
}

export default OtherPage;
