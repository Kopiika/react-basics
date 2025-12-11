import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Counter from '../components/Counter'
import CardForm from '../components/CardForm'
import useCount from '../hooks/useCounter'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, TextField, Typography } from "@mui/material";



function Home() {
  const {count,setCount} = useCount();
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		title: "",
		age: "",
	})

  const[loading, setLoading] = useState(false)

	useEffect(() =>{
    setLoading(true);
		axios.get("/employees")
		.then( (response) => {
			setEmployees (response.data);
		})
    .catch((error) =>{
      console.log("Error fatching persons: ", error.message);
    })
    .finally(() => {
      setLoading(false);
    })
	}, []);

  const handleClick = () => {
	axios.post("/employees", {
		  id: String(employees.length +1),
        name: formData.firstName + " " + formData.lastName,
        title: formData.title,
        age: formData.age,
        isFavourite:false, 
	}). then((response) => {
		setEmployees([...employees,response.data])
	}) 
  };

  const handleDelete = (id) => {
	axios.delete(`/employees/${id}`)
	.then(() =>{
		setEmployees(employees.filter((employee) => employee.id !==id))
	})
  .catch((error) => {
    console.log("Error deleting employee: ", error.message);
  });
	
  }
  //Tasks 09.12

  //button
    const [isOn, setIsOn] =useState(false)
    const handleToggle = () =>{
      setIsOn (prevState => !prevState) 
    }
  //input
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e) =>{
		setInputValue(e.target.value)
	}
  const charCount = inputValue.length;

  //list
  const [todos] = useState(
    [
      {id: 1,
       title: "Buy milk"},
      {id: 2,
       title:"Walk dog"},
      {id: 3,
        title:"Study React"}
    ]
  );
  const handleClickTodo = (title) => {
    console.log(title);}

//Parent–Child Communication via Props
  function Child ({count, onIncrement}){
    return (
      <div>
        <p>Current count: {count}</p>
        <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }
  const [childCount, setChildCount] = useState(0);

  const increment = () => {
    setChildCount(prev => prev + 1);
  };

  //loading 
  const[isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  //Filtered List
  const [search, setSearch] = useState("");
  const names = [
    "Alice", 
    "Bob", 
    "Charlie", 
    "David"
  ];
  const handleChangeFilter = (e) => {
    setSearch(e.target.value);
  };
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  //form
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (username.trim() === "") {
      setError("Username is required");
    } else {
      setError("");
      alert(`Hello, ${username}!`);
    }
  }
  /* ===================================================== */
 
  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          isFavourite: !employee.isFavourite, 
        };
      }
      return employee;
    });
  
    setEmployees(updatedEmployees); 
  };

  if(loading){
    return <div>Loading...</div>
  }
  
  

  return (
    <>
    <div className="wrapper">
    
      <main className="main">

      <h3>Tasks 09.12</h3>
      {/* Toggle Button */}
      <Button
        variant="contained"
        color="success"
        onClick={handleToggle}
        sx={{ mb: 2 }}
      >
        {isOn ? "ON" : "OFF"}
      </Button>
      
      {/* Controlled Input with Character Count */}
      <Box sx={{ mb: 3 }}>
        <TextField
          id="charactersField"
          label="Type here"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          fullWidth
        />
        <Typography
          variant="body2"
          sx={{ color: charCount > 20 ? "red" : "text.primary", mt: 1 }}
        >
          You typed {charCount} characters
        </Typography>
      </Box>

      {/* Parent–Child Component */}
      <Box sx={{ mb: 3 }}>
        <Child count={childCount} onIncrement={increment} />
      </Box>

      {/* Loading Simulation */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body1">
          {isLoading ? "Loading..." : "Data loaded."}
        </Typography>
      </Box>

      {/* Todo List */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1">Todos:</Typography>
        <Box component="ul" sx={{ pl: 2 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ cursor: "pointer", marginBottom: "4px" }}
              onClick={() => handleClickTodo(todo.title)}
            >
              {todo.title}
            </li>
          ))}
        </Box>
      </Box>

      {/* Filtered List */}
      <Box sx={{ mb: 3 }}>
        <TextField
          label="Type to filter"
          variant="outlined"
          value={search}
          onChange={handleChangeFilter}
          fullWidth
        />
        <Box component="ul" sx={{ pl: 2, mt: 1 }}>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </Box>
      </Box>
      
      {/* Simple Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        {error && (
          <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>

    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>


      <Button 
        startIcon={<DeleteIcon />}
        variant="contained"
        color="primary" 
        sx={{margin:2, padding:"30px"}}>Click me I am from MUI!</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button endIcon={<DeleteIcon/>} variant="contained" color="limeGreen" href="#contained-buttons">
        Link
      </Button>

      

      <Button variant="outlined" color="error">
        Error
      </Button>
        <div className="cards-container">
        {employees.map((employee) => {
          return (
            <Card
              key={employee.id} 
              {...employee}
              toggleFavourite={toggleFavourite}
				  handleDelete={handleDelete}
            />
          );
        })}
        </div>
        
      <Counter count={count} setCount={setCount}/>
      <CardForm 
        formData={formData} 
        setFormData={setFormData} 
        handleClick={handleClick}/>
      </main>
      
    </div>
    </>
  )
}


export default Home;