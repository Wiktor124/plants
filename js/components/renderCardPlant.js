let currentCardContainer = null;

function createInfoContainer(
	title,
	content,
	containerClass,
	titleClass,
	contentClass,
) {
	const container = document.createElement('div');
	container.className = containerClass;

	const titleElement = document.createElement('p');
	titleElement.textContent = title;
	titleElement.classList.add(titleClass);

	const contentElement = document.createElement('p');
	contentElement.textContent = content;
	contentElement.classList.add(contentClass);

	container.appendChild(titleElement);
	container.appendChild(contentElement);

	return container;
}
const cardPlantsDiv = document.getElementById('card-plants');

function renderCard(data = []) {
	if (!currentCardContainer) {
		currentCardContainer = document.createElement('div');
		currentCardContainer.classList.add('card-container');
		cardPlantsDiv.appendChild(currentCardContainer);
	}

	currentCardContainer.innerHTML = '';

	const textPlants = document.createElement('p');
	textPlants.textContent = 'The perfect plant for you is...';
	textPlants.classList.add('card-container__p');

	const tituloPlants = document.createElement('h2');
	tituloPlants.textContent = data[2]?.plant || 'No plant!';
	tituloPlants.classList.add('card-container__title');

	const renderPlant = document.createElement('div');
	renderPlant.id = 'plant';
	renderPlant.className = 'plant';

	const extrasImages = document.createElement('div');
	extrasImages.id = 'extras-container';
	renderPlant.innerHTML =
		data.length !== 0
			? data
					.map(item => {
						if (Object.keys(item)[0] !== 'extra') {
							return `<img src="${item.image}" id="${
								Object.keys(item)[0]
							}-image">`;
						} else {
							extrasImages.innerHTML += `<img src="${item.image}" id="${
								Object.keys(item)[0]
							}-image">`;
						}
					})
					.join('')
			: '<h2 style="text-align: center; margin-top: 200px;">No PLant!</h2>';
	const textRecomendationCard = document.createElement('div');
	textRecomendationCard.className = 'card-container__textRecomendation';

	renderPlant.appendChild(extrasImages);
	currentCardContainer.append(
		textPlants,
		tituloPlants,
		renderPlant,
		textRecomendationCard,
	);

	const nameContainer = createInfoContainer(
		'Name',
		data[2]?.plant || 'No plant!',
		'card-container__info',
		'card-container__info-title',
		'card-container__info-name',
	);
	const soilContainer = createInfoContainer(
		'Soil',
		data[1]?.soil || 'No soil!',
		'card-container__info',
		'card-container__info-title',
		'card-container__info-soil',
	);
	const potContainer = createInfoContainer(
		'Pot',
		data[0]?.pot || 'No pot!',
		'card-container__info',
		'card-container__info-title',
		'card-container__info-pot',
	);
	const colorContainer = createInfoContainer(
		'Color',
		'Clay',
		'card-container__info',
		'card-container__info-title',
		'card-container__info-color',
	);

	let extrasContainer;
	const extrasArr = data.slice(3);

	const extra =
		extrasArr.length > 0
			? extrasArr?.map(item => item.extra).join(', ')
			: 'No extras!';
	extrasContainer = createInfoContainer(
		'Extras',
		extra,
		'card-container__info',
		'card-container__info-title',
		'card-container__info-extras',
	);

	const containerCustomBtn = document.createElement('div');
	containerCustomBtn.classList.add('containerCustomBtn');

	const customBtn = document.createElement('button');
	customBtn.classList.add('style-input');

	const customEnlace = document.createElement('a');
	customEnlace.textContent = 'Customize';
	customEnlace.href = '././customize.html';
	customEnlace.classList.add('customEnlace');

	containerCustomBtn.appendChild(customBtn);
	customBtn.appendChild(customEnlace);

	currentCardContainer.appendChild(textRecomendationCard);
	textRecomendationCard.append(
		nameContainer,
		soilContainer,
		potContainer,
		colorContainer,
		extrasContainer,
		containerCustomBtn,
	);
}

export { renderCard };
