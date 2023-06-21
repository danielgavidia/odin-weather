import React from 'react';
import DashboardHourly from './DashboardHourly';
import DashboardForecast from './DashboardForecast';
import DashboardHeader from './DashboardHeader';
import DashboardAirQuality from './DashboardAirQuality';
import DashboardHumidity from './DashboardHumidity';
import DashboardPressure from './DashboardPressure';
import DashboardRainfall from './DashboardRainfall';
import DashboardSunriseSunset from './DashboardSunriseSunset';
import DashboardUVIndex from './DashboardUVIndex';
import DashboardVisibility from './DashboardVisibility';
import DashboardWind from './DashboardWind';

const Dashboard = ({ item }) => {
	return (
		<>
			<div className='flex flex-col justify-center bg-white h-[calc(100vh-50px)] w-[calc(100vw-300px)] overflow-y-scroll'>
				<div className='border-2 border-black'>
					<DashboardHeader item={item.dashboard_header} />
				</div>
				<div className='border-2 border-black'>
					<DashboardHourly item={item.dashboard_hourly} />
				</div>
				<div className='border-2 border-black flex'>
					<div className='border-2 border-black'>
						<DashboardForecast item={item.dashboard_forecast} />
					</div>
					<div className='border-2 border-black grid grid-cols-2'>
						<div className='border-2 border-black'>
							<DashboardAirQuality item={item.air_quality} />
						</div>
						<div className='border-2 border-black'>
							<DashboardUVIndex item={item.uv_index} />
						</div>
						<div className='border-2 border-black'>
							<DashboardSunriseSunset
								item={item.sunrise_sunset}
							/>
						</div>
						<div className='border-2 border-black'>
							<DashboardWind item={item.wind} />
						</div>
						<div className='border-2 border-black'>
							<DashboardRainfall item={item.rainfall} />
						</div>
						<div className='border-2 border-black'>
							<DashboardHumidity item={item.humidity} />
						</div>
						<div className='border-2 border-black'>
							<DashboardVisibility item={item.visibility} />
						</div>
						<div className='border-2 border-black'>
							<DashboardPressure item={item.pressure} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
