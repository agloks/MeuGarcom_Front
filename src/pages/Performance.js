import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

import MyResponsiveLine from '../components/LineGraph'
import data from "data/mockup_line"

function PerformancePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content Graph={() => <MyResponsiveLine data={data} />}/>
		</Layout>
	)
}
PerformancePage.propTypes = {
	location: PropTypes.object,
}
export default PerformancePage
