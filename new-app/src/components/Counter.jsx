
import styles from './Counter.module.css'

const Counter = ({count, setCount}) =>{

	/*const handleBackgroundColor = () => {
		if (count === 0) {
			return "grey"
		} else if (count > 0){
			return "green"
		} else if (count < 0){
			return "red"
		}
	}*/

	const handleBackgroundColor = () =>{
		switch (true) {
			case count === 0:
				return "blue";
			case count > 0:
				return "green";
			case count < 0:
				return "red";
			default:
				return "blue";
		}
	}

	return (
		<div className ={styles.container}>
			<button className={styles.btn} onClick={() => setCount(count + 1)}>+</button>
			<button className={styles.btn} onClick={() => setCount(count - 1)}>-</button>
			{/* <div style={{color: count > 0 ? "green" : "red"}}>{count}</div> */}
			<div style={{backgroundColor: handleBackgroundColor()}}>{count}</div>
		</div>
		
	)
}

export default Counter