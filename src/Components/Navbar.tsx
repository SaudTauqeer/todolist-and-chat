//Imports
import React from 'react';
import { Grid, Typography, Toolbar, Button, AppBar } from '@material-ui/core';

const Navbar = () => (
	<React.Fragment>
		<AppBar color="inherit">
			<Toolbar>
				<Grid container justify="flex-end">
					<Grid item>
						<Button variant="contained" color="secondary" size="large">
							<Typography variant="button" color="inherit">
								Login
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	</React.Fragment>
);

export default Navbar;
