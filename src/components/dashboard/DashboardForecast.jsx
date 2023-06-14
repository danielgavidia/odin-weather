import React from 'react';

const DashboardForecast = ({ item }) => {
	return (
		<>
			<div>10-DAY FORECAST</div>
			<div className='flex flex-col'>
				{item.map((i, index) => (
					<div key={index}>
						<Day item={i} />
					</div>
				))}
			</div>
		</>
	);
};

const Day = ({ item }) => {
	return (
		<>
			<div className='flex'>
				<div>{item.date_epoch}</div>
				<div className='flex flex-col'>
					<div>{item.condition_code}</div>
					<div>{item.daily_chance_of_rain}%</div>
				</div>
				<div>{item.mintemp_f}°</div>
				<div>{item.maxtemp_f}°</div>
			</div>
		</>
	);
};

export default DashboardForecast;
