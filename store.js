import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './extra/basketSlice';
import restaurantReducer from './extra/restaurantSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        restaurant: restaurantReducer
    },
})