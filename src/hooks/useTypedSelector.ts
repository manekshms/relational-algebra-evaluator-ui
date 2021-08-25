import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootReducer } from "../state/reducer/";

export const useSelector: TypedUseSelectorHook<RootReducer> = _useSelector;
