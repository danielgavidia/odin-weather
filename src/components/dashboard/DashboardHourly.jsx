import React from 'react';
import { weatherCodes } from '../../API/weatherCodes';
import { weatherCodesMapIcon } from '../../API/weatherCodesMapIcon';

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
	const t = time(item.time);
	const icon = weatherCodesMapIcon([item.condition_code], weatherCodes);
	return (
		<>
			<div className='flex flex-col border-2 border-black'>
				<div>{t}</div>
				<div>
					<img src={icon} alt='x' className='w-[40px]' />
				</div>
				<div>{Math.round(item.temp_f)}°</div>
			</div>
		</>
	);
};

const time = (item) => {
	const hour = item.slice(10, 13);
	const timeX = () => {
		if (hour == 0) {
			return '12AM';
		} else if (hour == 12) {
			return '12PM';
		} else if (hour > 12 && hour != 12 && hour != 0) {
			const hourX = (Number(hour) - 12).toString();
			return hourX.concat('PM');
		} else if (hour < 12 && hour != 0) {
			const hourX = Number(hour).toString();
			return hourX.concat('AM');
		}
	};
	return timeX();
};

export default DashboardHourly;
