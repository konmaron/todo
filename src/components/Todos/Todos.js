import {connect} from 'react-redux';
import * as Actions from '../../redux/actions'
import './Todos.css'

function Todos(props) {
    return (
        <>
            {props.tds.map((todo, index) => (
                <li key={index} id={index}>
                    <input type='checkbox'
                           className='checkbox'
                           checked={props.tds[index].isDone}
                           onChange={() => props.changeStatus(index)}
                    />
                    <span style={{textDecoration: props.tds[index].isDone ? 'line-through' : 'none'}}>
                        {props.tds[index].todo}
                    </span>
                    <button onClick={(event) => {
                        event.preventDefault();
                        props.deleteTodo(index)
                    }} className='removeButton'>REMOVE</button>
                </li>
            ))}
        </>
    )
}

function mapStateToProps(state){
    return{
        tds: state.todos
    }
}

function mapDispatchToProps(dispatch){
    return {
        addTodo: (todo) => dispatch(Actions.add(todo)),
        deleteTodo: (index) => dispatch(Actions.del(index)),
        changeStatus: (index) => dispatch(Actions.chng(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);