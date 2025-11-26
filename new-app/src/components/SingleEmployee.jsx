import axios from "axios"
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import useAxios from "../hooks/useAxios";

const SingleEmployee =()=>{
	const {id} = useParams();
	const [employee, setEmployee] = useState (null)
	console.log("Employee: ", employee)
	const [isloading, setisLoading] = useState(true)
	const[isEditing, setIsEditing] = useState(false)
	const [formData, setformData] = useState ({
		name: employee?.name || "",
		title: employee?.title || "",
		age: employee?.age || "",
	});

	const url = `https://react-basics-4ggk.onrender.com/employees/${id}`;
	const {data, loading, error } = useAxios (url);

	const handleChange = (e) =>{
		setformData((prevState) =>{
			return {...prevState, [e.target.name]: e.target.value}
		})
	}


	const toggleEdit =()=>{
		setIsEditing(!isEditing);
	}

	const handleSave =()=>{
		axios
		.put(`https://react-basics-4ggk.onrender.com/employees/${id}`, formData)
		.then((response) =>{
			setEmployee(response.data)
			setIsEditing(false)
		})
		.catch((error)=>{
			console.log("Error: ", error.message)
		})
		.finally(()=>{
			setisLoading(false)
		})
	}

	useEffect(()=>{
		if (data) {
			setEmployee(data);
			setformData ({
				name: data?.name,
				title: data?.title,
				age: Number(data?.age),
			})
		} 
		
	}, [id, data, loading]);

	if(loading || isloading) {
		return <div>Loading...</div>
	}

	if (isEditing) {
		return (
			<div>
				<form>
					<label htmlFor="name">Name:</label>
					<input 
						type="text" 
						name ="name" 
						value={formData.name} 
						onChange={handleChange}/>
					<label htmlFor="title">Title:</label>
					<input 
						type="text" 
						name ="title" 
						value={formData.title} 
						onChange={handleChange}/>
					<label htmlFor="age">Age:</label>
					<input 
						type="number" 
						name ="age" 
						value={formData.age} 
						onChange={handleChange}/>
				</form>
				<button onClick={toggleEdit}>Cancel</button>
				<button onClick={handleSave}>Save</button>
			</div>
		)
	}

	return (
		<div>
			<h3>Employee Details</h3>
			<p>Name: {employee?.name}</p>
			<p>Title: {employee?.title}</p>
			<p>Age: {employee?.age}</p>
			<p>Is Favourite: {employee?.isFavourite ? "Yes" : "No"}</p>
			<button onClick={toggleEdit}>Edit</button>
		</div>
	)
}

export default SingleEmployee