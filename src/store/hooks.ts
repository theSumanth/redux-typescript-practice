import { useDispatch } from "react-redux";

import { AppDispatchType } from "./store";

type DispatchFunction = () => AppDispatchType;

export const useAppDispatch: DispatchFunction = () => useDispatch();
