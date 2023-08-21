import { renderCard } from '../components/renderCardPlant.js';
import { extraConfig, plantsConfig, potsConfig, soilConfig } from '../../config.js';
import { ChangePotMaterial, changeDecoration, changeExtas, changePlant, changePotColor, changeSoil } from './details.js';

const recomendation = JSON.parse(localStorage.getItem('recomendation')) || [];
const flag = false;

let showPotContainer = flag;
let potDecoration = flag;
let potColor = flag;
let color = '';
let clayMaterial = 'clay';
let ceramicMaterial = 'ceramic';
let material = clayMaterial;
const extras = [];

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

    if (showPotContainer && potColor) {
      const thisPotColor = potsConfig[material][color][decoration];
      return changePotColor.publish({ ...thisPotColor, color: color });
    } else if (potDecoration) {
      return changeDecoration.publish(potsConfig[material]?.unpainted[decoration]);
    }

    ChangePotMaterial.publish(potsConfig[dataset.pot]?.unpainted.basic)
  }

  if (target.matches('#decorated')) {
    potDecoration = !potDecoration;

    const decoration = potDecoration ? 'decorated' : 'basic';

    if (showPotContainer && potColor) {
      const thisPotColor = potsConfig[material][color][decoration];

      return changePotColor.publish({ ...thisPotColor, color: color });
    }

    changeDecoration.publish(potsConfig[material]?.unpainted[decoration]);
  }

  if (dataset.container) {
    showPotContainer = !showPotContainer;

    const potColorsContainer = document.querySelector(`#${dataset.container}`);
    const decoration = potDecoration ? 'decorated' : 'basic';

    if (!showPotContainer) {
      const thisPotColor = potsConfig[material].unpainted[decoration];
      changePotColor.publish({ ...thisPotColor, color: color });
    }

    potColorsContainer.style.display = showPotContainer ? 'flex' : 'none';
  }

  if (dataset?.color) {
    potColor = true;
    color = dataset.color;
    const decoration = potDecoration ? 'decorated' : 'basic';
    const thisPotColor = potsConfig[material][dataset.color][decoration];
    changePotColor.publish({ ...thisPotColor, color: color });
  }

  if (dataset?.soil) {
    changeSoil.publish(soilConfig[dataset.soil])
  }

  if (dataset?.extras) {

    const extraIndex = extras.findIndex(extra => extra === target.value);

    if (extraIndex >= 0) {
      extras.splice(extraIndex, 1);
    } else {
      extras.push(target.value);
    }
    const id = target.id;

    changeExtas.publish(extras.map(item => ({ ...extraConfig[item], id })));
  }

  localStorage.setItem('recomendation', JSON.stringify(recomendation));
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
