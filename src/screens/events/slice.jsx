import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getEvents = createAsyncThunk('eventsList/getEvents',
    async () => {
        try {

        } catch (error) {


        }
    })

const EventsSlice = createSlice({
    name: 'eventsList', initialState: {
        newEvents: [],
        activeEvents: [],
        pastEvents: [],
        isLoading: false,
        hasError: false,
        hasRun: false
    }, reducers: {}, extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.hasRun = true;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.value = action.payload;
                state.isLoading = false;
                state.hasError = false
                state.hasRun = true;
            })
            .addCase(getEvents.rejected, (state) => {
                state.hasError = true
                state.isLoading = false;
                state.hasRun = true;
            })
    }
})
export const selectLoadingState = state => state.eventsList.isLoading;
export const selectErrorState = state => state.eventsList.hasError;
export const selectFullState = state => state.eventsList;

export default EventsSlice.reducer