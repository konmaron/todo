import * as types from './types'

const initState = {
    todos: []
}

export default function todosCounter(state = initState, {type, payload}){
    switch(type){
        case types.ADD: return {...state, todos: [...state.todos, payload]};
        case types.DEL: return {...state, todos: remove(state.todos, payload)};
        case types.CHNG: return {...state, todos: onChangeStatus(state.todos, payload)}
        default: return state;
    }
}

function remove(todos, index){
    const tmp = [...todos];
    tmp.splice(index, 1);
    return tmp;
}

function onChangeStatus(todos, index){
    const tmp = [...todos];
    tmp[index].isDone = !tmp[index].isDone;
    return tmp;
}