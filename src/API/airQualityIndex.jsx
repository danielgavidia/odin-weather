export const airQualityIndex = (c) => {
	const tier = pm2_5_table.find((x) => x.c_low <= c && x.c_high >= c);
	const index = ((tier.i_high - tier.i_low) / (tier.c_high - tier.c_low)) * (c - tier.c_low) + tier.i_low;
	return { index: index, category: tier.category };
};

export const pm2_5_table = [
	{
		c_low: 0.0,
		c_high: 12.0,
		i_low: 0,
		i_high: 50,
		category: 'Good',
		color: 'green',
	},
	{
		c_low: 12.1,
		c_high: 35.4,
		i_low: 51,
		i_high: 100,
		category: 'Moderate',
		color: 'yellow',
	},
	{
		c_low: 35.5,
		c_high: 55.4,
		i_low: 101,
		i_high: 150,
		category: 'Unhealthy for sensitive groups',
		color: 'orange',
	},
	{
		c_low: 55.5,
		c_high: 150.4,
		i_low: 151,
		i_high: 200,
		category: 'Unhealthy',
		color: 'pink',
	},
	{
		c_low: 150.5,
		c_high: 250.4,
		i_low: 201,
		i_high: 300,
		category: 'Very unhealthy',
		color: 'violet',
	},
	{
		c_low: 250.5,
		c_high: 350.4,
		i_low: 301,
		i_high: 400,
		category: 'Hazardous',
		color: 'red',
	},
	{
		c_low: 350.5,
		c_high: 500.4,
		i_low: 401,
		i_high: 500,
		category: 'Hazardous',
		color: 'red',
	},
];
