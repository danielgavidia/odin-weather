import React from 'react';
import { APIKey } from './src/API/APIKey';
// import { WeatherCodes } from './API/WeatherCodes';

// console.log(weatherCodes);

const SidebarButton = ({ item, handleSetCity }) => {
	return (
		<>
			<button
				className='w-full h-[100px] border-2 border-black rounded-[10px] p-[5px] bg-blue-500 text-white'
				onClick={() => handleSetCity(item.city.concat(' ', item.region))}>
				<div className='h-full flex justify-between'>
					<div className='flex flex-col justify-between text-left'>
						<div>
							<div className='text-lg font-bold'>
								{item.city}
							</div>
							<div>{item.localtime.slice(10)}</div>
						</div>
						<div>{item.conditions}</div>
					</div>
					<div className='flex flex-col justify-between text-center w-[80px]'>
						<div className='text-4xl'>
							{Math.round(item.temp_current)}°
						</div>
						<div className='flex justify-between text-sm'>
							<div>H: {Math.round(item.temp_high)}°</div>
							<div>L: {Math.round(item.temp_low)}°</div>
						</div>
					</div>
				</div>
			</button>
		</>
	);
};

export default SidebarButton;
