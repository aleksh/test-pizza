import React from "react";
import ReactDOM from "react-dom";
import { Router  } from "react-router-dom";
import "./index.scss";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContextProvider";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
	<GlobalContextProvider>
		<Router  history={history}>
			<App />
		</Router >
	</GlobalContextProvider>,
	document.getElementById("root")
);
