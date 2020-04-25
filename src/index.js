import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContextProvider";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
	<GlobalContextProvider>
		<BrowserRouter history={history}>
			<App />
		</BrowserRouter>
	</GlobalContextProvider>,
	document.getElementById("root")
);
