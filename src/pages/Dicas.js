import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

const helpText = `
	Nessa página eu te ofereço conselhos em base com meus conhecimenots, informações legais sobre o mercado, 
	entre outras recomendações.
`

function DicasPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle} helpText={helpText}>
			<Content />
		</Layout>
	)
}
DicasPage.propTypes = {
	location: PropTypes.object,
}
export default DicasPage
