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
    if(pizzas.length === 0) {
      dispatch({ type: "SET_PIZZAS", payload: PizzasConst });
    }
	}, []);

	const addToBasket = (pizza) => {
		dispatch({ type: "ADD_TO_BASKET", payload: pizza });
	};

	return (
		<>
			{pizzas.length > 0 && (
				<TransitionGroup className={Styles.Grid}>
					{pizzas.map((pizza, i) => (
						<CSSTransition
							key={pizza.id}
							in={true}
							appear={true}
							timeout={200 * i}
							classNames="pizza"
						>
							<PizzItem item={pizza} addToBasket={addToBasket} />
						</CSSTransition>
					))}
				</TransitionGroup>
			)}
		</>
	);
}

export default PizzaGrid;

const PizzasConst = [
	{
		id: "1",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/mafiya.jpeg",
		price: 100,
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "2",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/picca-ohotnichya_1542267892836.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/picca-ohotnichya.jpeg",
		price: 119,
		title: "Mafia 111",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "3",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/margarita_156706066239.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/margarita_1567060656531.jpeg",
		price: 89,
		title: "Mafia 333",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "4",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/karbonara_1567060589165.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/karbonara_1567060586370.jpeg",
		price: 200,
		title: "Mafia 44",
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
		title: "Mafia 555",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "6",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 289,
		title: "Mafia 66",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "7",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 19,
		title: "Mafia 77",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "8",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 289,
		title: "Mafia 99",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "9",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 90,
		title: "Mafia 99",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "10",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 89,
		title: "Mafia 10",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "11",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 29,
		title: "Mafia 111",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "12",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 83,
		title: "Mafia 121212",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "13",
		imageUrl:
			"https://mafia.ua/storage/editor/fotos/480x0/mafiya_1581069452273.jpeg",
		icon:
			"https://mafia.ua/storage/editor/fotos/100x100/amerikano_156706005058.jpeg",
		price: 200,
		title: "Mafia 131313",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];
