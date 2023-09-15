function scrollUp() {
	const btnUp = {
		addEventListener() {
			// при нажатии на кнопку .btn-up
			document.querySelector('.footer__link-up').onclick = () => {
				// переместим в начало страницы
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				});
			}
		}
	}
	btnUp.addEventListener();
}

export default scrollUp;