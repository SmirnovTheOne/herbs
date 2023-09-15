function hamburgerMenu() {

	const openMenuBtn = document.querySelector('.hamburger-menu');

	const menuListItem = document.querySelector('.menu__item--list');
	const menuDropdawn = document.querySelector('.menu__box-dropdawn');

	const layout = document.querySelector('.layout-hamburger');
	// const body = document.querySelector('body');

	openMenuBtn.onclick = function () {
		layout.classList.add('layout-hamburger--visible');
		// body.classList.ad('scroll-disabled');
	};

	layout.onclick = function () {
		layout.classList.remove('layout-hamburger--visible');
		// body.classList.remove('scroll-disabled');
	};

	menuListItem.onclick = function () {
		menuDropdawn.classList.toggle('menu__box-dropdawn--open');
		menuListItem.classList.toggle('menu__item--active');
	};
}

export default hamburgerMenu;