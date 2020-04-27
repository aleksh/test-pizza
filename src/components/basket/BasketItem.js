import React from "react";

import IconDelete from "../icons/delete";
import IconPlus from "../icons/plus";
import IconMinus from "../icons/minus";

import Styles from "./Basket.module.scss";

function BasketItem({ order, currency, remove, addCount, removeCount }) {
	const _handleRemove = () => {
		remove(order.id);
	};

	const _handleAddCount = () => {
		addCount(order.id);
	};

	const _handleRemoveCount = () => {
		if (order.count > 1) {
			removeCount(order.id);
		}
	};

	return (
		<div className={Styles.item}>
			<img src={order.iconUrl} alt={order.title} />
			<div className={Styles.content}>
				<h4>{order.title}</h4>
				<div className={Styles.count}>
					<div onClick={_handleAddCount}>
						<IconPlus className={Styles.iconPlus} />
					</div>

					<span>{order.count}</span>
					<div onClick={_handleRemoveCount}>
						<IconMinus className={Styles.iconMinus} />
					</div>
				</div>
				<div className={Styles.price}>
					<span>{currency.title} {order.price[currency.code] * order.count}</span>
				</div>
			</div>

			<div className={Styles.delete} onClick={_handleRemove}>
				<IconDelete width={25} height={25} />
			</div>
		</div>
	);
}

export default BasketItem;
