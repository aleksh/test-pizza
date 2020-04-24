import React from "react";

import Styles from "./App.module.scss";
import PizzaGrid from "./components/pizzaGrid/PizzaGrid";

function App() {
	return (
		<div className={Styles.App}>
			<header>Header</header>
			<main>
				<PizzaGrid />
			</main>
			<footer>Footer</footer>
		</div>
	);
}

export default App;
