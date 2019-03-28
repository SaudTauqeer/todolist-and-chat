import React, { useEffect } from 'react';
import TodoItems from './TodoItems';
import Navbar from './Navbar';

const index = () => {
	return (
		<div
			style={{
				marginTop: '4.2em'
			}}
		>
			<Navbar />
			<TodoItems />
		</div>
	);
};

export default index;
