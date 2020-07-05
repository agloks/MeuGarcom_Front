import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import CustomContent from 'components/Content/custom_content'

function SairPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle}>
			<CustomContent image={true}>
				Tchau, até a próxima Laço De Ouro!
			</CustomContent>
		</Layout>
	)
}
SairPage.propTypes = {
	location: PropTypes.object,
}
export default SairPage
