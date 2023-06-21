import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import useFetchMultiple from './hooks/useFetchMultiple';
import useSearch from './hooks/useSearch';
import { APIKey } from './APIKey';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

// process part 2
// 1. Create custom hook for adding new cities

function App() {
	// days
	const days = '10';

	// select current city
	const [city, setCity] = useState('New York New York');
	const handleSetCity = (item) => {
		setCity(item);
	};

	// set search function and custom hook
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults] = useSearch(searchTerm, APIKey);

	// using custom hook for single request
	const request = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=${days}&aqi=yes&alerts=yes`;
	const [data] = useFetch(request);

	// modify url API array
	const [urls, setUrls] = useState([]);
	const handleSetUrls = (item) => {
		const newUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${item}&days=${days}&aqi=yes&alerts=yes`;
		if (urls.includes(newUrl) == false) {
			setUrls([...urls, newUrl]);
		}
	};
	console.log(urls);

	// using custom hook for multiple requests
	const urlsArr = [
		`http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=Sayreville&days=${days}&aqi=yes&alerts=yes`,
		`http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=Toronto&days=${days}&aqi=yes&alerts=yes`,
	];
	const [responses] = useFetchMultiple(urls);
	console.log(responses);

	return (
		<>
			<div className='flex flex-col'>
				<Navbar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchResults={searchResults}
					handleSetUrls={handleSetUrls}
				/>
			</div>
			<div className='flex w-full h-[calc(100vh-50px)]'>
				{responses != null && (
					<Sidebar item={responses} handleSetCity={handleSetCity} />
				)}
				{data != null && <Dashboard item={data} />}
			</div>
		</>
	);
}

export default App;
