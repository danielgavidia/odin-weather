export const weatherCodesMapIcon = (condition, code_array) => {
	const data = code_array.filter((i) => condition.includes(i.code));
	const iconCode = data[0].icon;
	const imageSourceCode = `/weatherIcons/day/${iconCode}.png`;
	return imageSourceCode;
};
