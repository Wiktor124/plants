let currentCardContainer = null;

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
  textPlants.classList.add('p-card');
  currentCardContainer.appendChild(textPlants);

  const tituloPlants = document.createElement('h2');
  tituloPlants.textContent = 'Titulo de planta';
  tituloPlants.classList.add('title-plant');
  currentCardContainer.appendChild(tituloPlants);

  const renderPlant = document.createElement('div');
  renderPlant.id = 'plant';
  renderPlant.className = 'plant';
  currentCardContainer.appendChild(renderPlant);

	const textRecomendation = document.createElement('div');
  textRecomendation.className = 'textRecomendation';
  cardPlantsDiv.appendChild(textRecomendation);

	const containerNameCard = document.createElement('div');
  containerNameCard.className = 'containerNameCard';

  textRecomendation.appendChild(containerNameCard);

}
export { renderCard };
