import { renderCard } from './components/renderCardPlant.js';

renderCard(JSON.parse(localStorage.getItem('recomendation')));

function activeColors() {
	const checkboxes = document.querySelectorAll('input[type="checkbox"]');

	checkboxes.forEach(function (checkbox) {
		checkbox.addEventListener('change', function () {
			const containerId = this.dataset.container;
			const container = document.querySelector(`#${containerId}`);

			if (this.checked) {
				container.style.display = 'flex';
			} else {
				container.style.display = 'none';
			}
		});
	});
}

activeColors();
