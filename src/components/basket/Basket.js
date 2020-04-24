import React from "react";

import Styles from "./Basket.module.scss";
import BasketItem from "./BasketItem";

function Basket() {
	return (
		<div className={Styles.Container}>
			<div className={Styles.Basket}>
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
	);
}

export default Basket;
