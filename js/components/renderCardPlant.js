let currentCardContainer = null;

function createInfoContainer(title, content, containerClass, titleClass, contentClass) {
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

function renderCard() {
  const cardPlantsDiv = document.getElementById('card-plants');

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
  tituloPlants.textContent = 'Titulo de planta';
  tituloPlants.classList.add('card-container__title');

  const renderPlant = document.createElement('div');
  renderPlant.id = 'plant';
  renderPlant.className = 'plant';

  const textRecomendationCard = document.createElement('div');
  textRecomendationCard.className = 'card-container__textRecomendation';

  currentCardContainer.append(
    textPlants,
    tituloPlants,
    renderPlant,
    textRecomendationCard
  );

  const nameContainer = createInfoContainer('Name', 'Mostera Deliciosa', 'card-container__info', 'card-container__info-title', 'card-container__info-name');
  const soilContainer = createInfoContainer('Soil', 'Premium fertilized soil', 'card-container__info', 'card-container__info-title', 'card-container__info-soil');
  const potContainer = createInfoContainer('Pot', 'Clay pot with decorations', 'card-container__info', 'card-container__info-title', 'card-container__info-pot');
  const colorContainer = createInfoContainer('Color', 'Clay', 'card-container__info', 'card-container__info-title', 'card-container__info-color');
  const extrasContainer = createInfoContainer('Extras', 'Moss pole', 'card-container__info', 'card-container__info-title', 'card-container__info-extras');

  currentCardContainer.appendChild(textRecomendationCard);
  textRecomendationCard.append(nameContainer, soilContainer, potContainer, colorContainer, extrasContainer);
}

export { renderCard };
