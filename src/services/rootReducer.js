import { combineReducers } from "@reduxjs/toolkit";
import { articleReducer } from "./articleReducer";

export const rootReducer = combineReducers({
  article: articleReducer,
});
