import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

import MyResponsiveLine from '../components/LineGraph'
import data from "data/mockup_line"


const helpText = `
	Veja em uma só imagem de forma intuitiva e precisa como anda a perfomance do seu estabelecimento!
`

function PerformancePage({ location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<Layout location={location} title={pageTitle} helpText={helpText}>
			<Content Graph={() => <MyResponsiveLine data={data} />}/>
		</Layout>
	)
}
PerformancePage.propTypes = {
	location: PropTypes.object,
}
export default PerformancePage
