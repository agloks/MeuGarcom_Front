import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

function AnalisesPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<Content />
		</Layout>
	)
}
AnalisesPage.propTypes = {
	location: PropTypes.object,
}
export default AnalisesPage
