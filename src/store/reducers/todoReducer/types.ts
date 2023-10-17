import { addTodo, deleteTodo } from './actions'

export interface Todo {
    id: string,
    text: string
}

export type TodosStore = Todo[]

export interface AddTodoPayload {
    text: string
}

export interface DeleteTodoPayload {
    id: string
}

export type TodosActions = ReturnType<typeof addTodo> | ReturnType<typeof deleteTodo>