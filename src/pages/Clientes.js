import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

import MyResponsiveRadar from "components/RadarGraph"
import data from "data/mockup_radar"

function ClientesPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content Graph={() => <MyResponsiveRadar data={data}/>}/>
		</Layout>
	)
}
ClientesPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default ClientesPage
