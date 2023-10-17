import { createAction, nanoid } from '@reduxjs/toolkit'
import {AddTodoPayload, DeleteTodoPayload} from "./types";

export const addTodo = createAction('todos/add', function prepare({text}: AddTodoPayload ) {
    return {
        payload: {
            id: nanoid(),
            text
        },
    }
})

export const deleteTodo = createAction('todos/delete', function prepare({id}: DeleteTodoPayload) {
    return {
        payload: {
            id
        },
    }
})
