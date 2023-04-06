import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItem : cartItems,
    amount:0,
    total:0,
    isLoading:true
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cartItem = []; 
        },
        removeItem: (state, action) =>{
            const itemId = action.payload
            state.cartItem = state.cartItem.filter((item)=> item.id !== itemId)
        },
        increase: (state, { payload }) => {
            const increment = state.cartItem.find((item)=>item.id === payload)
            increment.amount = increment.amount + 1;
        },
        decrease: (state, { payload }) => {
            const decrement =state.cartItem.find((item)=>item.id === payload)
            decrement.amount = decrement.amount - 1;
        },
        calculateTotals: (state) => {
            let amount=0 ;
            let total =0;
            state.cartItem.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    }
})

// console.log(cartSlice)
export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions
export default cartSlice.reducer