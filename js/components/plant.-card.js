import plantsOptions from '../../config.js';

function getPlantData(data) {

  const { pets, placement, style, sunlight, watering } = data;
  const {
    placement_answer,
    pets_answer,
    sunlight_answer,
    watering_answer,
    style_answer,
    extra_elements_answer,
  } = plantsOptions;

  console.log(pets_answer[pets], placement_answer[placement][pets], pets);

  document.querySelector('.plant').innerHTML = `
		<img src=${pets_answer[pets]}" alt="">
		<img src="${placement_answer[placement][pets]}" alt="">
   
  `;
}

export default getPlantData;