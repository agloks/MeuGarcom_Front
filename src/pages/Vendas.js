import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

import MyResponsiveBar from "components/BarGraph"
import data from "data/mockup_bar"

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
	Tenha dados sobre suas vendas, veja quais são os mais vendidos e menos vendidos em segundos, veja seus lucros exato em cada refeição.
`

function VendasPage({ classes, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	console.log(classes)
	return (
		<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0}>
					<GridItem xs={12} sm={6} md={6}>
						<Card className={classes.cardGraph}>
							<MyResponsiveBar data={data}/>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={6} md={6}>
						<Card className={classes.cardGraph}>
							<MyResponsiveBar data={data} schemaColor={"reds"}/>
						</Card>
					</GridItem>
				</GridContainer> 
			</Layout>
		</>
	)
}
VendasPage.propTypes = {
	location: PropTypes.object,
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(VendasPage)
