//Imports
import React, { useEffect } from 'react';
import Body from './Body';

function Index() {
	useEffect(() => {
		document.title = 'Todo-Home';
	});
	return (
		<React.Fragment>
			<Body />
		</React.Fragment>
	);
}

export default Index;
