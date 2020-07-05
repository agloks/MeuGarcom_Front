import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import OrdensContent from 'components/OrdensContent'

import DataTable from 'components/Table'

function OrdensPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<OrdensContent Table={() => <DataTable />}/>
		</Layout>
	)
}
OrdensPage.propTypes = {
	location: PropTypes.object,
}
export default OrdensPage
