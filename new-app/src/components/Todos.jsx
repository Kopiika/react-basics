import axios from "axios";
import React, {useState, useEffect} from "react";

const Todos = () =>{
	const [todos, setTodos] = useState([]);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState (true)
	const [error, setError] = useState(null);

	useEffect(()=>{
		const fetchData =async () => {
			try {
				const [todosResponse, usersResponse] = await Promise.all ([
					axios.get("https://jsonplaceholder.typicode.com/todos"),
					axios.get("https://jsonplaceholder.typicode.com/users")
				]);
				setTodos(todosResponse.data)
				setUsers(usersResponse.data)
			} catch (error){
				setError(error.message)}
			finally{
				setLoading(false)
			}
		}
		fetchData();
  }, []);
		
/*
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then((res)=>res.json())
		.then(setUsers)
		.catch(console.error)
		.finally(()=> setLoading(false))
	}, [])*/

if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

	return (
		<div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>ID: {todo.id}</h3>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos