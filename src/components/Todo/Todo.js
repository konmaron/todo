import './Todo.css';


export default function Todo({todo, index, remove, onChangeStatus}){
    return(
        <li key={index}>
        <input type='checkbox'
               className='checkbox'
               checked={todo.isDone}
               onChange={(event => onChangeStatus(index, event.target.checked))}
        />
        <span style={{textDecoration:todo.isDone ? 'line-through' : 'none'}}>{todo.title}</span>
        <button onClick={() => remove(index)} className='removeButton'>REMOVE</button>
    </li>)
    }
