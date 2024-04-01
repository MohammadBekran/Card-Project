import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkMode from "./darkMode";

const darkModePersistConfig = {
  key: "darkMode",
  storage,
};

const darkModePersistedReducer = persistReducer(
  darkModePersistConfig,
  darkMode
);

const store = configureStore({
  reducer: {
    darkMode: darkModePersistedReducer,
  },
});

const persistor = persistStore(store);

export { persistor, store };
