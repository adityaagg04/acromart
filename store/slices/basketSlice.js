import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      // state.items = state.items.filter((item) => item.id !== action.payload.id);

      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      const newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product (id:${action.payload.id}) as it is not in basket`
        );
      }

      state.items = newBasket;
    },
  },
});

export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
