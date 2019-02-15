//Imports
import React from 'react';
import Grow from '@material-ui/core/Grow';

const GrowElement = (props: any) => (
	<React.Fragment>
		<Grow children={props.children} in={props.visible} timeout={{ enter: props.timeout }} />
	</React.Fragment>
);

export default GrowElement;
