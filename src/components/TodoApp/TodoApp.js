import React from 'react';
import Todos from "../Todos/Todos";
import TodoAdd from "../TodoAdd/TodoAdd";
import './TodoApp.css'

export const Context = React.createContext({
    todos: [],
    remove: (index) => {
    },
    onChangeStatus: (index, isDone) => {
    },
    inputChangeHandler: (event) => {
    },
    add: (title) => {
    },
    submitHandler: (event) => {
    }
})

export default class TodoApp extends React.Component {
    state = {
        todos: []
    }

    remove = (index) => {
        const tmp = [...this.state.todos];
        tmp.splice(index, 1);
        this.setState({todos: tmp});
    }

    onChangeStatus = (index, isDone) => {
        const tmp = [...this.state.todos];
        tmp[index] = {...tmp[index], isDone};
        this.setState({todos: tmp});
    }

    inputChangeHandler = (event) => {
        this.setState({inp: event.target.value});
    }

    add = (title) => {
        this.setState({todos: [...this.state.todos, {title, isDone: false}]})
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.add(event.target.inp.value);
        event.target.inp.value = '';
    }

    render() {
        return (
            <Context.Provider value={{
                todos: this.state.todos,
                remove: this.remove,
                onChangeStatus: this.onChangeStatus,
                inputChangeHandler: this.inputChangeHandler,
                add: this.add,
                submitHandler: this.submitHandler
            }}>
                <TodoAdd/>
                <hr className='bottomLine'/>
                <ul>
                    {
                        this.state.todos.map((t, i) =>
                            <Todos
                                i={i}
                                key={i}
                            />)
                    }
                </ul>
            </Context.Provider>
        )
    }
}