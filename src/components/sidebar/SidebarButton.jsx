import React from 'react';

const SidebarButton = ({ item, handleSetCity }) => {
	return (
		<>
			<button onClick={() => handleSetCity(item.city.concat(' ', item.region))}>
				<div className='flex border-2 border-black justify-between'>
					<div className='flex flex-col'>
						<div>{item.city}</div>
						<div>{item.localtime_epoch}</div>
						<div>{item.conditions}</div>
					</div>
					<div className='flex flex-col'>
						<div>{item.temp_current}°</div>
						<div className='flex'>
							<div>H: {item.temp_high}°</div>
							<div>L: {item.temp_low}°</div>
						</div>
					</div>
				</div>
			</button>
		</>
	);
};

export default SidebarButton;
