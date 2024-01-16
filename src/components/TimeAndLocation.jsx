import React from 'react';

function TimeAndLocation() {
	return (
		<>
			<div className='flex items-center justify-center my-6'>
				<p className='text-white text-xl font-extralight'>
					Tuesday, 14 January 2024 | Local time: 12:32pm
				</p>
			</div>
			<div className='flex items-center justify-center my-3'>
				<p className="text-white text-3xl font-medium">Berlin, DE</p>
			</div>
		</>

	);
}

export default TimeAndLocation;