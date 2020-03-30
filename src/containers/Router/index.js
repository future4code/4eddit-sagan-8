import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";





export const routes = {
  root: "/",
  registerPage: "/register",
  postFeed:"/postfeed",
  login: "/login"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>

        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route exact path={routes.postFeed} component={LoginPage} />         
        <Route exact path={routes.login} component={LoginPage} />

      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
