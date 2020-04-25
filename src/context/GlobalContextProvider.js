import React, { createContext, useReducer } from "react";

const initialState = {
	pizzas: [],
	orders: [],
	totalPrice: 0,
	totalItems: 0,
};

export const GlobalStateContext = createContext(initialState);
export const GlobalDispatchContext = createContext({});

/*
export const currency = [
  {
    id: 1,
    code: "USD",
    title: "$",
  }, 
  {
    id: 1,
    code: "EURO",
    title: "€",
  }
]*/

const calculateOrders = (orders) => {
	let totalPrice = 0;
	let totalItems = 0;

	orders.forEach((item) => {
		totalPrice += item.price * item.count;
		totalItems += item.count;
	});

	return { totalPrice, totalItems };
};

const newOrder = (item) => {
	return {
		id: Date.now(),
		pizzaId: item.id,
		title: item.title,
		iconUrl: item.icon,
		price: item.price,
		count: 1,
	};
};

function reducer(state, action) {
	let updatedInfo = {};
	let orderIndex = -1;

	switch (action.type) {
		case "SET_PIZZAS":
			return {
				pizzas: action.payload,
				orders: [...state.orders],
				totalPrice: state.totalPrice,
				totalItems: state.totalItems,
			};

		case "ADD_COUNT":
			orderIndex = state.orders.findIndex(
				(item) => item.id === action.payload
			);

			if (orderIndex !== -1) {
				state.orders[orderIndex].count += 1;
			}

			updatedInfo = calculateOrders(state.orders);

			return {
				pizzas: [...state.pizzas],
				orders: [...state.orders],
				totalPrice: updatedInfo.totalPrice,
				totalItems: updatedInfo.totalItems,
			};

		case "REMOVE_COUNT":
			orderIndex = state.orders.findIndex(
				(item) => item.id === action.payload
			);

			if (orderIndex !== -1) {
				state.orders[orderIndex].count -= 1;
			}

			updatedInfo = calculateOrders(state.orders);

			return {
				pizzas: [...state.pizzas],
				orders: [...state.orders],
				totalPrice: updatedInfo.totalPrice,
				totalItems: updatedInfo.totalItems,
			};

		case "REMOVE_FROM_BASKET":
			const orders = state.orders.filter(
				(item) => item.id !== action.payload
			);

			updatedInfo = calculateOrders(orders);
			return {
				pizzas: [...state.pizzas],
				orders: [...orders],
				totalPrice: updatedInfo.totalPrice,
				totalItems: updatedInfo.totalItems,
			};

		case "ADD_TO_BASKET":
			orderIndex = state.orders.findIndex(
				(item) => item.pizzaId === action.payload.id
			);

			if (orderIndex === -1) {
				const orderItem = newOrder(action.payload);

				state.orders.push(orderItem);
			} else {
				state.orders[orderIndex].count += 1;
			}

			updatedInfo = calculateOrders(state.orders);

			return {
				orders: [...state.orders],
				pizzas: [...state.pizzas],
				totalPrice: updatedInfo.totalPrice,
				totalItems: updatedInfo.totalItems,
			};

		default:
			return state;
	}
}

const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalDispatchContext.Provider value={dispatch}>
				{children}
			</GlobalDispatchContext.Provider>
		</GlobalStateContext.Provider>
	);
};

export default GlobalContextProvider;
