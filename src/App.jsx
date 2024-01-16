import { useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import './main.css';
import DataInput from './components/DataInput';
import TimeAndLocation from './components/TimeAndLocation'
import Temperature from './components/Temperature';
import Forecast from './components/Forecast';
function App() {
	const [count, setCount] = useState(0);

	return (
		<>

			<div className="mx-auto  max-w-screen-md mt-4 py-5 px-3 bg-gradient-to-bl from-cyan-500 to-blue-900 h-fit shadow-md shadow-gray-400">
				<TopButtons />
				<DataInput/>
				<TimeAndLocation/>
				<Temperature/>
				<Forecast/>
			</div>
			
		</>
	);
}

export default App;
