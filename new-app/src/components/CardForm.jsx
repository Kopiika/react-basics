import { useState } from 'react';
import styles from './CardForm.module.css';

function Form({formData, setFormData, handleClick}) {

const handleChange = (e) => {
setFormData((prevState)=>{
	return {...prevState, 
	[e.target.name]: e.target.value}
	});
};

const handleSubmit = (e) => {
	e.preventDefault();
	// Перевірка: усі поля повинні бути заповнені
    const { firstName, lastName, title, age } = formData;
    if (!firstName || !lastName || !title || !age) {
      alert("Please fill in all fields before adding an employee.");
      return; // зупиняємо виконання
		}

	handleClick(); // якщо всі поля заповнені, додаємо працівника

	//optional reseting of the form
	setFormData({
		firstName: "",
		lastName: "",
		title: "",
		age: "",
	}) 
}


return (
	<div className={styles.formContainer}>
		<form className={styles.addPersonForm} onSubmit={handleSubmit}>
		<h2>Add new person</h2>
		<label className={styles.label} htmlFor="firstName">First Name:
			<input 
				id="firstName" 
				name="firstName" 
				value={formData.firstName}
				onChange={handleChange} 
			/>
		</label>
		<label className={styles.label} htmlFor="lastName">Last Name:
			<input 
				id="lastName" 
				name="lastName" 
				value={formData.lastName}
				onChange={handleChange} 
			/>
		</label>
		<label className={styles.label} htmlFor="title">Title:
			<input 
				id="title" 
				name="title" 
				value={formData.title}
				onChange={handleChange} 
			/>
		</label>
		<label className={styles.label} htmlFor="age">Age:
			<input 
				id="age" 
				name="age" 
				value={formData.age}
				onChange={handleChange} 
			/>
		</label>
		<button className={styles.button} type='submit'>Add Employee</button>
		{/* <button
			type="button"
			onClick={()=>
				setFormData({
					firstName: "",
					lastName: "",
					title: "",
					age: "",
				})
			}>Reset Form</button> */}
		</form>
		<div className={styles.textContainer}>
			<p>Your first name is: {formData.firstName}</p>
			<p>Your last name is: {formData.lastName}</p>
			<p>Your title is: {formData.title}</p>
			<p>Your age is: {formData.age}</p>
		</div>
		
	</div>
);
}
export default Form;
