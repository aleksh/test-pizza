import React, { useContext, useEffect } from "react";
import {
	GlobalDispatchContext,
	GlobalStateContext,
} from "../../context/GlobalContextProvider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PizzItem from "./PizzaItem";
import Styles from "./PizzaGrid.module.scss";

function PizzaGrid() {
	const { pizzas } = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);

	useEffect(() => {
		dispatch({ type: "SET_PIZZAS", payload: PizzasConst });
  }, []);
  
  const addToBasket = (pizza) => {
    dispatch({ type: "ADD_TO_BASKET", payload: pizza });
  }

	return (
		<TransitionGroup className={Styles.Grid}>
			{pizzas.map((pizza, i) => (
				<CSSTransition
					key={pizza.id}
					in={true}
					appear={true}
					timeout={200 * i}
					classNames="pizza"
				>
					<PizzItem item={pizza} addToBasket={addToBasket}/>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
}

export default PizzaGrid;

const PizzasConst = [
	{
		id: "1",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "2",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "3",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "4",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "5",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "6",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "7",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "8",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "9",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "10",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "11",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "12",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "13",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 189,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];
