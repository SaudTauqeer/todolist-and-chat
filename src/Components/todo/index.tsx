import React, { useEffect } from 'react';
import TodoItems from './TodoItems';
import Navbar from './Navbar';

const index = () => {
	return (
		<div
			style={{
				marginTop: '0'
			}}
		>
			<Navbar />
			<TodoItems />
		</div>
	);
};

export default index;
