import './Todo.css';
import {connect} from 'react-redux';

function Todo(props, {index}) {
    console.log(props);
    return (
        <li key={index} id={index}>
            <input type='checkbox'
                   className='checkbox'
                // checked={cntx.todos[index].isDone}
                //    onChange={(event => cntx.onChangeStatus(index, event.target.checked))}
            />
            {/*<span style={{textDecoration: cntx.todos[index].isDone ? 'line-through' : 'none'}}>*/}
            {/*    {cntx.todos[index].title}*/}
            {/*</span>*/}
            <button onClick={() => {
                console.log('del')
                props.deleteTodo(index)
            }} className='removeButton'>REMOVE</button>
        </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Todo);