import { configureStore } from '@reduxjs/toolkit'
import meReducer from '../feature/me/meSlice'
import allReducer from '../feature/all/allSlice'

export default configureStore({
    reducer: {
        me: meReducer,
        all: allReducer
    }
})