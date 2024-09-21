import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from '../guide-sections.module.scss'

const AccountPageSection = () => {
	return (
		<Grid container className={styles.SectionWithImageAndText}>
			<div className={styles.MainContent}>
				<div className={styles.TextBox}>
					<div className={styles.MainTitle}>
						<h1>Select and Customize a Template</h1>
					</div>
					<div className={styles.SecondaryTitle}>
						<h2>Choose and Personalize Your Design</h2>
					</div>
					<div className={styles.MainText}>
						<h4>
							Browse our extensive library of professionally designed video
							templates. Select the one that best fits your needs, whether it's
							for a promotional video, an explainer video, or social media
							content. Customize your selected template with our intuitive
							drag-and-drop editor. Adjust colors, fonts, layouts, and add or
							remove elements to suit your preferences.
						</h4>
					</div>
				</div>
				<div className={styles.ImgBox}>
					<Image
						src='/images/tutorial/templates.png'
						width='700'
						height='350'
						// fill
						alt='templates'
						className={styles.Img}
					/>
				</div>
			</div>
		</Grid>
	)
}

export default AccountPageSection
