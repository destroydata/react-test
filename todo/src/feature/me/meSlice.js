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
        setMe: state => {
            state.id = "1";
            state.money = 10000;
            state.name = "김수동";
            state.token = "token";
        }
    }
})

export const { setMe } = meSlice.actions

export default meSlice.reducer