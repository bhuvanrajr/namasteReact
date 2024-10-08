import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name : "cart",
    initialState : {
        items: []
    },
    reducers : {
        addItem:(state, action) =>{
            state.items.push(action.payload);
        },
        removeItem:(state) =>{
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart, tryNewAdd} = CartSlice.actions;
export default CartSlice.reducer;