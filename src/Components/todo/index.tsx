import React, { useEffect } from 'react';
import TodoItems from './TodoItems';

const index = () => {
	useEffect(() => {
		document.title = 'Todo';
	});

	return (
		<div
			style={{
				marginTop: '4.2em'
			}}
		>
			<TodoItems />
		</div>
	);
};

export default index;
