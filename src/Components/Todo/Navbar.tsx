//Imports
import React, { useEffect, useState } from 'react';
import { Grid, Typography, Toolbar, Button, AppBar } from '@material-ui/core';

const Navbar = () => {
	const [ LoginButtonText, SetLoginButtonTextValue ] = useState('');

	useEffect(() => {
		document.title = 'Todo';

		if (document.title === 'Todo') {
			SetLoginButtonTextValue('Logout');
		}
	});

	return (
		<Grid
			container
			justify="flex-end"
			direction="row"
			style={{ marginTop: '1em', position: 'absolute', paddingRight: '1em' }}
		>
			<Grid item>
				<Button variant="contained" color="secondary" size="large">
					<Typography variant="button" color="inherit">
						{LoginButtonText}
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Navbar;
