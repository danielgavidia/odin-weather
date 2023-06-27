import React from 'react';
import { weatherCodes } from '../../API/weatherCodes';
import { weatherCodesMap } from '../../API/weatherCodesMap';
import { timeFormatSidebar } from '../../API/timeFormats';

const SidebarButton = ({ item, handleSetCity }) => {
	const cond = weatherCodesMap([item.conditions], item.is_day, weatherCodes);
	const t = timeFormatSidebar(item.localtime);

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

export default SidebarButton;
