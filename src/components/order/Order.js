import React, { useState, useContext } from "react";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import { Link } from "react-router-dom";
import Styles from "./Order.module.scss";
import OrderForm from "./OrderForm";

const Order = () => {
	const [isOrderComplete, setCompleteOrder] = useState(false);
	const dispatch = useContext(GlobalDispatchContext);

	const completeOrder = (values) => {		
		setCompleteOrder(true);
		dispatch({ type: "CLEAN_ORDER" });
	};

	return (
		<div className={Styles.Order}>
			{isOrderComplete ? (
				<>
					<div className={Styles.OrderComplete}>
						<h1>Thank you for your order!</h1>
						<Link to="/">Home</Link>
					</div>
				</>
			) : (
				<OrderForm submitOrder={completeOrder} />
			)}
		</div>
	);
};

export default Order;
