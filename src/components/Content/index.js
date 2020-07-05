import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import ContentGraphic from './ContentGraphic'
const styles = theme => ({
	paper: {
		margin: 'auto',
		overflow: 'hidden',
		[theme.breakpoints.up('sm')]: {
			minWidth: 600,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 936,
		},
	},
	searchBar: {
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	block: {
		display: 'block',
	},
	addUser: {
		marginRight: theme.spacing.unit,
	},
	contentWrapper: {
		height: 368,
	},
	container: {
		padding: '48px 36px 48px',
	},
})

function Content({ classes, Graph }) {
	return (
		<div className={classes.container}>
			<Paper className={classes.paper}>
				<Grid
					container
					spacing={16}
					className={classes.contentWrapper}
					wrap
					alignItems="center"
					justify="center"
				>
					{Graph && <Graph />}
					<Grid lg={6} xs={12} item align="center">
						<ContentGraphic />
					</Grid>
					<Grid lg={8} xs={12} item>
						<Typography component="h2" variant="display1" color="textSecondary" align="center">
							Olá Laço De Ouro! como que vai seu dia?
							Espero que o negócio esteja prosperando e que eu possa te servir com informações valiosas e facilitar sua gestão.
							Qualquer dúvida sobre o uso de alguma coisa, passe o mouse no icone no topo á direita, pois lá muitas vezes possuo informações
							úteis que possa te ajudar a navegar na interface e tira melhor proveito dela. 
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}

Content.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Content)
