import React from "react";
import './TodoAdd.css'
import {connect} from 'react-redux';

function TodoAdd(props) {
    return (
        <div className="header">
            <form action='#' onSubmit={(event) => {
                event.preventDefault();
                props.addTodo({todo: event.target.inp.value, isDone: false});
                event.target.inp.value = '';
            }}>
                <input type='text'
                       className='headerInput'
                       placeholder='Type your todo'
                       name='inp'
                       id='todoAddInp'
                       required
                />
                <button className='addButton' id='addButton'>ADD</button>
            </form>
        </div>
    )
}

function mapStateToProps(state){
    return{
        tds: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo: (todo) => dispatch({type: 'ADD', payload: todo}),
        deleteTodo: (id) => dispatch({type: 'DEL', payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd);