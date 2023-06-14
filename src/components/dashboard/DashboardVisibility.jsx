import React from 'react';

const DashboardVisibility = ({ item }) => {
	return (
		<>
			<div>VISIBILITY</div>
			<div>{item.vis_miles} mi</div>
		</>
	);
};

export default DashboardVisibility;
