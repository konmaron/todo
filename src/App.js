import React from 'react';
import Todos from "./components/Todos/Todos";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import './App.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoAdd/>
                <hr className='bottomLine'/>
                <Todos/>
            </div>
        )
    }
}