import React from 'react';

const DashboardHourly = ({ item }) => {
	return (
		<>
			<div>HOURLY FORECAST</div>
			<div className='flex'>
				{item.map((i, index) => (
					<div key={index}>
						<Hour item={i} />
					</div>
				))}
			</div>
		</>
	);
};

const Hour = ({ item }) => {
	return (
		<>
			<div className='flex flex-col'>
				<div>{item.time_epoch}</div>
				<div>{item.temp_f}</div>
				<div>{item.condition_code}</div>
				<div>{item.chance_of_rain}</div>
				<div>{item.is_day}</div>
			</div>
		</>
	);
};

export default DashboardHourly;
