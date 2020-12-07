import React from "react";
import './TodoAdd.css'

export default function TodoAdd({value, onChange, addClickHandler}){
    return (
        <div className="header">
            <input type='text'
                   value={value}
                   onChange={onChange}
                   className='headerInput'
                   placeholder='Type your todo'
            />
            <button onClick={() => addClickHandler()} className='addButton'>ADD</button>
        </div>
    )
}