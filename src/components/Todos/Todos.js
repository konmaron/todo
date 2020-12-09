import Todo from "../Todo/Todo";
import './Todos.css'

export default function Todos({i}) {
    return (
        <>
            <Todo index={i}/>
        </>
    )
}