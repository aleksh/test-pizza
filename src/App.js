import React from "react";

import Styles from "./App.module.scss";
import PizzaGrid from "./components/pizzaGrid/PizzaGrid";
import Basket from "./components/basket/Basket";

function App() {
	return (
		<div className={Styles.App}>
			<header>Header</header>
			<main>
				<PizzaGrid />
			</main>
			<footer>Footer</footer>
			<Basket />
		</div>
	);
}

export default App;
