import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import OrdensContent from 'components/OrdensContent'

import DataTable from 'components/Table'

const helpText = `
	Aqui é onde você gerencia os pedidos de seus clientes, emite os pagamentos, e tem todo controle sobre como anda a situação
	do seu estabelecimentos sem dificuldades e complicações.
`

function OrdensPage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle} helpText={helpText}>
			<OrdensContent Table={() => <DataTable />}/>
		</Layout>
	)
}
OrdensPage.propTypes = {
	location: PropTypes.object,
}
export default OrdensPage
