import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex] = {
                    ...state.cartItems[itemIndex],
                    quantity: state.cartItems[itemIndex].quantity += 1
                };

            } else {
                let tempProduct = { ...action.payload, quantity: 1 }
                state.cartItems.push(tempProduct);
            }
            toast.success("دوره به سبد خرید اضافه شد")
            localStorage.setItem("cart" , JSON.stringify(state.cartItems));
        },
        deCreaseToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1;
                toast.warning("دوره از سبد خرید کم شد")

            } else if (state.cartItems[itemIndex].quantity === 1) {
                const filterItem = state.cartItems.filter(item => item.id !== action.payload.id);
                state.cartItems = filterItem;
                toast.error("دوره از سبد خرید کامل پاک شد")
            }
            localStorage.setItem("cart" , JSON.stringify(state.cartItems));

        },
    }
})

export const { addToCart, deCreaseToCart, totalCart } = cartSlice.actions;

export default cartSlice.reducer;