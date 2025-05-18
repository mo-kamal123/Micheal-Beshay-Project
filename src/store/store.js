import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice/auth-slice'


export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})