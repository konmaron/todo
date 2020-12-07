import React from 'react';
import Todos from "../Todos/Todos";
import TodoAdd from "../TodoAdd/TodoAdd";
import './TodoApp.css'

export default class TodoApp extends React.Component{
    state = {
        inp: '',
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
        this.setState({todos:tmp});
    }

    inputChangeHandler = (event) => {
        this.setState({inp: event.target.value});
    }

    addClickHandler = () => {
        const tmp = [...this.state.todos, {title: this.state.inp, isDone: false}];
        this.setState({inp: '', todos: tmp});
    }

    render() {
        return (
            <>
                <TodoAdd
                    value={this.state.inp}
                    onChange={this.inputChangeHandler}
                    addClickHandler = {this.addClickHandler}
                />
            <hr className='bottomLine'/>
                {
                    this.state.todos.map((t, i) =>
                        <Todos
                            t={t}
                            i={i}
                            key={i}
                            remove={this.remove}
                            onChangeStatus={this.onChangeStatus}
                        />)
                }
        </>
        )
    }
}