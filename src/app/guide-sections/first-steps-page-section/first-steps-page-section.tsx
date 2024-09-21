import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from '../guide-sections.module.scss'

const FirstStepsSection = () => {
	return (
		<Grid container className={styles.SectionWithImageAndText}>
			<div className={styles.HeaderTitle}>
				<h1>
					How it <span className={styles.HiglitedText}>works</span>
				</h1>
			</div>
			<div className={styles.MainContent}>
				<div className={styles.ImgBox}>
					<Image
						src='/images/tutorial/goal.png'
						width='700'
						height='350'
						// fill
						alt='goal'
						className={styles.Img}
					/>
				</div>
				<div className={styles.TextBox}>
					<div className={styles.MainTitle}>
						<h1>Input Product Information</h1>
					</div>
					<div className={styles.SecondaryTitle}>
						<h2>Easily Enter Your Details</h2>
					</div>
					<div className={styles.MainText}>
						<h4>
							Begin by entering the details of your product or page. Our
							user-friendly interface allows you to input text, upload images,
							and provide URLs effortlessly. This information will serve as the
							foundation for your video creation.
						</h4>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default FirstStepsSection
