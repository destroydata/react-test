import { configureStore } from '@reduxjs/toolkit'
import meReducer from '../feature/me/meSlice'

export default configureStore({
    reducer: {
        me: meReducer
    }
})