import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        data: [],
    },

    reducers: {
        setData : (state, action) => {
            if (action.payload) {
                state.data = action.payload;
            }
        },
    },
    }
);

export const { setData } = ProductSlice.actions;
export default ProductSlice.reducer;
