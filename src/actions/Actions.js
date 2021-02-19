import { INC, DEC, REMOVE } from "./types";

export const Increment = (id) => {
  return {
    type: INC,
    payload: id,
  };
};

export const Decrement = (id) => {
  return {
    type: DEC,
    payload: id,
  };
};

export const Remove = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
