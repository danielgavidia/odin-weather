import React from 'react';

const DashboardHeader = ({ item }) => {
	return (
		<>
			<div>{item.location_name}</div>
			<div>{item.temp_f}</div>
			<div>{item.condition_code}</div>
		</>
	);
};

export default DashboardHeader;
