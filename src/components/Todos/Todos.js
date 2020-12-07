import Todo from "../Todo/Todo";
import './Todos.css'

export default function Todos({t, i, remove, onChangeStatus}){
        return (
            <ul>
                <Todo
                    key = {i}
                    index = {i}
                    todo={t}
                    remove={remove}
                    onChangeStatus={onChangeStatus}
                />
            </ul>
        )
}