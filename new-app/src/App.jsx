import { useState } from "react";
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import CardForm from './components/CardForm'
import useCount from './hooks/useCounter'
import data from './data'



function App() {
  const {count,setCount} = useCount();
  const [employees, setEmployees] = useState(data);
  const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		title: "",
		age: "",
	})

  const handleClick = () => {
    setEmployees([
      ...employees,
      { 
        id: employees.length +1,
        name: formData.firstName + " " + formData.lastName,
        title: formData.title,
        age: formData.age,
        isFavorite:false, 
      },
    ]);
  };
 
  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return {
          ...employee,
          isFavourite: !employee.isFavourite, // ← простіше і правильніше
        };
      }
      return employee;
    });
  
    setEmployees(updatedEmployees); 
  };

  

  return (
    <>
    <div className="wrapper">
    <Header/>
      <main className="main">
        <div className="cards-container">
        {employees.map((employee) => {
          return (
            <Card
              key={employee.id} 
              {...employee}
              toggleFavourite={toggleFavourite}
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
     <Footer count={count} setCount={setCount}/>
    </div>
    </>
  )
}

export default App
