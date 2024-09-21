import React, { Fragment } from 'react'
import FirstStepsSection from './first-steps-page-section/first-steps-page-section'
import AccountPageSection from './account-page-section/account-page-section'
import EdditingPageSection from './edditing-page-section/edditing-page-section'

const GuideSections = () => {
	return (
		<Fragment>
			<FirstStepsSection />
			<AccountPageSection />
			<EdditingPageSection />
		</Fragment>
	)
}

export default GuideSections
