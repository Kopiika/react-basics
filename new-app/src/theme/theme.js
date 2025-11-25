import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#197',
		},
		secondary: {
			main: '#dc004e',
		},
		limeGreen:{
			main:'#32CD32'
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
})

export default theme;