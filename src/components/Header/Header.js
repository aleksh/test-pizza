import React, { useContext } from "react";

import { GlobalStateContext } from "../../context/GlobalContextProvider";
import IconBasket from "../icons/basket";
import Styles from "./Header.module.scss";

function Header({ toggleBasket }) {
	const { totalItems } = useContext(GlobalStateContext);

	const _handleClickBasket = () => {
		if (totalItems > 0) {
			toggleBasket();
		}
	};

	return (
		<header>
			<div>Header</div>
			<div className={Styles.basket} onClick={_handleClickBasket}>
				<IconBasket />
				<span>{totalItems}</span>
			</div>
		</header>
	);
}

export default Header;
