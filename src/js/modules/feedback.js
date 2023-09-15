function feedback() {
	// Mobile nav button
	const feedbackBtn = document.querySelector('.feedback-btn');
	const feedbackForm = document.querySelector('.feedback-form');
	const feedbackBtnClose = document.querySelector('.feedback-btn-close');
	const layout = document.querySelector('.layout-feedback');
	const body = document.querySelector('body');

	feedbackBtn.onclick = function () {
		feedbackBtn.classList.add('feedback-btn--open');
		feedbackForm.classList.add('feedback-form--open');
		layout.classList.add('layout-feedback--visible');
		body.classList.add('scroll-disabled');
	};

	feedbackBtnClose.onclick = hideActiveElements;
	layout.onclick = hideActiveElements;

	function hideActiveElements() {
		feedbackBtn.classList.remove('feedback-btn--open');
		feedbackForm.classList.remove('feedback-form--open');
		layout.classList.remove('layout-feedback--visible');
		body.classList.remove('scroll-disabled');
	}

	if (document.documentElement.clientWidth < 376) {
		feedbackBtn.innerHTML = "<img src='./../../img/feedback-mail-mob.svg' />";
	} else {
		feedbackBtn.innerHTML = "обратная связь";
	}
}

export default feedback;