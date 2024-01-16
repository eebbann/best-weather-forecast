import React from 'react';
import { UilTemperature, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons';
function Temperature() {
	return (
		<>
			<div className='flex items-center justify-center my-6'>
				<p className='text-blue-100 text-xl font-extralight'>
					Cloudy or watever
				</p>
			</div>
			<div className='flex items-center justify-around text-white  py-6'>
				<img src='' alt='*' />
				<p className="text-5xl">34°</p>
				<div className="flex flex-col space-y-2">
					<div className="flex font-light text-sm items-center justify-around">
						<UilTemperature size={18} className="mr-1" />
						Real fell:
						<span className="font-medium ml-1"> 32°</span>
					</div>
					<div className="flex font-light text-sm items-center justify-around">
						<UilTear size={18} className="mr-1" />
						Humidity:
						<span className="font-medium ml-1"> 65%</span>
					</div>
					<div className="flex font-light text-sm items-center justify-around">
						<UilWind size={18} className="mr-1" />
						Windy:
						<span className="font-medium ml-1"> 3 km/hr</span>
					</div>

				</div>
			</div>
			<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
				<UilSun />
				<p className="font-light">
					Rise: <span classNAme="font-medium ml-1"> 06:45 AM</span>
				</p>
				<p className="font-light">  |  
				</p>
				<UilSunset />
				<p className="font-light">
					Set: <span classNAme="font-medium ml-1"> 03:45 PM</span>
				</p>
				<p className="font-light">
					 | 
				</p>
				<UilSunset />
				<p className="font-light">
					High: <span classNAme="font-medium ml-1"> 21°</span>
				</p>
				<p className="font-light">  |  
				</p>
				<UilSunset />
			
				<p className="font-light">
					Low: <span classNAme="font-medium ml-1"> 12°</span>
				</p>
			</div>
		</>

	);
}

export default Temperature;