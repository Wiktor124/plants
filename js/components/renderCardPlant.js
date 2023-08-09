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
  
  const tituloPlants = document.createElement('h2');
  tituloPlants.textContent = 'Titulo de planta';
  tituloPlants.classList.add('title-plant');
  
  const renderPlant = document.createElement('div');
  renderPlant.id = 'plant';
  renderPlant.className = 'plant';
  
	const textRecomendation = document.createElement('div');
  textRecomendation.className = 'textRecomendation';
  
  // const namePlant = document.createElement('p');
  // namePlant.textContent = 'Name : Mostera Deliciosa';
  // namePlant.classList.add('namePlant');

  // const soilPlant = document.createElement('p');
  // soilPlant.textContent = 'Soil : Premium fertilized soil';
  // soilPlant.classList.add('soilPlant');

  // const potPlant = document.createElement('p');
  // potPlant.textContent = 'Pot : Clay pot with decorations';
  // potPlant.classList.add('potPlant');

  // const colorPlant = document.createElement('p');
  // colorPlant.textContent = 'Color : Clay';
  // colorPlant.classList.add('colorPlant');

  // const extrasPlant = document.createElement('p');
  // extrasPlant.textContent = 'Extras : Moss pole';
  // extrasPlant.classList.add('extrasPlant');
  
  // currentCardContainer.appendChild(textPlants);
  // currentCardContainer.appendChild(tituloPlants);
  // currentCardContainer.appendChild(renderPlant);
  // currentCardContainer.appendChild(textRecomendation);

  // textRecomendation.appendChild(namePlant);
  // textRecomendation.appendChild(soilPlant);
  // textRecomendation.appendChild(potPlant);
  // textRecomendation.appendChild(colorPlant);
  // textRecomendation.appendChild(extrasPlant);

	const hola = document.createElement('div');
  hola.className = 'hola';

  const pato = document.createElement('p');
  pato.className = 'pato';
  pato.textContent = 'Pot';

  const vaca = document.createElement('p');
  vaca.className = 'vaca';
  vaca.textContent = 'Clay pot with decorations';

   
  hola.appendChild(pato);
  hola.appendChild(vaca);

  currentCardContainer.appendChild(textRecomendation);
  textRecomendation.appendChild(hola);
  
}
export { renderCard };
