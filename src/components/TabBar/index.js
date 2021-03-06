import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
	secondaryBar: {
		zIndex: 0,
		background: "linear-gradient(225.34deg, #DD7C13 0%, #DD1313 101.17%)"
	},
})

function TabBar({ classes, tabNames = [] }) {
	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

	return (
		<AppBar component="div" className={classes.secondaryBar} position="static" elevation={0}>
			<Tabs value={value} textColor="inherit" onChange={handleChange}>
				{tabNames.map(tabName => (	
					<Tab textColor="inherit" label={`${tabName}`} />
				))}
			</Tabs>
		</AppBar>
	)
}

TabBar.propTypes = {
	classes: PropTypes.object.isRequired,
	tabNames: PropTypes.array.isRequired,
}

export default withStyles(styles)(TabBar)
