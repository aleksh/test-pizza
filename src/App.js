import React, { useState } from "react";

import Styles from "./App.module.scss";
import PizzaGrid from "./components/pizzaGrid/PizzaGrid";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
	const [showBasket, setShowBasket] = useState(false);

	const toggleBasket = () => {
		setShowBasket(!showBasket);
	};

	return (
		<div className={Styles.App}>
			<Header toggleBasket={toggleBasket} />
			<main>
				<PizzaGrid />
			</main>
			<Footer />
			<Basket show={showBasket} setShowBasket={setShowBasket} />
		</div>
	);
}

export default App;
