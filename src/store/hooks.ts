import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

import { AppDispatchType, RootStateType } from "./store";

type DispatchFunction = () => AppDispatchType;

export const useAppDispatch: DispatchFunction = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
