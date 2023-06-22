import React from 'react';
import { weatherCodes } from '../../API/weatherCodes';
import { weatherCodesMap } from '../../API/weatherCodesMap';

const SidebarButton = ({ item, handleSetCity }) => {
	const cond = weatherCodesMap([item.conditions], item.is_day, weatherCodes);
	const t = time(item.localtime);

	return (
		<>
			<div className='w-full h-[120px] pt-[10px]'>
				<button
					className='w-full h-[100px] border-2 border-black rounded-[10px] p-[5px] bg-blue-700 hover:bg-blue-500 text-white'
					onClick={() => handleSetCity(item.city.concat(' ', item.region))}>
					<div className='h-full flex justify-between'>
						<div className='flex flex-col justify-between text-left'>
							<div>
								<div className='text-lg font-bold'>
									{item.city}
								</div>
								<div className='text-sm'>{t}</div>
							</div>
							<div className='text-sm'>{cond}</div>
						</div>
						<div className='flex flex-col justify-between text-center w-[80px]'>
							<div className='text-4xl'>
								{Math.round(item.temp_current)}°
							</div>
							<div className='flex justify-between text-sm'>
								<div>
									H:{' '}
									{Math.round(item.temp_high)}°
								</div>
								<div>
									L: {Math.round(item.temp_low)}
									°
								</div>
							</div>
						</div>
					</div>
				</button>
			</div>
		</>
	);
};

const time = (item) => {
	const timeSlice = item.slice(10);
	const timeX = () => {
		if (timeSlice.length > 5) {
			const hour = item.slice(10, 13);
			const minute = item.slice(14, 16);
			const hourX = (Number(hour) - 12).toString();
			return hourX.concat(':', minute, ' PM');
		} else {
			return timeSlice.concat(' AM');
		}
	};
	return timeX();
};

export default SidebarButton;
