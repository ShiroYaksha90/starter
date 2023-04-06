import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItem : cartItems,
    amount:4,
    total:0,
    isLoading:true
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.cartItem = []; 
        }
    }
})

// console.log(cartSlice)
export const {clearCart} = cartSlice.actions
export default cartSlice.reducer