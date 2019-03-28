import React from 'react';
import { Hidden, Typography } from '@material-ui/core';

const TodoItems = () => {
	return (
		<React.Fragment>
			{/* Desktop View */}
			<Hidden xsDown>
				<Typography>helllo</Typography>
			</Hidden>
			{/* Mobile view */}
			<Hidden smUp>
				<Typography>Heelo</Typography>
			</Hidden>
		</React.Fragment>
	);
};

export default TodoItems;
