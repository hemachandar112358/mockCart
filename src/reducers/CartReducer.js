import { REMOVE, INC, DEC } from "../actions/types";
import MexicanFood from "../assests/spicyFood.jpg";
import Momo from "../assests/chickenMomo.jpg";
import BreakFast from "../assests/breakfast.jpg";

const initialState = {
  items: [
    {
      id: 1,
      name: "Chicken Momo",
      price: 10.5,
      image: Momo,
      amount: 1,
    },
    {
      id: 2,
      name: "Spicy Mexican Potatoes",
      price: 8.5,
      image: MexicanFood,
      amount: 2,
    },
    {
      id: 3,
      name: "BreakFast",
      price: 5.9,
      image: BreakFast,
      amount: 4,
    },
  ],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      const newIncArry = state.items.map((item) => {
        if (item.name === action.payload) {
          item.amount = item.amount + 1;
        }
        return item;
      });

      return {
        ...state,
        items: newIncArry,
      };

    case DEC:
      const newDecArry = state.items.map((item) => {
        if (item.name === action.payload && item.amount > 0) {
          item.amount = item.amount - 1;
        }
        return item;
      });

      return {
        ...state,
        items: newDecArry,
      };

    case REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.name !== action.payload;
        }),
      };
    default:
      return {
        ...state,
      };
  }
}
