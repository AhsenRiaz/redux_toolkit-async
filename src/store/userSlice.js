import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

    name : "UserName",
    initialState: {
        username : "Muhammad Ahsen Riaz"
    },

    reducers : {
        userChange:(state) => {
            state.username = "Muhammad Mutahir Riaz"
        }
    }

});

export const {userChange} = userSlice.actions;

export default userSlice.reducer
