import { useEffect, useState } from "react";
import axios from 'axios';
import '../App.css'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Counter from '../components/Counter'
import CardForm from '../components/CardForm'
import useCount from '../hooks/useCounter'
import data from '../data'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';



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
		axios.get("https://react-basics-4ggk.onrender.com/employees/employees")
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
	axios.post("https://react-basics-4ggk.onrender.com/employees", {
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
	axios.delete(`https://react-basics-4ggk.onrender.com/employees/${id}`)
	.then((response) =>{
		setEmployees(employees.filter((employee) => employee.id !==id))
	})
	
  }
 
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

      <Button variant="contained" color="success">
        Success
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