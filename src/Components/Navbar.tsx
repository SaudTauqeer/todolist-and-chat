//Imports
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Toolbar, Button, AppBar } from '@material-ui/core';

const Navbar = () => {
	const [ LoginButtonText, SetLoginButtonTextValue ] = useState('');

	useEffect(() => {
		if (document.title === 'Todo-Home') {
			SetLoginButtonTextValue('Login');
		} else {
			SetLoginButtonTextValue('Logout');
		}
	});

	return (
		<React.Fragment>
			<AppBar color="inherit">
				<Toolbar>
					<Grid container justify="flex-end">
						<Grid item>
							<Button variant="contained" color="secondary" size="large">
								<Typography variant="button" color="inherit">
									{LoginButtonText}
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

export default Navbar;
