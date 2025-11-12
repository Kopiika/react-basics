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



function Home() {
  const {count,setCount} = useCount();
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		title: "",
		age: "",
	})

	useEffect(() =>{
		axios.get("http://localhost:3001/employees")
		.then( (response) => {
			setEmployees (response.data);
		})
	}, []);

  const handleClick = () => {
	axios.post("http://localhost:3001/employees", {
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
	axios.delete(`http://localhost:3001/employees/${id}`)
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

  

  return (
    <>
    <div className="wrapper">
    
      <main className="main">
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