import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    money: 0,
    name: "",
    token: ""
}
export const meSlice = createSlice({
    name: "me",
    initialState: { ...IME },
    reducers: {
        test: state => {
            state.id = "1";
            state.money = 10000;
            state.name = "김수동";
            state.token = "token";
        },
        setMe: (state, { payload }) => {
            state.id = payload.id
            state.money = payload.money
            state.name = payload.name
            state.token = payload.token
        }
    }
})

export const { test, setMe } = meSlice.actions

export default meSlice.reducer