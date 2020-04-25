import React from "react";

import Styles from "./Order.module.scss";
import OrderForm from "./OrderForm";

const Order = () => {
	return (
		<div className={Styles.Order}>
			<OrderForm />
		</div>
	);
};

export default Order;
