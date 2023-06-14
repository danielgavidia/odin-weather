import React from 'react';

const DashboardHumidity = ({ item }) => {
	return (
		<>
			<div>HUMIDITY</div>
			<div>{item.humidity}%</div>
		</>
	);
};

export default DashboardHumidity;
