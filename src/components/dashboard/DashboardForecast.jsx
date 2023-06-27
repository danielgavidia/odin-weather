import React from 'react';
import { timeFormatForecast } from '../../API/timeFormats';
import { weatherCodes } from '../../API/weatherCodes';
import { weatherCodesMapIcon } from '../../API/weatherCodesMapIcon';

const DashboardForecast = ({ item }) => {
	const minTempArr = item.map((i) => i.mintemp_f);
	const maxTempArr = item.map((i) => i.maxtemp_f);
	const minVal = Math.min(...minTempArr);
	const maxVal = Math.max(...maxTempArr);

	return (
		<>
			<div>10-DAY FORECAST</div>
			<div className='flex flex-col w-[500px]'>
				{item.map((i, index) => (
					<div key={index}>
						<Day item={i} minVal={minVal} maxVal={maxVal} />
					</div>
				))}
			</div>
		</>
	);
};

const Day = ({ item, minVal, maxVal }) => {
	const t = timeFormatForecast(item.date_epoch);
	const cond = weatherCodesMapIcon([item.condition_code], 1, weatherCodes);

	// functions for determining bar length
	const width = 150;
	const range = maxVal - minVal;
	const div1length = Math.round(((item.mintemp_f - minVal) / range) * width);
	const div2length = Math.round(((item.maxtemp_f - item.mintemp_f) / range) * width);
	const div3length = Math.round(((maxVal - item.maxtemp_f) / range) * width);

	return (
		<>
			<div className='flex w-full justify-around'>
				<div>{t}</div>
				<div className='flex flex-col'>
					<div>
						<img src={cond} alt='' className='h-[30px]' />
					</div>
					<div>{item.daily_chance_of_rain}%</div>
				</div>
				<div>{Math.round(item.mintemp_f)}°</div>
				<div className='flex'>
					<div
						style={{
							width: `${div1length}px`,
							height: '20px',
							backgroundColor: 'gray',
						}}></div>
					<div
						style={{
							width: `${div2length}px`,
							height: '20px',
							backgroundColor: 'blue',
						}}></div>
					<div
						style={{
							width: `${div3length}px`,
							height: '20px',
							backgroundColor: 'gray',
						}}></div>
				</div>
				<div>{Math.round(item.maxtemp_f)}°</div>
			</div>
		</>
	);
};

export default DashboardForecast;
