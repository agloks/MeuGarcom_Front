import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import classNames from 'classnames'


import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

import MyResponsiveBar from "components/BarGraph"
import data_mais_vendidos from "data/Vendas/mais_vendidos"
// import data_menos_vendidos from "data/Vendas/menos_vendidos"

const styles = theme => ({
	cardGraph: {
		margin: "10% 2.5%",
		width: "95%",
	},
	limitSize: {
		minHeight: "400px",
		maxHeight: "600px",
		height: "35.7em",
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
	Tenha dados sobre suas vendas, veja quais são os mais vendidos e menos vendidos em segundos, veja seus lucros exato em cada refeição.
`

function VendasPage({ classes, location }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	console.log(classes)
	return (
			<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0} direction="row" position="relative">
					<GridItem xs={12} >
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Produtos mais vendidos por horário
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsiveBar data={data_mais_vendidos}/>
						</Card>
					</GridItem>
					<GridItem xs={12} >
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Produtos menos vendidos por horário
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsiveBar data={data_mais_vendidos} schemaColor={"reds"}/>
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
