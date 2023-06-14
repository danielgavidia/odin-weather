import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import { APIKey } from './APIKey';
import { testData } from './testData';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';

// process
// 1. CHECK Get user input of city name through input box
// 2. CHECK Use that input to search for potential cities using the Search/Autocomplete module in the Weather API
// 3. CHECK Show those potential cities in a dropdown list
// 4. CHECK After user selects city name from list, use that name to fetch weather data for that city
// 5. CHECK Display data

// process part 2
// 1. Create layout for application
// 2. Create navbar that will include searchbar and application logo
// 3. Create sidebar, which will include all saved locations
// 4. Create dashboard, which will display weather data

function App() {
     const city = 'Sayreville';
     const days = '10';
     const request = `http://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=${city}&days=${days}&aqi=yes&alerts=yes`;

     const [data] = useFetch(request);
     console.log(data);

     return (
          <>
               <div className='flex flex-col'>
                    <Navbar />
               </div>
               <div className='flex w-full h-[calc(100vh-50px)]'>
                    <Sidebar />
                    {data != null && <Dashboard item={data} />}
               </div>
          </>
     );
}

export default App;
