import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);
	return [getOutput(data)];
};

const getOutput = (item) => {
	if (item != null) {
		const hourly_forecast = getDBHourly(item.forecast.forecastday);
		const db_forecast = getDBForecast(item.forecast.forecastday);
		return {
			dashboard_header: {
				location_name: item.location.name,
				last_updated_epoch: item.current.last_updated_epoch,
				temp_f: item.current.temp_f,
				is_day: item.current.is_day,
				condition_code: item.current.condition.code,
			},
			dashboard_hourly: hourly_forecast,
			dashboard_forecast: db_forecast,
			air_quality: {
				co: item.forecast.forecastday[0].day.air_quality.co,
				no2: item.forecast.forecastday[0].day.air_quality.no2,
				o3: item.forecast.forecastday[0].day.air_quality.o3,
				pm2_5: item.forecast.forecastday[0].day.air_quality.pm2_5,
				pm10: item.forecast.forecastday[0].day.air_quality.pm10,
				us_epa_index: item.forecast.forecastday[0].day.air_quality.us_epa_index,
				gb_defra_index: item.forecast.forecastday[0].day.air_quality.gb_defra_index,
			},
			uv_index: {
				uv: item.forecast.forecastday[0].day.uv,
			},
			sunrise_sunset: {
				sunrise: item.forecast.forecastday[0].astro.sunrise,
				sunset: item.forecast.forecastday[0].astro.sunset,
			},
			wind: {
				wind_mph: item.current.wind_mph,
				wind_degree: item.current.wind_degree,
				wind_dir: item.current.wind_dir,
			},
			rainfall: {
				precip_in: item.current.precip_in,
			},
			humidity: {
				humidity: item.current.humidity,
			},
			visibility: {
				vis_miles: item.current.vis_miles,
			},
			pressure: {
				pressure_in: item.current.precip_in,
			},
		};
	}
};

const getDBHourly = (item) => {
	const arr = getHourlyDataForMultipleDays(item);
	const filteredArr = arr.filter((x) => x.time_epoch > Date.now() * 0.001);
	return filteredArr.slice(0, 24);
};

const getHourlyDataForOneDay = (item) => {
	const arr = item.map((i) => ({
		time_epoch: i.time_epoch,
		temp_f: i.temp_f,
		condition_code: i.condition.code,
		is_day: i.is_day,
		chance_of_rain: i.chance_of_rain,
		chance_of_snow: i.chance_of_snow,
	}));
	return arr;
};

const getHourlyDataForMultipleDays = (item) => {
	const arr = item.map((i) => getHourlyDataForOneDay(i.hour));
	return arr.flat();
};

const getDBForecast = (item) => {
	const arr = item.map((i) => ({
		date_epoch: i.date_epoch,
		condition_code: i.day.condition.code,
		mintemp_f: i.day.mintemp_f,
		maxtemp_f: i.day.maxtemp_f,
		daily_chance_of_rain: i.day.daily_chance_of_rain,
		daily_chance_of_snow: i.day.daily_chance_of_snow,
	}));
	return arr;
};

export default useFetch;
