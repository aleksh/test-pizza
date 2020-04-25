import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import PizzaGrid from "./components/pizzaGrid/PizzaGrid";
import Order from "./components/order/Order";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Styles from "./App.module.scss";

function App() {
	const [showBasket, setShowBasket] = useState(false);

	const toggleBasket = () => {
		setShowBasket(!showBasket);
	};

	return (
		<div className={Styles.App}>
			<Header toggleBasket={toggleBasket} />
			<main>
				<Switch>
					<Route path="/order">
						<Order />
					</Route>
					<Route path="/">
						<PizzaGrid />
					</Route>
				</Switch>
			</main>
			<Footer />
			<Basket show={showBasket} setShowBasket={setShowBasket} />
		</div>
	);
}

export default App;
