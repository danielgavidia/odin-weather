import React from 'react';

const Navbar = () => {
	return (
		<>
			<div className='bg-blue-500 text-blue flex w-full h-[50px] justify-center p-[10px] pl-[30px] pr-[30px]'>
				<div className='flex justify-center align-middle text-white w-[100px] hover:text-gray-300 transition delay-50'>
					<button className='font-pacifico text-2xl'>Weatherly</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
