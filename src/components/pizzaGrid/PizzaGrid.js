import React, { useContext, useEffect } from "react";
import {
	GlobalDispatchContext,
	GlobalStateContext,
} from "../../context/GlobalContextProvider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import PizzItem from "./PizzaItem";
import Styles from "./PizzaGrid.module.scss";

function PizzaGrid() {
	const { pizzas, currentCurrency } = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalDispatchContext);

	useEffect(() => {
		if (pizzas.length === 0) {
			dispatch({ type: "SET_PIZZAS", payload: PizzasConst });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
							<PizzItem item={pizza} currency={currentCurrency} addToBasket={addToBasket} />
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
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza1.jpg?alt=media&token=873396d2-2521-4902-9db8-136974ee5057",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza1.jpg?alt=media&token=0a20b009-c027-4288-b356-791188de3a95",
		price: {
			usd: 189,
			euro: 174,
		},
		title: "Mafia",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "2",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza2.jpg?alt=media&token=b4bebd17-a201-494e-9023-261c02a73dd6",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza2.jpg?alt=media&token=96572e3d-8654-4ff2-9ee4-9e326d124594",
		price: {
			usd: 139,
			euro: 128,
		},
		title: "Hunting pizza",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "3",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza3.jpg?alt=media&token=1a6cc761-a7e0-413f-92ff-898ff686787a",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza3.jpg?alt=media&token=fd06217e-9f44-4f0a-b994-40b2bab1b765",
		price: {
			usd: 89,
			euro: 82,
		},
		title: "Margarita",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "4",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza4.jpg?alt=media&token=d82fd403-df7a-476f-9636-3279eaa2fff6",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza4.jpg?alt=media&token=c943cb7f-8d0f-4697-99bf-898f21e33ec8",
		price: {
			usd: 165,
			euro: 152,
		},
		title: "Carbonara",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "5",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza5.jpg?alt=media&token=a2339ab5-0490-48f4-834b-511b068b6745",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza5.jpg?alt=media&token=8bf6820c-5d4f-483e-b1f0-8477523aa07f",
		price: {
			usd: 135,
			euro: 124,
		},
		title: "Polo",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "6",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza6.jpg?alt=media&token=6f1b0f57-f3cc-4c0f-93d6-5bceff2ed3d2",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza6.jpg?alt=media&token=5f52f881-308a-4a74-9e4b-f856f469fdf0",
		price: {
			usd: 165,
			euro: 152,
		},
		title: "Gurmeo",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "7",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza7.jpg?alt=media&token=fd5f5622-3a04-42d9-a00d-c916d0963483",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza7.jpg?alt=media&token=d8e82d29-ed5b-4969-88a1-bbb8180ec59c",
		price: {
			usd: 149,
			euro: 137,
		},
		title: "Four cheeses",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "8",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza8.jpg?alt=media&token=6a5526f2-8b98-4804-9c63-31d5139f517a",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza8.jpg?alt=media&token=c5cea754-a495-4fe4-9afd-412ca44b550c",
		price: {
			usd: 149,
			euro: 137,
		},
		title: "Americano",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "9",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza9.jpg?alt=media&token=3dfcedad-d335-4f25-a87b-72c52b36bd1f",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza9.jpg?alt=media&token=c6afdf1e-aadc-4c8b-b1a5-5a6363d77b5f",
		price: {
			usd: 119,
			euro: 109,
		},
		title: "Calzone",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "10",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza10.jpg?alt=media&token=498d9613-9980-4bdc-8bfe-c3f470c3a08d",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza10.jpg?alt=media&token=5892e484-a7fa-4a79-9d5d-96336b8541f5",
		price: {
			usd: 145,
			euro: 133,
		},
		title: "Bavarian",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "11",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza11.jpg?alt=media&token=8f476cd5-c40a-4013-b0f1-44ed34530b86",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza11.jpg?alt=media&token=2aa56e59-d247-417c-b22c-2e153eb9ac95",
		price: {
			usd: 159,
			euro: 146,
		},
		title: "Diablo",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "12",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza12.jpg?alt=media&token=db41a25b-e327-45bc-b66d-d835e033eb20",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza12.jpg?alt=media&token=05de8443-50ec-488b-8c58-7218421ef350",
		price: {
			usd: 95,
			euro: 87,
		},
		title: "Vegetable",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
	{
		id: "13",
		imageUrl:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/pizza13.jpg?alt=media&token=73262942-e882-4fc9-84db-59b087528fb8",
		icon:
			"https://firebasestorage.googleapis.com/v0/b/notes-6fa2d.appspot.com/o/icon_pizza13.jpg?alt=media&token=dcd84561-dc20-4a55-9bf0-6f44b47d36be",
		price: {
			usd: 149,
			euro: 137,
		},
		title: "Berlusconi",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
	},
];
