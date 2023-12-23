const $ = (selector) => {
	return document.querySelector(selector);
};

const hours = $(".hours");
const minutes = $(".minutes");
const seconds = $(".seconds");

const mounth = $(".mounth");
const day = $(".day");
const year = $(".year");

function setDate() {
	const now = new Date();
	const mm = now.getMonth();
	const dd = now.getDate();
	const yy = now.getFullYear();
	const secs = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();
	const mounthName = [
		"january",
		"february",
		"march",
		"april",
		"may",
		"june",
		"july",
		"august",
		"september",
		"october",
		"november",
		"december",
	];
	// hourse
	hrs > 12
		? (hours.innerHTML = String(hrs - 12).padStart(2, "0"))
		: (hours.innerHTML = String(hrs).padStart(2, "0"));
	// seconds
	seconds.innerHTML = String(secs).padStart(2, "0");
	// minutes
	minutes.innerHTML = String(mins).padStart(2, "0");
	// mounth
	mounth.innerHTML = mounthName[mm];
	// day
	day.innerHTML = dd;
	// year
	year.innerHTML = yy;
}

setInterval(setDate, 1000);
