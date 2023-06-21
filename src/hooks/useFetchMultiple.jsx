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
			localtime_epoch: item.location.localtime_epoch,
			conditions: item.current.condition.code,
			temp_current: item.current.temp_f,
			temp_high: item.forecast.forecastday[0].day.maxtemp_f,
			temp_low: item.forecast.forecastday[0].day.mintemp_f,
		};
	}
};

export default useFetchMultiple;
