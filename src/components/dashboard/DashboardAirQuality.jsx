import React from 'react';
import { airQualityIndex } from '../../API/airQualityIndex';
import { pm2_5_table } from '../../API/airQualityIndex';

const DashboardAirQuality = ({ item }) => {
	const AQI = airQualityIndex(item.pm2_5);
	const bar_width = 200;
	const maxAQI = 500;
	return (
		<>
			<div>AIR QUALITY</div>
			<div>
				{Math.round(AQI.index)} - {AQI.category}
			</div>
			<div>{colorBarsTick(bar_width, AQI.index, maxAQI)}</div>
			<div className='flex'>
				{pm2_5_table.map((x) =>
					colorBars(bar_width, x.i_low, x.i_high, maxAQI, x.color)
				)}
			</div>
		</>
	);
};

const colorBars = (bar_width, i_low, i_high, max, color) => {
	const width = ((i_high - i_low) / max) * bar_width;
	return <div style={{ height: '20px', backgroundColor: color, width: `${width}px` }}></div>;
};

const colorBarsTick = (bar_width, AQI_index, max) => {
	const widthLeft = (AQI_index / max) * bar_width;
	const widthRight = ((max - AQI_index) / max) * bar_width;
	return (
		<>
			<div
				className='border-r-2 border-black'
				style={{ height: '10px', width: `${widthLeft}px` }}></div>
			<div style={{ height: '10px', width: `${widthRight}px` }}></div>
		</>
	);
};

export default DashboardAirQuality;
