import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../network/api";
//  status: 'idle' | 'loading' | 'succeeded' | 'failed',
//   error: string | null
const INIT_ALL = {
    all: [],
    totalPages: 0,
    page: 0,
    size: 5,
    status: "idle",
    error: ""
}

export const getAllThunk = createAsyncThunk('GET_ALL'
    , async (arg, thunkApi) => {
        const { page, size } = thunkApi.getState().all
        const data = await api(`/api/v1/todos` +
            `?page=${page}&size=${size}`, "GET")
        return data
    })

export const allSlice = createSlice({
    name: "all",
    initialState: { ...INIT_ALL },
    reducers: {
        setAll: async (state, { payload }) => {
            state.all = payload.content
            state.totalPages = payload.totalPages
        },
        changeSize: (state, { payload }) => {
            state.size = payload
            state.page = 0
        },
        changePage: (state, { payload }) => {
            state.page = payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAllThunk.pending, (state, actions) => {
                state.status = 'loading'
            })
            .addCase(getAllThunk.fulfilled, (state, actions) => {
                state.status = 'succeeded'
                state.all = actions.payload.content
                state.totalPages = actions.payload.totalPages
            })
            .addCase(getAllThunk.rejected, (state, actions) => {
                state.status = 'failed'
                state.error = actions.error.message
            })
    }
})

export const { setAll, changeSize, changePage } = allSlice.actions

export default allSlice.reducer