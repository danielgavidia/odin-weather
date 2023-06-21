import React from 'react';
import SidebarButton from './SidebarButton';

const Sidebar = ({ item, handleSetCity }) => {
	return (
		<div className='bg-gray-100 flex flex-col h-[calc(100vh-50px)] min-w-[300px] w-[350px] p-[20px] overflow-y-scroll overflow-x-hidden resize-x'>
			<div className='flex text-gray-500 font-bold p-[10px] justify-between hover:bg-gray-200 rounded-[10px] w-[300px]'>
				<div>Saved Locations</div>
			</div>
			<div className='w-[95%]'>
				{item.map((i, index) => (
					<SidebarButton key={index} item={i} handleSetCity={handleSetCity} />
				))}
			</div>
		</div>
	);
};

export default Sidebar;
