import { createSlice } from "@reduxjs/toolkit";

const initialState = {rides:[]}

const ridesSlice = createSlice({
    name: "rides",
    initialState,
    reducers: {
        setrides: (state, action) => {
            state.rides=action.payload
        },

        updateride: (state,action) => {
            const data=action.payload.data;
            state.rides=state.rides.map((ride)=>{if(ride.$id!==action.payload.id){
                return ride
            }
        return data})
        },
       
        deleteride:(state,action)=>{            
            state.rides=state.rides.filter((ride)=>ride.$id != action.payload
        )
        },
        addride:(state,action)=>{
            state=state.rides.push(action.payload)
        }
     }
})




export const {setrides,updateride,deleteride,addride} = ridesSlice.actions;

export default ridesSlice.reducer;