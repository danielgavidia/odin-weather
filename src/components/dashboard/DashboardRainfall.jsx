import React from 'react';

const DashboardRainfall = ({ item }) => {
	return (
		<>
			<div>RAINFALL</div>
			<div>{item.precip_in}" in the last 24 hours</div>
		</>
	);
};

export default DashboardRainfall;
