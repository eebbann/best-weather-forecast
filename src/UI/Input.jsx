import React from 'react'

function Input({type, placeholder}) {
	return (
		<div>
    <input type={type} className="text-xl font-light shadow-xl focus:outline-none capitalize placeholder:lowercase p-1 bg-white text-gray-800 w-64" placeholder={placeholder} />
		
		</div>
	)
}

export default Input