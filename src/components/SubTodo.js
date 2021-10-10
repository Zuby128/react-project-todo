import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react'
import { Button, ListInlineItem } from 'reactstrap'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTrashCan, faCheck)

export default function SubTodo({text, id, todos, setTodos, todo}) {
    const deleteHandler = () => {
        setTodos(todos.filter(i => i.id !== id))
    }
    const completeHandler = () => {
        setTodos(todos.map(i => {
            if(i.id === id) {
                return {
                    ...i, completed: !i.completed
                }
            }
            return i
        }))
    }

    return (    
        <div>
            <ListInlineItem className={`todo-item${todo.completed ? '-completed' : ''} d-flex justify-content-between mb-2`}>
                <div className="py-1 mb-1">
                    {text}
                </div>
                <div>
                    <Button onClick={completeHandler} className="btn btn-success btn-complete mb-1 py-1"><FontAwesomeIcon icon="fa-solid fa-check" /></Button>
                    <Button onClick={deleteHandler} className="btn btn-danger btn-delete mb-1 py-1"><FontAwesomeIcon icon="fa-solid fa-trash-can" /></Button>
                </div>
            </ListInlineItem>
        </div>
    )
}
