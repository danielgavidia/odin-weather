export const timeFormatDashboard = (item) => {
	const hour = item.slice(10, 13);
	const timeX = () => {
		if (hour == 0) {
			return '12AM';
		} else if (hour == 12) {
			return '12PM';
		} else if (hour > 12 && hour != 12 && hour != 0) {
			const hourX = (Number(hour) - 12).toString();
			return hourX.concat('PM');
		} else if (hour < 12 && hour != 0) {
			const hourX = Number(hour).toString();
			return hourX.concat('AM');
		}
	};
	return timeX();
};

export const timeFormatSidebar = (item) => {
	const hour = () => {
		if (item.length === 16) {
			return item.slice(10, 13);
		} else if (item.length === 15) {
			return item.slice(10, 12);
		}
	};

	const minutes = () => {
		if (item.length === 16) {
			return item.slice(14, 17);
		} else if (item.length === 15) {
			return item.slice(13, 16);
		}
	};

	const timeX = () => {
		if (hour() == 0) {
			return `12:${minutes()} AM`;
		} else if (hour() == 12) {
			return `12:${minutes()} PM`;
		} else if (hour() > 12 && hour() != 12 && hour() != 0) {
			const hourX = (Number(hour()) - 12).toString();
			return `${hourX}:${minutes()} PM`;
		} else if (hour() < 12 && hour() != 0) {
			const hourX = Number(hour()).toString();
			return `${hourX}:${minutes()} AM`;
		}
	};
	return timeX();
};

export const timeFormatForecast = (item) => {
	const myDate = new Date(item * 1000);
	const myDateString = myDate.toDateString();
	return myDateString.slice(0, 3);
};
