import PlantsBuilder from '../plants-builder.js';
import getPlantData from '../components/plant.-card.js';
const plantsForm = [...document.querySelector('#plantForm')];


let elections;
const handleOptions = e => {
  e.preventDefault();
  const plant = new PlantsBuilder();
  const methods = [];
  const extraElements = [];

  for (let i = 0; i < plantsForm.length; i++) {
    if (plantsForm[i].checked) {
      methods.push(plantsForm[i].name);

      methods.forEach(attr => plant.addAttribute(attr));

      elections = plant[plantsForm[i].name](plantsForm[i].value);

      if (elections?.extra_elements) {
        extraElements.push(elections.extra_elements);

        elections.extra_elements = extraElements;
      }
    }
  }

  getPlantData(elections);
};

function initPlantsBuilder() {
  document
    .querySelector('#plantForm')
    .addEventListener('submit', handleOptions);
}

export default initPlantsBuilder;