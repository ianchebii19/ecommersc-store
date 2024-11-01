const { createSlice } = require("@reduxjs/toolkit");

 
const initialState ={
    user: null,
    isAuthenticated: false,
    isLoading: false,
    
}


 const authSlice =createSlice({

    name : 'auth',
    initialState,
    reducers : {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        }
    }
 })

 export default authSlice