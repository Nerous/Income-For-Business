import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from '../guide-sections.module.scss'

const EdditingPageSection = () => {
	return (
		<Grid container className={styles.SectionWithImageAndText}>
			<div className={styles.MainContent}>
				<div className={styles.ImgBox}>
					<Image
						src='/images/tutorial/edit.png'
						width='700'
						height='350'
						// fill
						alt='editing'
						className={styles.Img}
					/>
					<Image
						src='/images/robots/robot-4.png'
						width='350'
						height='370'
						// fill
						alt='editing'
						className={styles.robotImg}
					/>
				</div>
				<div className={styles.TextBox}>
					<div className={styles.MainTitle}>
						<h1>Let the AI Work Its Magic</h1>
					</div>
					<div className={styles.SecondaryTitle}>
						<h2>Preview, Export, and Share</h2>
					</div>
					<div className={styles.MainText}>
						<h4>
							Once you’ve made your customizations, sit back and let our
							advanced AI technology work its magic. It will automatically
							generate a personalized, high-quality video tailored to your
							specifications. Preview your video in real-time to ensure it meets
							your expectations. When you’re satisfied, export your video in
							your preferred format and share it instantly on social media, your
							website, or through email with just a few clicks.
						</h4>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default EdditingPageSection
