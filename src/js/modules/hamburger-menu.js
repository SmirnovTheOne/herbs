function hamburgerMenu() {

	const openMenuBtn = document.querySelector('.hamburger-menu');
	const openMenuBtnClose = document.querySelector('.hamburger-menu__btn-close');

	const menuListItem = document.querySelector('.menu__item--list');
	const menuDropdawn = document.querySelector('.menu__box-dropdawn');

	const layout = document.querySelector('.layout-hamburger');
	const body = document.querySelector('body');

	openMenuBtn.onclick = function () {

		openMenuBtn.classList.add('hamburger-menu--active');
		layout.classList.add('layout-hamburger--visible');
		body.classList.add('scroll-disabled');
	};

	openMenuBtnClose.onclick = removeAciveClasses;
	layout.onclick = removeAciveClasses;

	menuListItem.onclick = function () {
		menuDropdawn.classList.toggle('menu__box-dropdawn--open');
		menuListItem.classList.toggle('menu__item--active');
	};

	function removeAciveClasses(event) {
		event.stopPropagation();
		layout.classList.remove('layout-hamburger--visible');
		openMenuBtn.classList.remove('hamburger-menu--active');
		body.classList.remove('scroll-disabled');
	};
}
export default hamburgerMenu;