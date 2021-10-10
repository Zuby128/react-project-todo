import React from 'react'
import SubTodo from './SubTodo'
import { List } from 'reactstrap';


export default function Todo({todos, setTodos, filtered}) {
    return (
        <div className="todo-container">
            <List type="inline" className="todo-list w-100">
                {filtered.map((todo) => (
                    <SubTodo text={todo.text} todo={todo} key={todo.id} 
                    id={todo.id} todos={todos} setTodos={setTodos} />
                ))}
            </List>
        </div>
    )
}
