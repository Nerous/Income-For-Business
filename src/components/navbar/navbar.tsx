import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './navbar.module.scss'

const Navbar = () => {
	return (
		<Grid container className={styles.Container}>
			<Grid item sm={5}>
				<Image
					src='/images/logo.png'
					alt='logo'
					width={250}
					height={50}
					priority
				/>
			</Grid>
			<Grid
				item
				sm={7}
				className={styles.Bottom}
				// display='flex'
				// justifyContent='space-between'
			>
				<Grid item className={styles.LinksBox} sm={9}>
					<p className={styles.LinkTag}>About</p>
					<p className={styles.LinkTag}>How it works</p>
					<p className={styles.LinkTag}>Pricing</p>
					<p className={styles.LinkTag}>Contact</p>
				</Grid>
				<Grid item sm={3} textAlign='right'>
					<Button
						variant='contained'
						// color='primary'
						size='medium'
						className={styles.Button}
					>
						Get Started
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Navbar
