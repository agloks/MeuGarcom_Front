import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import Content from 'components/Content'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

import MyResponsivePie from '../components/PieGraph'
import data from "data/mockup_pie"

const styles = theme => ({
	cardGraph: {
		minHeight: "500px",
		maxHeight: "1000px",
		margin: "10% 2.5%",
		width: "95%",
		height: "65%"
	}
})

const helpText = `
	Complicações com burocracias? NUNCA MAIS, lidamos com todo trabalho chato para você!
`

function TributosPage({ classes, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	console.log(classes)
	return (
		<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0}>
					<GridItem xs={12} sm={6} md={6}>
						<Card className={classes.cardGraph}>
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
