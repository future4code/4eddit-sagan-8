import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import credentials from "./credentials"
import {allPosts} from "./posts";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user: credentials,
    allPosts,
  });
