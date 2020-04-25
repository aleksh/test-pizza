import React from "react";
import cl from "classnames";

import Styles from "./Basket.module.scss";
import BasketItem from "./BasketItem";
import { CSSTransition } from "react-transition-group";

function Basket({ show, setShowBasket }) {
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
						<BasketItem />
						<BasketItem />
						<BasketItem />
						<BasketItem />
						<BasketItem />
						<BasketItem />
						<BasketItem />
						<BasketItem />
					</div>

					<div className={Styles.Order}>
						<div className={Styles.total}>
							<span>Total:</span>
							<span>$ 1780</span>
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
