/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// api reducers
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./slices/authReducer";
import { globalReducer } from "./slices/globalReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const appReducer = combineReducers({
  // all reducers here
  auths: authReducer,
  globalstate: globalReducer,
});

const persistedAuthReducer = persistReducer(persistConfig, appReducer);
const rootReducer: Reducer = (state, action) => {
  if (action.type === "auths/reset") {
    state = undefined; // Reset state without calling persistor.purge()
  }
  return persistedAuthReducer(state, action);
};

export const Store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

setupListeners(Store.dispatch);
export const persistor = persistStore(Store);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
