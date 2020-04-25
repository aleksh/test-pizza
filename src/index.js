import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.scss";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContextProvider";

ReactDOM.render(
	<GlobalContextProvider>
		<App />
	</GlobalContextProvider>,

	document.getElementById("root")
);
