import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    currentUser,
    loginUser,
    logOutUser,
    registerUser,
    setToken,
} from 'services/api/api';

export const registerUserThunk = createAsyncThunk(
    'user/registerUserThunk',
    async (userData, thunkAPI) => {
        try {
            return await registerUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const loginUserThunk = createAsyncThunk(
    'user/loginUserThunk',
    async (userData, thunkAPI) => {
        try {
            return await loginUser(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const logOutUserThunk = createAsyncThunk(
    'user/logOutUserThunk',
    async (_, thunkAPI) => {
        try {
            return await logOutUser();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const refreshUserThunk = createAsyncThunk(
    'user/refreshUserThunk',
    async (_, thunkAPI) => {
        try {
            const { user } = thunkAPI.getState();
            if (!!user.token) {
                setToken(user.token);
                return await currentUser();
            }
            return thunkAPI.rejectWithValue();
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);
