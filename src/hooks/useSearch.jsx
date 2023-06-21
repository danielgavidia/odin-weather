import { useState, useEffect } from 'react';

const useSearch = (searchTerm, APIKey) => {
	const request = 'http://api.weatherapi.com/v1/search.json?key=' + APIKey + '&q=' + searchTerm;
	const [results, setResults] = useState([]);

	useEffect(() => {
		if (searchTerm != '') {
			fetch(request)
				.then((response) => response.json())
				.then((data) => {
					setResults(data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		}
	}, [request]);
	return [results];
};

export default useSearch;
