import styles from './Header.module.css'
import {Link} from "react-router"

const Header = () =>{
	return (

		<header className={styles.header}>
        <p className={styles.logo}>Logo</p>
		  <nav className={styles.nav}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
		  </nav>
		</header>
	)
}

export default Header