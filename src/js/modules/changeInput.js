function changeInput() {
	let input = document.querySelector('.footer__content-input');
	input.addEventListener('input', function () {
		let sendBtn = document.querySelector('.footer__content-btn');
		if (this.value.length > 0) {
			sendBtn.classList.add('active');
		} else {
			sendBtn.classList.remove('active');
		}
	});
}

export default changeInput;