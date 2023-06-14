import React from 'react';

const DashboardUVIndex = ({ item }) => {
	return (
		<>
			<div>UV INDEX</div>
			<div>{item.uv}</div>
			<div>High</div>
			<div>Bar</div>
		</>
	);
};

export default DashboardUVIndex;
