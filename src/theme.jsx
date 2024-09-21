'use client'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
	colorSchemes: {
		dark: {
			palette: {
				gradient:
					'linear-gradient(to left, var(--mui-palette-primary-light), var(--mui-palette-primary-main))',
			},
		},
	},
})

export default theme
