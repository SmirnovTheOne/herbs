function search() {
	// Mobile nav button
	const searchBtn = document.querySelector('.search');
	const searchMenu = document.querySelector('.search-menu');
	const searchClose = document.querySelector('.search-close-btn');
	const layout = document.querySelector('.layout-search');
	const body = document.querySelector('body');

	searchBtn.onclick = function () {
		searchMenu.classList.add('--opened');
		layout.classList.add('layout-search--visible');
		body.classList.add('scroll-disabled');
	};

	searchClose.onclick = function () {
		searchMenu.classList.remove('--opened');
		layout.classList.remove('layout-search--visible');
		body.classList.remove('scroll-disabled');
	};

	layout.onclick = function () {
		searchMenu.classList.remove('--opened');
		layout.classList.remove('layout-search--visible');
		body.classList.remove('scroll-disabled');
	};
}

export default search;