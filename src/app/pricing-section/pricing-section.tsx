import { Button, Grid } from '@mui/material'
import React from 'react'

import styles from './pricing-section.module.scss'

const PricingSection = () => {
	return (
		<Grid container className={styles.PricingSection}>
			<div className={styles.HeaderTitle}>
				<h1>Pricing</h1>
			</div>

			<div className={styles.MainContainer}>
				<div className={styles.Card}>
					<div className={styles.Top}>
						<div className={styles.MainTitle}>
							<h1>Free</h1>
						</div>
						<div className={styles.SecondaryTitle}>
							Perfect For Trying out INCOM
						</div>
					</div>
					<div className={styles.Bottom}>
						<p className={styles.Price}>$0</p>
						<div className={styles.ButtonBox}>
							<Button
								size='large'
								variant='contained'
								className={styles.Button}
							>
								START FOR FREE
							</Button>
						</div>
						<div className={styles.PacketInformation}>
							<ul>
								<li>Access to 10 video templates</li>
								<li>Basic customization options</li>
								<li>Export in HD quality</li>
								<li>Up to 5 video exports per month</li>
								<li>Email support</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.Card}>
					<div className={styles.Top}>
						<div className={styles.MainTitle}>
							<h1>Standard</h1>
						</div>
						<div className={styles.SecondaryTitle}>
							Ideal for Growing Businesses and Frequent Users
						</div>
					</div>
					<div className={styles.Bottom}>
						<p className={styles.Price}>$20</p>
						<div className={styles.ButtonBox}>
							<Button
								size='large'
								variant='contained'
								className={styles.Button}
							>
								JOIN STANDARD
							</Button>
						</div>
						<div className={styles.PacketInformation}>
							<ul>
								<li>Access To 50 Video Templates</li>
								<li>Advanced Customization Options</li>
								<li>Export In Full HD Quality</li>
								<li>Up To 20 Video Exports Per Month</li>
								<li>Priority Email Support</li>
								<li>Access To Premium Music and Voiceover Library</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.Card}>
					<div className={styles.Top}>
						<div className={styles.MainText}>
							<h1>Enterprise</h1>
						</div>
						<div className={styles.SecondaryText}>
							Best for Large Teams and High-Volume Needs
						</div>
					</div>
					<div className={styles.Bottom}>
						<div className={styles.Pricing}>
							<p className={styles.Price}>$40</p>
						</div>
						<div className={styles.Button}>
							<Button size='large' variant='contained'>
								JOIN ENTERPRISE
							</Button>
						</div>
						<div className={styles.PacketInformation}>
							<ul>
								<li>Unlimited Access To All Video Templates</li>
								<li>Full Customization Options</li>
								<li>Export In 4K Quality </li>
								<li>Dedicated Account Manager</li>
								<li>24/7 Priority Support</li>
								<li>Custom Branding And Watermark Removal</li>
								<li>Team Collaboration Features</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Grid>
	)
}

export default PricingSection
