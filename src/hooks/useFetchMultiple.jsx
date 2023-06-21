import { useEffect, useState } from 'react';

const useFetchMultiple = (urls) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		Promise.all(
			urls.map((i) =>
				fetch(i)
					.then((i) => i.json())
					.then((i) => filterJSON(i))
			)
		).then((x) => setData(x));
	}, [urls]);
	return [data];
};

const filterJSON = (item) => {
	if (item != null) {
		return {
			city: item.location.name,
			region: item.location.region,
			localtime: item.location.localtime,
			conditions: item.current.condition.code,
			temp_current: item.current.temp_f,
			temp_high: item.forecast.forecastday[0].day.maxtemp_f,
			temp_low: item.forecast.forecastday[0].day.mintemp_f,
			is_day: item.current.is_day,
		};
	}
};

export default useFetchMultiple;
