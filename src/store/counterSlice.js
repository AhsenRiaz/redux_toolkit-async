import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";


export const counterUpdate =  createAsyncThunk(

        "counter/counterUpdate",
        async (value , thunkAPI) => {
            const response = await fetch("https://localhost:3000/api/updatedCounter");
            const data = response.json();
            return data
        }

) 
  
export const  counterSlice = createSlice({

    name: "Counter",
    initialState: {
        count : 0,
        isLoading : false,
        error : ""
    },

    reducers: {
        increment: (state) => {
            state.count++;
        },

        decrement: (state) => {
            state.count--;
        },

        incrementByAmount: (state , action) => {
            state.count+= action.payload;
        }
    },
    extraReducers : {
        [counterUpdate.fulfilled] : (state , action) => {
            state.count+=action.payload
            state.isLoading = false
        },

        [counterUpdate.pending] : (state) => {
            state.isLoading = true
        },

        [counterUpdate.rejected] : (state) => {
            state.error = "Error in update counter"
            state.isLoading = false
        }

    }


})

export const {increment , decrement , incrementByAmount} = counterSlice.actions

export default counterSlice.reducer