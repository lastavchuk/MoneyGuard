import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootSlice';
import { userReducer } from './auth/userSlice';
import { financeReducer } from './finance/financeSlice';
import { globalReducer } from './globalSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        user: persistReducer(userPersistConfig, userReducer),
        finance: financeReducer,
        root: rootReducer,
        global: globalReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
