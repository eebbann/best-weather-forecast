import React from 'react'

function TopButtons() {

	const cities =[{
		id:1,
		title:'London'
	},
	{
		id:2,
		title:'Nigeria'
	},
	{
		id:3,
		title:'Ghana'
	},
	{
		id:4,
		title:'Dubai'
	},
	{
		id:5,
		title:'Mexico'
	},
]
	return (
		<div className='flex items-center justify-center my-3 gap-5'>
		{cities.map(city=><button  key={city.id} className='py-1 px-5 text-xl gap-7  '>{city.title}</button>)
		}
		</div>
	)
}

export default TopButtons