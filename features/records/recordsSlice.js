import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../shared/baseUrl';

export const fetchRecords = createAsyncThunk(
    'records/fetchRecords',
    async () => {
        const response = await fetch(baseUrl + 'records');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const recordsSlice = createSlice({
    name: 'records',
    initialState: { isLoading: true, errMess: null, recordsArray: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRecords.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errMess = null;
                state.recordsArray = action.payload;
            })
            .addCase(fetchRecords.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const recordsReducer = recordsSlice.reducer;
