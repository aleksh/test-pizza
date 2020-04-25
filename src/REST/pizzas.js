import axios from "axios";

export const pizzas = {
    fetch() {
        return axios.get(`/attributes`);
    },
}