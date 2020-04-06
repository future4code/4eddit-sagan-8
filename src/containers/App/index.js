import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MuiThemeProvider, CssBaseline,} from "@material-ui/core";
import theme from "../../style/theme";
import Router from "../Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware } from "connected-react-router";
import Header from "../Header";
import Snackbar from './snackbar'


export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
      <MuiThemeProvider theme={theme}>
      <Header />
      <Snackbar />
      <CssBaseline />
      <Router history={history} />
      {/*TODO O ideal é colocar o router dentro de um styled, assim,
        todos os componentes por ser alinhados de forma uniforme 
      */}
    </MuiThemeProvider>
  </Provider>
);

export default App;
