import React from "react";

import Styles from "./PizzaGrid.module.scss";

function PizzaItem({ item }) {
	return (
		<div className={Styles.PizzaItem}>
			<img src={item.imageUrl} alt={item.title} />
			<div className={Styles.details}>
				<h3>{item.title}</h3>
				<div className={Styles.description}>{item.description}</div>
				<p className={Styles.price}>$ {item.price}</p>
				<div className={Styles.Btn}>
					<span>Add To Basket</span>
				</div>
			</div>
		</div>
	);
}

export default PizzaItem;
