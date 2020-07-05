import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import classNames from 'classnames'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

import MyResponsiveLine from '../components/LineGraph'
import data from "data/mockup_line"

const styles = theme => ({
	cardGraph: {
		margin: "10% 2.5%",
		width: "auto",
	},
	limitSize: {
		minHeight: "500px",
		maxHeight: "1000px",
		height: "37.5em",
	},
	titleCard: {
		position: "absolute",
		top:"-35px",
		width: "75%",
		display: "flex",
		alignItems: "center",
		fontWeight: "bold"
	}
})

const helpText = `
	Veja em uma só imagem de forma intuitiva e precisa como anda a perfomance do seu estabelecimento!
`

function PerformancePage({ location, classes }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0} direction="row" position="relative">
					<GridItem xs={12} >
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Vendas por estabelecimento em regiões
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsiveLine data={data} />
						</Card>
					</GridItem>
				</GridContainer>
			</Layout>
		</>
	)
}
PerformancePage.propTypes = {
	location: PropTypes.object,
}
export default withStyles(styles)(PerformancePage)
