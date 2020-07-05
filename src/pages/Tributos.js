import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import classNames from 'classnames'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

import MyResponsivePie from '../components/PieGraph'
import data from "data/mockup_pie"

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
	Complicações com burocracias? NUNCA MAIS, lidamos com todo trabalho chato para você!
`

function TributosPage({ classes, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0} direction="row" position="relative">
					<GridItem xs={12} >
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Total Em Gastos Tributários
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsivePie data={data} />
						</Card>
					</GridItem>
				</GridContainer>
			</Layout>
		</>
	)
}
TributosPage.propTypes = {
	location: PropTypes.object,
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(TributosPage)
