import React, { useState } from 'react';
import { APIKey } from './API/APIKey';
import useFetch from './hooks/useFetch';
import useFetchMultiple from './hooks/useFetchMultiple';
import useSearch from './hooks/useSearch';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

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
     const [urls, setUrls] = useState([
          `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=New York&days=${days}&aqi=yes&alerts=yes`,
     ]);
     const handleSetUrls = (item) => {
          const newUrl = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${item}&days=${days}&aqi=yes&alerts=yes`;
          if (urls.includes(newUrl) == false) {
               setUrls([...urls, newUrl]);
          }
     };

     // using custom hook for multiple requests
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
