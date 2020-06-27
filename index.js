const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('a');

const ul = document.querySelector('ul');
hamburger.addEventListener('click', function () {
	ul.classList.toggle('show');
	hamburger.classList.toggle('bar-move');
});

links.forEach((link) => {
	link.addEventListener('click', () => {
		ul.classList.toggle('show');
		hamburger.classList.toggle('bar-move');
	});
});
