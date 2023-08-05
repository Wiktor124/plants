function renderCard() {
	const cardPlantsDiv = document.getElementById('card-plants');

	const textPlants = document.createElement('p');
	textPlants.textContent = 'The perfect plant fot you is...';
	textPlants.classList.add('p-card');

	cardPlantsDiv.appendChild(textPlants);

	const tituloPlants = document.createElement('h2');
	tituloPlants.textContent = 'Titulo de planta';
	tituloPlants.classList.add('title-plant');

	cardPlantsDiv.appendChild(tituloPlants);

	const renderPlant = document.createElement('div');
	renderPlant.id = 'plant';
	renderPlant.className = 'plant';

	cardPlantsDiv.innerHTML = renderPlant.outerHTML;
}

export { renderCard };
