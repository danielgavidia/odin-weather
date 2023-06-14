import React from 'react';
import SidebarButton from './SidebarButton';

const data = [
	{ city: 'Cupertino', conditions: 'Cloudy', current_temperature: 76, high: 78, low: 57 },
	{ city: 'New York', conditions: 'Cloudy', current_temperature: 62, high: 80, low: 58 },
	{ city: 'Sayreville', conditions: 'Mostly Cloudy', current_temperature: 72, high: 81, low: 53 },
];

const Sidebar = () => {
	return (
		<div className='bg-gray-100 flex flex-col h-[calc(100vh-50px)] min-w-[300px] w-[350px] p-[20px] overflow-y-scroll overflow-x-hidden resize-x'>
			<div className='flex text-gray-500 font-bold p-[10px] justify-between hover:bg-gray-200 rounded-[10px] w-[300px]'>
				<div>Saved Locations</div>
			</div>
			<div className='w-[95%]'>
				{data.map((i, index) => (
					<SidebarButton key={index} item={i} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
