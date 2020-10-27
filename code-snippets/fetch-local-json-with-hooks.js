import React, { useState, useEffect } from 'react';

const ComponentName = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		// important to have json file in public folder, and path will be relative to index.html
		fetch('./relative-path/from-html-file.json')
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	return (
		<ul>
			{/* loop over projects, and create ProjectCard component for each project */}
			{data.map((d) => (
				<li>{d.someProperty}</li>
			))}
		</ul>
	);
};

export default ComponentName;
