import * as types from './types';

export function add(todo){
    return {
        type: types.ADD,
        payload: todo
    }
}

export function del(index){
    return {
        type: types.DEL,
        payload: index
    }
}

export function chng(index){
    return {
        type: types.CHNG,
        payload: index
    }
}