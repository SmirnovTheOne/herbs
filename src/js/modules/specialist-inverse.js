function specialist() {
	document.addEventListener('DOMContentLoaded', function () {
		var specialistBtn = document.querySelectorAll('.specialist__card-btn');
		var specialistWrap = document.querySelectorAll('.specialist__card-wrap');

		specialistBtn.forEach((element, index) => {
			element.addEventListener('mouseenter', function (e) {
				specialistWrap[index].classList.add('inverse');
			});
			element.addEventListener('mouseleave', function () {
				specialistWrap[index].classList.remove('inverse');
			})
		});
	})
}

export default specialist;