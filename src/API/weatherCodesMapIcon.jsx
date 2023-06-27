export const weatherCodesMapIcon = (condition, is_day, code_array) => {
	const data = code_array.filter((i) => condition.includes(i.code));
	const iconCode = data[0].icon;
	if (is_day === 1) {
		return `/weatherIcons/day/${iconCode}.png`;
	} else if (is_day === 0) {
		return `/weatherIcons/night/${iconCode}.png`;
	}
};
