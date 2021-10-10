/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import './App.css'
import Forms from "./components/Form";
import Todo from "./components/Todo";
import { Card, CardBody, CardTitle } from "reactstrap";


function App() {
  
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    filterHandler();
  }, [todos, status])


  const filterHandler = () => {
    // eslint-disable-next-line default-case
    switch(status){
      case 'completed':
        setFiltered(todos.filter(i => i.completed === true));
        break;
      // eslint-disable-next-line no-duplicate-case
      case 'completed':
        setFiltered(todos.filter(i => i.completed === false));
        break;
      default:
        setFiltered(todos);
        break
    }
  }
  return (
    <div className="main d-flex justify-content-center mt-5">
      <Card  className="card-element col-sm-12 col-md-6 text-center pb-5 min-vh-100 mb-5">
        <CardTitle tag="h3" className="mt-3">Zub Todo List</CardTitle>
        <CardBody>
          <Forms
            inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos} 
            setStatus={setStatus} />
          <Todo todos={todos} setTodos={setTodos} filtered={filtered} />
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
