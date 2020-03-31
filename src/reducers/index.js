import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import credentials from "./credentials"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user: credentials,
    // Outros reducers aqui
  });
