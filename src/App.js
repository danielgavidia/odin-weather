import React, { useState, useEffect } from "react";
import { APIKey } from "./APIKey";

// process
// 1. CHECK Get user input of city name through input box
// 2. CHECK Use that input to search for potential cities using the Search/Autocomplete module in the Weather API
// 3. CHECK Show those potential cities in a dropdown list
// 4. After user selects city name from list, use that name to fetch weather data for that city
// 5. Display data

const cityButton = ({ item }) => {

     const r = "http://api.weatherapi.com/v1/current.json?key=" + APIKey + "q=" + item + "&aqi=no";

     return (
          <>
               <div></div>
          </>
     );
};

function App() {

     // GET REQUEST
     const [name, setName] = useState('');
     const r = "http://api.weatherapi.com/v1/search.json?key=" + APIKey + "&q=" + name;
     const [posts, setPosts] = useState([]);

     useEffect(() => {
          if (name.length > 0) {
               fetch(r)
                    .then((response) => response.json())
                    .then((data) => {
                         setPosts(data);
                    })
                    .catch((err) => {
                         console.log(err.message);
                    });
          }
     }, [r]);
     console.log(r);
     console.log(posts);

     return (
          <>
               <div>
                    <form>
                         <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </form>
               </div>
               <div>
                    <button></button></div>
               <div>
                    {posts.map((i) => (
                         <div><button>{i}</button></div>
                    ))}
               </div>
          </>
     );
}

export default App;
