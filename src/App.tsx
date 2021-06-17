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
import { routes } from './configs/route';

const InformationPage = React.lazy(() => import("./pages/Information"));
const ExperiencePage = React.lazy(() => import("./pages/Experience"));

function App(): React.ReactElement {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path={routes.information.path} exact>
            <Suspense fallback={<Spinner />}>
              <InformationPage />
            </Suspense>
          </Route>
          <Route path={routes.experience.path} exact>
            <Suspense fallback={<Spinner />}>
              <ExperiencePage />
            </Suspense>
          </Route>
          <Route path={routes._404.path} exact>
            <PageNotFound />
          </Route>
          <Redirect to={routes.information.path} from="/" exact />
          <Redirect to={routes._404.path} from="/*" />
        </Switch>
      </Home>
    </Router>
  );
}

export default App;
