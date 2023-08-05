import plantsOptions from '../../config.js';

function getPlantData(data) {

  console.table(data);

  const { pets, placement, style, sunlight, watering } = data;
  const {
    placement_answer,
    sunlight_answer,
    watering_answer,
    style_answer,
    extra_elements_answer,
  } = plantsOptions;

  // console.log(pets_answer[pets], '---------', placement_answer[placement][pets]);
  // <img src="${pets_answer[pets]}" alt="">
  // <img src="${style_answer[style]}" alt="">
  document.querySelector('#plant').innerHTML = `
 
  <img src="${watering_answer[watering][style]}" alt="">
  <img src="${sunlight_answer[sunlight]}" alt="">
  <img src="${placement_answer[placement][pets]}" alt="">
  `;
}

export default getPlantData;