import React, { Suspense } from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "~/layouts/HomeLayout";
//extends
import "./untils/extends";
//css
import "./assets/scss/index.scss";
import PageNotFound from "./pages/PageDefault/PageNotFound";
import Spinner from "./components/@myMaterial/Spinner";
import SelectLayout from "./layouts/SelectLayout";
import SelectView from "./components/SelectView";

const InformationPage = React.lazy(() => import("./pages/Information"));
const ExperiencePage = React.lazy(() => import("./pages/Experience"));
const LoginPage = React.lazy(() => import("./pages/Login"));

function App(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Home>
          <Route path="/information" exact>
            <Suspense fallback={<Spinner />}>
              <InformationPage />
            </Suspense>
          </Route>
          <Route path="/experience" exact>
            <Suspense fallback={<Spinner />}>
              <ExperiencePage />
            </Suspense>
          </Route>
          {/* <Route path="/login" exact>
            <Suspense fallback={<Spinner />}>
              <LoginPage />
            </Suspense>
          </Route> */}
        </Home>
        <SelectLayout>
          <Route path="/select" exact>
            <SelectView />
          </Route>
        </SelectLayout>
        {/* <Home>
          <Route path="/404">
            <PageNotFound />
          </Route>
          <Redirect to="/information" from="/" exact />
          <Redirect to="/404" from="/*" />
        </Home> */}
      </Switch>
    </Router>
  );
}

export default App;
