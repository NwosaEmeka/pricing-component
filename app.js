const checkbox = document.querySelector('#checkbox');
const prices = document.querySelectorAll('.price');

checkbox.addEventListener('change', () => {
	prices.forEach((price) => {
		price.classList.toggle('monthly');
	});
});
