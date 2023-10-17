import { RootState } from "../../";

export const getTodosSelector = (state: RootState) => {
    return state.todo
}