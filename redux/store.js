import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { recordsReducer } from '../features/records/recordsSlice';
import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}



export const store = configureStore({
    reducer: persistCombineReducers(config, {
        records: recordsReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        })
});


export const persistor = persistStore(store);