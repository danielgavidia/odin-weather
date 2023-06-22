export const weatherCodesMap = (condition, is_day, code_array) => {
	const data = code_array.filter((i) => condition.includes(i.code));
	if (is_day === 1) {
		return data[0].day;
	} else if (is_day === 0) {
		return data[0].night;
	}
};
