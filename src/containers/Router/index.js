import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

export const routes = {
  root: "/",
  login: "/login"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.root} component={LoginPage} /> 
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
