import React from 'react';

// convert string to datetime
// switch between up and down position given if sunset or sunrise are closest

const DashboardSunriseSunset = ({ item }) => {
	return (
		<>
			<div>SUNSET</div>
			<div>{item.sunset}</div>
			<div>Sunrise: {item.sunrise}</div>
		</>
	);
};

export default DashboardSunriseSunset;
