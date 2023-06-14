import React from 'react';

const SidebarButton = ({ item }) => {
	return (
		<>
			<div className='flex border-2 border-black justify-between'>
				<div className='flex flex-col'>
					<div>{item.city}</div>
					<div>{item.conditions}</div>
				</div>
				<div className='flex flex-col'>
					<div>{item.current_temperature}°</div>
					<div className='flex'>
						<div>H: {item.high}°</div>
						<div>L: {item.low}°</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SidebarButton;
