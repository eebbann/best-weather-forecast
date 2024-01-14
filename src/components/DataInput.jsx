import React from 'react';
import Input from '../UI/Input';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function DataInput() {
	return (
		<div className='flex flex-row justify-center gap-4 my-6 mx-14'>
			<div className='flex gap-0 flex-row w-3/4 items-center justify-between space-x-1 '>
				<Input type="text" placeholder=" Search for city.." />
				<div className='flex gap-7 pr-6'>
					<UilSearch size={25}
						className="text-white cursor-pointer transition ease-out hover:scale-125" />
					<UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125" />
				</div>

			</div>
			<div className='flex items-center gap-2 '>
				<button className='text-slate-300 hover:text-white'>°C </button>
				<p> |</p>
				<button className='text-slate-300 hover:text-white'> °F</button>

			</div>
		</div>
	);
}

export default DataInput;