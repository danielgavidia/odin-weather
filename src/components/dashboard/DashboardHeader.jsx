import React from 'react';
import { weatherCodes } from '../../API/weatherCodes';
import { weatherCodesMap } from '../../API/weatherCodesMap';

const DashboardHeader = ({ item }) => {
	const cond = weatherCodesMap([item.condition_code], item.is_day, weatherCodes);
	return (
		<>
			<div className='h-[200px] w-full flex flex-col justify-center text-center'>
				<div className='text-3xl'>{item.location_name}</div>
				<div className='flex justify-center text-6xl'>
					<div className='invisible'>°</div>
					<div className=''>{Math.round(item.temp_f)}</div>
					<div>°</div>
				</div>
				<div className='text-lg'>{cond}</div>
				<div className='flex text-lg w-full justify-center'>
					<div className='w-[60px]'>H:{Math.round(item.temp_high)}°</div>
					<div className='w-[60px]'>L:{Math.round(item.temp_low)}°</div>
				</div>
			</div>
		</>
	);
};

export default DashboardHeader;
