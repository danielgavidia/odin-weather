import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm, searchResults, handleSetUrls }) => {
	return (
		<>
			<div className='bg-blue-500 text-blue flex w-full h-[50px] justify-between p-[10px] pl-[30px] pr-[30px]'>
				<div className='flex justify-center align-middle text-white w-[100px] hover:text-gray-300 transition delay-50'>
					<button className='font-pacifico text-2xl'>Weatherly</button>
				</div>
				<div>
					<div>
						<input
							type='text'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div>
						{searchResults != null ? (
							<div className='fixed bg-white'>
								{searchResults.map((i, index) => (
									<div key={index}>
										<button
											onClick={() =>
												handleSetUrls(
													i.name.concat(
														' ',
														i.region
													)
												)
											}>
											{i.name},{' '}
											{i.region}
										</button>
									</div>
								))}
							</div>
						) : (
							<div></div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
