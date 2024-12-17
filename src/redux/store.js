import {configureStore} from "@reduxjs/toolkit";
import {toDoReducer} from "./toDoSlice.js";
import {toDoFilter} from "./filterSlice.js";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'toDos',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, toDoReducer)
export const store = configureStore({reducer: {toDos: persistedReducer,filter: toDoFilter},middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })})
export const persistor = persistStore(store)