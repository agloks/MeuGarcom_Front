import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

import MyResponsiveRadar from "components/RadarGraph"
import data from "data/mockup_radar"

const helpText = `
	Aqui é o local onde você pode conhecer mais sobre seus clientes e ter a oportunidade de tirar ótimos insights.
`

function ClientesPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle} helpText={helpText}>
			<Content Graph={() => <MyResponsiveRadar data={data}/>}/>
		</Layout>
	)
}
ClientesPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default ClientesPage
