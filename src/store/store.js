import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import ridesSlice from './ridesSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        rides:ridesSlice,
        //TODO: add more slices here for rides
    }
});


export default store;