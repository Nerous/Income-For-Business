import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Grid,
	TextField,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import FeaturesSection from './features-section/features-section'
import styles from './page.module.scss'
import TopSection from './top-section/top-section'
import GuideSections from './guide-sections/guide-sections'
import PricingSection from './pricing-section/pricing-section'

const Home = () => {
	return (
		<div className={styles.MainContainer}>
			{/* <h1>this is home page</h1> */}
			{/* <img src='/images/incom_for_business-logo.png'></img> */}
			<TopSection />

			<FeaturesSection />

			<GuideSections />

			<PricingSection />
		</div>
	)
}

export default Home
