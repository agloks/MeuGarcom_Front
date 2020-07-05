import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import MyResponsiveRadar from "components/RadarGraph"
import data_caracteristica from "data/Clientes/perfil_caracteristica"
import data_alcoolismo from "data/Clientes/perfil_alcoolismo"

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
	Aqui é o local onde você pode conhecer mais sobre seus clientes e ter a oportunidade de tirar ótimos insights.
`

function ClientesPage({ location, classes }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
			<>
			<Layout location={location} title={pageTitle} helpText={helpText}>
				<GridContainer justify="center" spacing={0} direction="row" position="relative">
					<GridItem xs={12} sm={12} md={6}>
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Perfil Característica Dos Clientes Feedback
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsiveRadar data={data_caracteristica}/>
						</Card>
					</GridItem>
					<GridItem xs={12} sm={12} md={6}>
						<Card className={classNames(classes.cardGraph, classes.titleCard)}>
							Perfil Alcoolismo Dos Clientes Feedback
						</Card>
						<Card className={classNames(classes.cardGraph, classes.limitSize)}>
							<MyResponsiveRadar data={data_alcoolismo}/>
						</Card>
					</GridItem>
				</GridContainer> 
			</Layout>
		</>
	)
}
ClientesPage.propTypes = {
	data: PropTypes.object.isRequired,
	location: PropTypes.object,
}
export default withStyles(styles)(ClientesPage)
