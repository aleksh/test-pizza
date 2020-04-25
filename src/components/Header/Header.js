import React from "react";

import IconBasket from '../icons/basket';
import Styles from './Header.module.scss';

function Header({toggleBasket}) {
	return (
		<header>
      <div>Header</div>
      <div className={Styles.basket} onClick={toggleBasket}>
        <IconBasket />
        <span>2</span>
      </div>
    </header>
	);
}

export default Header;
