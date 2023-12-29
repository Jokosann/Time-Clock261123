const $ = (selector) => {
	return document.querySelector(selector);
};

const hours = $('.hours');
const minutes = $('.minutes');
const seconds = $('.seconds');

const mounth = $('.mounth');
const day = $('.day');
const year = $('.year');
const am0rpm = $('.waktu');
function setDate() {
	const now = new Date();
	const mm = now.getMonth();
	const dd = now.getDate();
	const yy = now.getFullYear();
	const secs = now.getSeconds();
	const mins = now.getMinutes();
	const hrs = now.getHours();
	const mounthName = [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	];

	hours.innerHTML = String(hrs % 12 || 12).padStart(2, '0');
	seconds.innerHTML = String(secs).padStart(2, '0');
	minutes.innerHTML = String(mins).padStart(2, '0');

	am0rpm.innerHTML = hrs >= 12 ? 'PM' : 'AM';

	mounth.innerHTML = mounthName[mm];
	day.innerHTML = dd;
	year.innerHTML = yy;
}

setInterval(setDate, 1000);
