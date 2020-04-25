import React, { useContext } from "react";
import cl from "classnames";

import {
	GlobalDispatchContext,
	GlobalStateContext,
} from "../../context/GlobalContextProvider";
import Styles from "./Basket.module.scss";
import BasketItem from "./BasketItem";
import { CSSTransition } from "react-transition-group";

function Basket({ show, setShowBasket }) {
	const { orders, totalPrice } = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);

	const removeFromBasket = (orderId) => {
		dispatch({ type: "REMOVE_FROM_BASKET", payload: orderId });

		if (orders.length === 1) {
			setShowBasket(false);
		}
	};

	const addCount = (orderId) => {
		dispatch({ type: "ADD_COUNT", payload: orderId });
	};

	const removeCount = (orderId) => {
		dispatch({ type: "REMOVE_COUNT", payload: orderId });
	};

	return (
		<CSSTransition in={show} timeout={300} classNames="basket">
			<div
				className={Styles.Container}
				onClick={() => setShowBasket(false)}
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className={cl(
						Styles.Basket,
						{ [Styles.active]: show },
						{ [Styles.disable]: !show }
					)}
				>
					<h2>Basket</h2>
					<div className={Styles.items}>
						{orders.map((order) => (
							<BasketItem
								key={order.id}
								order={order}
								addCount={addCount}
								removeCount={removeCount}
								remove={removeFromBasket}
							/>
						))}
					</div>

					<div className={Styles.Order}>
						<div className={Styles.total}>
							<span>Total:</span>
							<span>$ {totalPrice}</span>
						</div>
						<div className={Styles.Btn}>
							<span>Order Now</span>
						</div>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
}

export default Basket;
