import { useState } from "react";
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import useCount from './hooks/useCounter'
import data from './data'



function App() {
  const {count,setCount} = useCount();
  const [employees, setEmpoyees] = useState(data);
  const handleClick = () => {
    setEmpoyees([
      ...employees,
      { name: "John", title: "Developer", age: 66 }
    ]);
  };
 
  return (
    <>
    <div className="wrapper">
    <Header/>
      <main className="main">
        <div className="cards-container">
        {employees.map((employee, index) => {
          return (
            <Card
              key={index}
              name={employee.name}
              title={employee.title}
              age={employee.age}
            />
          );
        })}
        </div>
        <button onClick={handleClick}>Add Employee</button>
      <Counter count={count} setCount={setCount}/>
      </main>
     <Footer count={count} setCount={setCount}/>
    </div>
    </>
  )
}

export default App
