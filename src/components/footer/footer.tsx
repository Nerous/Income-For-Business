import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
	return (
		<Grid container className={styles.MainContainer}>
			<hr className={styles.Line} />
			<div className={styles.RobotImg}>
				<Image
					src='/images/robots/robot-9.png'
					width={70}
					height={70}
					alt='robot'
				/>
			</div>
			<div className={styles.MainContent}>
				<div className={styles.TopBox}>
					<div className={styles.LeftSide}>
						<Image
							src='/images/logo.png'
							alt='logo'
							width={250}
							height={50}
							priority
						/>
					</div>
					<div className={styles.RightSide}>
						<div className={styles.Title}>Follow Us On Social</div>
						<div className={styles.MediaLinks}>
							<Image
								src='/images/facebook-icon.png'
								alt='facebook'
								width={20}
								height={20}
							/>
							<Image
								src='/images/linkedin-icon.png'
								alt='linkedin'
								width={20}
								height={20}
							/>
							<Image
								src='/images/tiktok-icon.png'
								alt='tik tok'
								width={20}
								height={20}
							/>
							<Image
								src='/images/instagram-icon.png'
								alt='instagram'
								width={20}
								height={20}
							/>
						</div>
					</div>
				</div>
				<div className={styles.BottomBox}>
					<div className={styles.Copyright}>
						<h4>2024 • All Rights Reserved</h4>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default Footer
