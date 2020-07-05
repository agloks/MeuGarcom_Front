import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import React, { memo } from 'react'

import MySvg from "../../../public/images/logo_meugarcom_g_red.svg"

const styles = themes => ({
	logoDiv: {
		height: "25%",
		width: "100%",
		background: "#ece7e7"
	}
})

function Logo({classes}) {
	return (
			<div className = {classes.logoDiv}>
					<img src={MySvg} width="100%" height="100%"/>
			</div>
	)
}

export default memo(withStyles(styles)(Logo))
