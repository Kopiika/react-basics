import AppBar from '@mui/material/AppBar'
import App from '../App'
import styles from './Header.module.css'
import {Link, Links} from "react-router"
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Header = () =>{

	return(
		<AppBar position="static">
			<Toolbar>
				<Typography varian="h6" component="div" sx={{ flexGrow: 1 }}>
					Logo
				</Typography>
				<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
					<Button color="inherit" component={Link} to="/">Home</Button>
					<Button color="inherit" component={Link} to="/about">About</Button>
					<Button color="inherit" component={Link} to="/todos">Todos</Button>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header