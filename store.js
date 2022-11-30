import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './extra/basketSlice'

export const store = configureStore({
    reducer: {
        basket: basketReducer
    },
})