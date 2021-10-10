import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Button, Form, Input } from 'reactstrap';


library.add(faPlusSquare)



export default function Forms({ inputText, setInputText, todos, setTodos, setStatus }) {


    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        // if(e.target.value === ''){
        //     return setTodos([...todos])
        // }
        setTodos([
            ...todos, { text: inputText, completed: false, id: todos.length + 1 }
        ])
        setInputText('')
    }
    const filterHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <>
            <Form className="d-flex flex-row mb-5">
                <Input type="text" value={inputText} onChange={inputTextHandler} placeholder="to do  or not to do..." />
                <Button className="btn btn-dark" type="submit" onClick={submitTodoHandler}>
                    <FontAwesomeIcon icon="fas fa-plus-square" />
                </Button>
                <Input type="select" onChange={filterHandler}>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </Input>
            </Form>
        </>
    )
}
