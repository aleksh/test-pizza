import React, { useContext } from "react";

import {
	GlobalStateContext,
	GlobalDispatchContext,
} from "../../context/GlobalContextProvider";
import { Link } from "react-router-dom";
import { CURRENCY } from "../../context/GlobalContextProvider";
import IconBasket from "../icons/basket";
import Styles from "./Header.module.scss";

function Header({ toggleBasket }) {
	const { totalItems, currentCurrency } = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);

	const _handleClickBasket = () => {
		if (totalItems > 0) {
			toggleBasket();
		}
	};

	const _handleChangeCurrency = (e) => {
		dispatch({ type: "CHANGE_CURRENCY", payload: e.target.value });
	};

	return (
		<header>
			<div className={Styles.Nav}>
				<Link to="/">Home</Link>
			</div>
			<div className={Styles.Currency}>
				<span>Current Currency</span>
				<select
					onChange={_handleChangeCurrency}
					defaultValue={currentCurrency.code}
				>
					{CURRENCY.map((item) => (
						<option key={item.code} value={item.code}>
							{item.code}
						</option>
					))}
				</select>
			</div>
			<div className={Styles.basket} onClick={_handleClickBasket}>
				<IconBasket />
				<span>{totalItems}</span>
			</div>
		</header>
	);
}

export default Header;
