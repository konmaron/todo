import React from "react";
import './TodoAdd.css'
import {Context} from "../TodoApp/TodoApp";

export default function TodoAdd() {
    return (
        <Context.Consumer>
            {
                cntx => {
                    return (
                        <div className="header">
                            <form action='#' onSubmit={cntx.submitHandler}>
                                <input type='text'
                                       className='headerInput'
                                       placeholder='Type your todo'
                                       name='inp'
                                />
                                <button className='addButton'>ADD</button>
                            </form>
                        </div>
                    )
                }
            }
        </Context.Consumer>

    )
}