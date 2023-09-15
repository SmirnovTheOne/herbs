function start() {
	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.butt');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('active'));
				btn.classList.add('active');
			});

		});

	});

	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.butts');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('actives'));
				btn.classList.add('actives');
			});

		});

	});

	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.buttsplan');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('activess'));
				btn.classList.add('activess');
			});

		});

	});

	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.buttseven');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('activeseven'));
				btn.classList.add('activeseven');
			});

		});

	});

	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.butttel');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('activetel'));
				btn.classList.add('activetel');
			});

		});

	});

	document.addEventListener('DOMContentLoaded', () => {

		let myBtns = document.querySelectorAll('.buttmini');
		myBtns.forEach(function (btn) {

			btn.addEventListener('click', () => {
				myBtns.forEach(b => b.classList.remove('activemini'));
				btn.classList.add('activemini');
			});

		});

	});
}

export default start;