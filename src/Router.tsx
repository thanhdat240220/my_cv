import React, { Suspense } from "react";
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "~/layouts/HomeLayout";
import OtherLayout from "~/layouts/OtherLayout";
//extends
import "./untils/extends";
//css
import "./assets/scss/index.scss";
import PageNotFound from "./pages/PageDefault/PageNotFound";
import Spinner from "./components/@myMaterial/Spinner";
import { mainRoute, routes } from "./configs/route";
//my-profile
const InformationPage = React.lazy(() => import("./pages/Information"));
const ExperiencePage = React.lazy(() => import("./pages/Experience"));
const OtherPage = React.lazy(() => import("./pages/Other"));
//my-theme
const PersonalTheme = React.lazy(() => import("./pages/PersonalTheme"));

function Routers(): React.ReactElement {
  return (
    <Router>
      <Switch>
        <Route path={mainRoute.myProfile.href}>
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
              <Route path={routes.themes.path} exact>
                <Suspense fallback={<Spinner />}>
                  <OtherPage />
                </Suspense>
              </Route>
              <Route path={routes._404.path}>
                <PageNotFound />
              </Route>
              <Redirect
                to={routes.information.path}
                from={mainRoute.myProfile.href}
                exact
              />
            </Switch>
          </Home>
        </Route>
        <Route path={mainRoute.theme.href}>
          <OtherLayout>
            <Switch>
              <Route path={routes.personal_theme.path} exact>
                <Suspense fallback={<Spinner />}>
                  <PersonalTheme />
                </Suspense>
              </Route>
              <Redirect
                to={routes.personal_theme.path}
                from={mainRoute.theme.href}
                exact
              />
            </Switch>
          </OtherLayout>
        </Route>
        <Redirect to={mainRoute.myProfile.href} from="/" exact />
        <Redirect to={routes._404.path} from="/*" />
      </Switch>
    </Router>
  );
}

export default Routers;
