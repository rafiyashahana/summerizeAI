import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { articleApi } from "./articleReducer";

export const store = configureStore({
  reducer: { rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(articleApi.middleware),
});
