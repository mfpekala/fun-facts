import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createSelectorHook, useDispatch } from "react-redux";
import FactsReducer from "./modules/Facts";

const rootReducer = combineReducers({
  facts: FactsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector = createSelectorHook<RootState>();
export const useTypedDispatch = useDispatch;

const store = configureStore({ reducer: rootReducer });

export default store;
