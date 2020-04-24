import React from "react";

import IconDelete from "../icons/delete";
import IconPlus from "../icons/plus";
import IconMinus from "../icons/minus";

import Styles from "./Basket.module.scss";

function BasketItem() {
	return (
		<div className={Styles.item}>
			<img
				src="https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg"
				alt="title"
			/>
			<div className={Styles.content}>
				<h4>
					Pizza Title asdfg dsfgklh sdgflhjdgfs sdgklj dsfgklj dfsgklj{" "}
				</h4>
				<div className={Styles.count}>
					<IconPlus className={Styles.iconPlus} />
					<span>1</span>
					<IconMinus className={Styles.iconMinus} />
				</div>
				<div className={Styles.price}>
					<span>$ 168</span>
				</div>
			</div>

			<div className={Styles.delete}>
				<IconDelete width={25} height={25} />
			</div>
		</div>
	);
}

export default BasketItem;
