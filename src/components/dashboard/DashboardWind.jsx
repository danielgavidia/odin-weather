import React from 'react';

// create compass animation given degree data

const DashboardWind = ({ item }) => {
	return (
		<>
			<div>WIND</div>
			<div>{item.wind_mph}mph</div>
			<div>{item.wind_degree}°</div>
		</>
	);
};

export default DashboardWind;
