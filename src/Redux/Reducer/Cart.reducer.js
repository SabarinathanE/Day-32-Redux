import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        item: [],
        price: 0,
        quantity: 0,
    },

    reducers: {
        setItem : (state, action) => {

            if (action.payload.item) {
                const Updatedvalue = state.item.find((d) => d.id == action.payload.item.id);
                if(!Updatedvalue){
                    state.item.push(action.payload.item);
                    state.price = action.payload.price;
                    state.quantity = action.payload.quantity;
                }
            }
        },
        setCount : (state, action) => {

            if (action.payload) {
                if (action.payload.type == "inc") {
                    state.price += action.payload.price;
                    state.quantity = action.payload.quantity + 1;
                } else if (action.payload.type == "dec") {
                    if (action.payload.counts > 0){
                        state.price -= action.payload.price;
                        state.quantity = action.payload.quantity - 1;
                    }
                }
            }
            }
        },
    },
    
);

export const { setItem, setCount } = CartSlice.actions;
export default CartSlice.reducer;
