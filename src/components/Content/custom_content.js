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
			minWidth: 100,
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: 236,
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
		height: 248,
	},
	container: {
		padding: '48px 36px 48px',
	},
})

function CustomContent(props) {
	const color = props.color ? {"background": props.color} : {"background": "#fff"}
	return (
		<div className={props.classes.container}>
			<Paper className={props.classes.paper} elevation={3} style={color}>
					<Grid
						container
						spacing={1}
						className={props.classes.contentWrapper}
						wrap
						alignItems="center"
						justify="center"
					>
					{/* img here */}
					{
					props.image && <Grid lg={4} xs={12} item align="center">
						<ContentGraphic />
					</Grid>
					}

					<Grid lg={8} xs={12} item>
						<Typography component="h3" variant="display1" color="textSecondary" align="center">
							{
							props.children ? props.children : 
							`Olá Laço De Ouro! como que vai seu dia?
							Espero que o negócio esteja prosperando e que eu possa te servir.`
							}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}

CustomContent.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomContent)
