import { Grid } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import styles from './features-section.module.scss'

const FeaturesSection = () => {
	return (
		<Grid container className={styles.Section}>
			<div className={styles.HeaderTitle}>
				<h1>
					incom <span className={styles.HiglitedText}>feautures</span>
				</h1>
			</div>

			<div className={styles.CardBox}>
				<div className={styles.Card}>
					<div className={styles.Header}>
						<div className={styles.Title}>
							<h4>Template Variety</h4>
						</div>
						<div className={styles.ImgBox}>
							<Image
								src='/images/vector.png'
								width={60}
								height={70}
								alt='vector'
							/>
						</div>
					</div>
					<hr className={styles.Line} />
					<div className={styles.BottomContent}>
						<div className={styles.TopText}>
							<div>
								<h2>Extensive Selection of Professional Templates</h2>
							</div>
						</div>
						<div className={styles.BottomText}>
							<p>
								Choose from a wide range of professionally designed video
								templates tailored to different industries and purposes.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.Card}>
					<div className={styles.Header}>
						<div className={styles.Title}>
							<h4>AI Customization</h4>
						</div>
						<div className={styles.ImgBox}>
							<Image
								src='/images/pencil.png'
								width={60}
								height={70}
								alt='pencil'
							/>
						</div>
					</div>
					<hr className={styles.Line} />
					<div className={styles.BottomContent}>
						<div className={styles.TopText}>
							<div>
								<h2>Intelligent Video Personalization</h2>
							</div>
						</div>
						<div className={styles.BottomText}>
							<p>
								Harness the power of AI to automatically customize your video
								templates. Our advanced algorithms analyze your input and
								generate personalized, high-quality videos that reflect your
								brand's style and message.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.Card}>
					<div className={styles.Header}>
						<div className={styles.Title}>
							<h4>Quick Export</h4>
						</div>
						<div className={styles.ImgBox}>
							<Image
								src='/images/download.png'
								width={60}
								height={70}
								alt='vector'
							/>
						</div>
					</div>
					<hr className={styles.Line} />
					<div className={styles.BottomContent}>
						<div className={styles.TopText}>
							<div>
								<h2>Fast and Convenient Video Download</h2>
							</div>
						</div>
						<div className={styles.BottomText}>
							<p>
								Save time with our quick export feature. Once your video is
								ready, Share It instantly on social media, websites, or through
								email with just a few clicks.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default FeaturesSection
