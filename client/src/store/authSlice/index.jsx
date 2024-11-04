import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload; // Assumes a non-null user means authenticated
        }
    }
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
