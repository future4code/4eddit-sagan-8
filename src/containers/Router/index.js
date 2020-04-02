import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import HomePage from "../HomePage";
import PostFeed from "../PostFeed/PostFeed";
import PostDetail from "../PostDetail/PostDetail";





export const routes = {
  root: "/",
  registerPage: "/register",
  postFeed:"/postfeed",
  login: "/login",
  PostDetail: "/postdetail"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.registerPage} component={RegisterPage} />
        <Route exact path={routes.postFeed} component={PostFeed} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.PostDetail} component={PostDetail} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;

