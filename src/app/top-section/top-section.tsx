import { Button, Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './top-section.module.scss'

const TopSection = () => {
	return (
		<Grid
			container
			marginTop='40px'
			className={styles.TopSection}
			position='relative'
		>
			<div
				className={styles.MainTitle}
				style={{ width: '100%', height: '100%' }}
			>
				{/* <h1>INCOM</h1> */}
				<Image
					src='/images/INCOM.png'
					alt='incom'
					// layout='fill'
					width={1000}
					height={1}
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<Grid
				sm={12}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				position='relative'
				bottom='100px'
				paddingTop='20px'
			>
				<Grid
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					width='100%'
					// style={{ backgroundColor: 'red', width: '100%' }}
				>
					<div className={styles.TextBox}>
						<h1>
							<span className={styles.HiglitedText}>Turn</span> your products
						</h1>
						<h1>
							<span className={styles.HiglitedText}>Into</span> videos in{' '}
							<span className={styles.HiglitedText}>One</span> Click
						</h1>
						<h1>
							WITH <span className={styles.HiglitedText}>AI</span>
						</h1>
					</div>
					<div className={styles.Img}>
						<Image
							src='/images/robots/robot-10.png'
							width={494}
							height={300}
							// layout='fill'
							alt='robot'
						/>
					</div>
				</Grid>
			</Grid>

			<Grid>
				<Button size='large' variant='contained'>
					GET STARTED FOR FREE
				</Button>
			</Grid>

			{/* <Grid sm={12}></Grid> */}
		</Grid>
	)
}

export default TopSection
