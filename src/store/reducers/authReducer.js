import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'user',
    initialState: {
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem("cart")) : null
    },
    reducers: {
        login(state, action) {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logout(state) {
            state.user = null
            localStorage.clear();
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer;