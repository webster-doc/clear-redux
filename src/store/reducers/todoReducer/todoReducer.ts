import { addTodo, deleteTodo } from './actions'
import { TodosStore, TodosActions } from './types'

const initialState: TodosStore = []

export function todoReducer(state = initialState, action: TodosActions ) {
    switch (action.type) {
        case addTodo.type:
            const newTodoItem = action.payload
            return [...state, newTodoItem]
        case deleteTodo.type:
            const deleteItemId = action.payload.id
            return [...state.filter(({id}) => (id !== deleteItemId))]
        default:
            return state
    }
}