import './Todo.css';
import {Context} from "../TodoApp/TodoApp";

export default function Todo({index}) {
    return (
        <Context.Consumer>
            {
                cntx => {
                    return (
                        <li key={index} id={index}>
                            <input type='checkbox'
                                   className='checkbox'
                                   checked={cntx.todos[index].isDone}
                                   onChange={(event => cntx.onChangeStatus(index, event.target.checked))}
                            />
                            <span style={{textDecoration: cntx.todos[index].isDone ? 'line-through' : 'none'}}>
                                {cntx.todos[index].title}
                            </span>
                            <button onClick={() => cntx.remove(index)} className='removeButton'>REMOVE</button>
                        </li>
                    )
                }
            }
        </Context.Consumer>
    )
}
