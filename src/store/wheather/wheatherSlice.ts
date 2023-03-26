import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearch } from './model';

const weatherSlice = createSlice({
    name: 'weather',
    initialState:<ISearch>{
        weather:[],
        search: "",
    },
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setWeather(state, action: PayloadAction<string>) {
            state.weather = action.payload;
        },
    },

});

export const { setSearch,setWeather} = weatherSlice.actions;

export default weatherSlice.reducer;