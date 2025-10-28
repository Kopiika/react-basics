import styles from './Card.module.css'
const Card = (props) => {
	return (
	<div className={styles.card}> 
		<h2 className={styles.name}>{props.name}</h2>
		<div className={styles.text}>Title: {props.title}</div>
		<div className={styles.text}>Age: {props.age}</div> 
	</div>
	);
	}

export default Card