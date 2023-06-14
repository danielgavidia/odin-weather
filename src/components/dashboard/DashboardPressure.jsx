import React from 'react';

// create pressure animation

const DashboardPressure = ({ item }) => {
	return (
		<>
			<div>PRESSURE</div>
			<div>{item.pressure_in} inHg</div>
		</>
	);
};

export default DashboardPressure;
