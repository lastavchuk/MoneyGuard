import { createSlice } from '@reduxjs/toolkit';
import {
    loginUserThunk,
    logOutUserThunk,
    refreshUserThunk,
    registerUserThunk,
} from './userThunks';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        token: null,
        isAuth: false,
    },
    extraReducers: builder => {
        builder
            .addCase(loginUserThunk.fulfilled, (state, action) => {
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isAuth = true;
            })
            .addCase(registerUserThunk.fulfilled, (state, action) => {
                state.userData = action.payload.user;
                state.token = action.payload.token;
                state.isAuth = true;
            })
            .addCase(logOutUserThunk.fulfilled, (state, _) => {
                state.userData = null;
                state.token = null;
                state.isAuth = false;
            })
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isAuth = true;
            });
    },
});

export const userReducer = userSlice.reducer;
