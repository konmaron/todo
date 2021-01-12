import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from "./App";
import todosCounter from './redux/todosCounter';

const store = createStore(todosCounter, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <div className='container'>
            <App/>
        </div>
    </Provider>,
    document.getElementById('root'));

function saveToLocalStorage(state){
    try {
        const serializesState = JSON.stringify(state);
        localStorage.setItem('todos', serializesState);
    } catch (e) {
        console.error(e);
    }
}

function loadFromLocalStorage(){
    try{
        const serialisedState = localStorage.getItem('todos');
        if(serialisedState === null){
            return undefined;
        }else{
            return JSON.parse(serialisedState);
        }
    } catch (e){
        console.error(e);
        return undefined;
    }
}
