
import styles from './Footer.module.css'

const Footer = ({count, setCount}) => {
	
	return (
		<footer className={styles.footer}>
		<p>&copy; WP25K</p>
		<div>{count}</div>
		<button className={styles.btn} onClick={() => setCount(count+1)}>+</button>
		</footer>
	)
}

export default Footer