import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ From:"goa", To:"kochi", Vechicle:"car", NumberofPassengers:2, DateofRide:"safda", Createdby:"krishana", Message:"ntg",Rideid: "ksfd"}]

const ridesSlice = createSlice({
    name: "rides",
    initialState,
    reducers: {
        setrides: (state, action) => {
            state.push(action.payload)
            console.log(action.payload)
        },
        update: (state) => {
            state.status = false;
        },
        delete:(state,action)=>{

        }
     }
})




export const {login, logout} = ridesSlice.actions;

export default ridesSlice.reducer;