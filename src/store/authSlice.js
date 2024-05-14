import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null,
    deferredPrompt:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
        setdeffer:(state)=>{
            state.deferredPrompt=action.payload;
            console.log("deffer prompt set in store")
        }
     }
})

export const {login, logout,setdeffer} = authSlice.actions;

export default authSlice.reducer;