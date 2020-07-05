import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/Layout'
import CustomContent from 'components/Content/custom_content'
import classNames from 'classnames'

import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Cards/Card.js"

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	hiddenOverflow: {
		oveflowY: "hidden"
	}
})

const helpText = `
	Nessa página eu te ofereço conselhos em base com meus conhecimenots, informações legais sobre o mercado, 
	entre outras recomendações.
`
function section_one() {
	return(
		<GridContainer justify="center" spacing={0} direction="column" position="relative">
		<GridItem xs={12} lg={3}>
			<Card >
				Produtos mais vendidos por horário
			</Card>
		</GridItem>
		<GridItem xs={12} lg={3}>
			<Card >
				Produtos menos vendidos por horário
			</Card>
		</GridItem>
		<GridItem xs={12} lg={3}>
			<Card >
				Produtos mais vendidos por horário
			</Card>
		</GridItem>
		<GridItem xs={12} lg={3}>
			<Card >
				Produtos menos vendidos por horário
			</Card>
		</GridItem>
	</GridContainer> 
	)
}

const lightRed = "rgba(220, 10, 0, 0.6)"
const lightGreen = "rgba(10, 220, 0, 0.6)"

function DicasPage({ location, classes }) {
	const pageTitle = location ? location.pathname.replace(/\//g, '') : ''
	return (
		<>
		<Layout location={location} title={pageTitle} helpText={helpText} >
			{/* {section_one()} */}
			<GridContainer justify="center" spacing={0} direction="row" position="relative">
				<GridItem xs={12} sm={9}>
					<CustomContent image={true}>
						Boas novas, fontes apontam que fornecedores nacionais estão para reduzir o custo do arroz em breve... 					
					</CustomContent>
				</ GridItem>
				<GridItem xs={12} sm={3}>
					<CustomContent color={lightRed}>
						Eu vejo que esta sendo gastado de forma anormal alho no seu estoque...
					</CustomContent>
				</ GridItem>
			</GridContainer>
			<GridContainer justify="center" spacing={1} direction="row" position="relative">
				<GridItem xs={12} sm={2}>
					<CustomContent >
						Seu fluxo de vendas mantem um ritmo constante, sabia?
					</CustomContent>
				</ GridItem>
				<GridItem xs={12} sm={2}>
					<CustomContent color={lightGreen}>
					Show! Você conseguiu nas ultimas semanas manter o mesmo de numero de venda do Combo 3 reduzindo custo de recursos.
					</CustomContent>
				</ GridItem>
				<GridItem xs={12} sm={8}>
					<CustomContent image={true}>
					Sabia que acontecem excelentes eventos alimenticios no periodo de Junho e Julho? esses eventos são ótimos locais para conseguir 
					contato com distribuidoras fazendo liquidação de seus estoques.
					</CustomContent>
				</ GridItem>
			</GridContainer> 
			
		</Layout>
	</>		
	)
}
DicasPage.propTypes = {
	location: PropTypes.object,
}
export default withStyles(styles)(DicasPage)
