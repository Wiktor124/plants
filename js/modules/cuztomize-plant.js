import { renderCard } from '../components/renderCardPlant.js';
import { plantsConfig, potsConfig, soilConfig } from '../../config.js';
import { ChangePotMaterial, changeDecoration, changeExtas, changePlant, changePotColor, changeSoil } from './details.js';
const recomendation = JSON.parse(localStorage.getItem('recomendation')) || [];
const flag = false;

let showPotContainer = flag;
let potDecoration = flag;
let potColor = flag;
let color;
let clayMaterial = 'clay';
let ceramicMaterial = 'ceramic';
let material = clayMaterial;

function handlePlantsDropdown(e) {
  const selectedPlant = e.target.value;

  if (!selectedPlant) return;

  changePlant.publish(plantsConfig[selectedPlant])
}

function handleCustomizingPlant(e) {
  const target = e.target;
  const dataset = target.dataset;



  if (dataset?.pot) {
    material = dataset?.pot === clayMaterial ? clayMaterial : ceramicMaterial;

    const decoration = potDecoration ? 'decorated' : 'basic';

    if (potDecoration) {
      return changeDecoration.publish(potsConfig[material]?.unpainted[decoration]);
    }

    if (showPotContainer && potColor) {
      return changePotColor.publish(potsConfig[material][color][decoration]);
    }

    ChangePotMaterial.publish(potsConfig[dataset.pot]?.unpainted.basic)
  }

  if (target.matches('#decoration')) {
    potDecoration = !potDecoration;

    const decoration = potDecoration ? 'decorated' : 'basic';

    if (showPotContainer && potColor) {

      return changePotColor.publish(potsConfig[material][color][decoration]);
    }


    changeDecoration.publish(potsConfig[material]?.unpainted[decoration]);
  }

  if (dataset.container) {
    showPotContainer = !showPotContainer;
    const potColorsContainer = document.querySelector(`#${dataset.container}`);

    potColorsContainer.style.display = showPotContainer ? 'flex' : 'none';
  }

  if (dataset?.color) {
    potColor = !potColor;
    color = dataset.color;
    const decoration = potDecoration ? 'decorated' : 'basic';
    changePotColor.publish(potsConfig[material][dataset.color][decoration]);
  }

  if (dataset?.soil) {
    changeSoil.publish(soilConfig[dataset.soil])
  }

  if (dataset?.extras) {
    changeExtas.publish(target.value)
  }

  localStorage.setItem('recomendation', JSON.stringify(recomendation));
  // renderCard(recomendation)
}

function initCustomization() {
  renderCard(recomendation);
  document
    .querySelector('#customize')
    .addEventListener('change', handleCustomizingPlant);
  document
    .querySelector('#plants-dropdown')
    .addEventListener('click', handlePlantsDropdown);
}

export default initCustomization;
