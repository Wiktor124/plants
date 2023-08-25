import { renderCard } from '../components/renderCardPlant.js';
import {
	extraConfig,
	plantsConfig,
	potsConfig,
	soilConfig,
} from '../../config.js';
import {
	ChangePotMaterial,
	changeDecoration,
	changeExtas,
	changePlant,
	changePotColor,
	changeSoil,
} from './details.js';

const recomendation = JSON.parse(localStorage.getItem('recomendation')) || [];
const flag = false;

let showPotContainerFlag = flag;
let potDecorationFlag = flag;
let potColorFlag = flag;
let color = '';
let clayMaterial = 'clay';
let ceramicMaterial = 'ceramic';
let material = clayMaterial;
const extras = [];

function handlePlantsDropdown(e) {
	const selectedPlant = e.target.value;

	if (!selectedPlant) return;

	changePlant.publish(plantsConfig[selectedPlant]);
}

function handleCustomizingPlant(e) {
	const target = e.target;
	const dataset = target.dataset;

	if (dataset?.pot) {
		material = dataset?.pot === clayMaterial ? clayMaterial : ceramicMaterial;

		const decoration = potDecorationFlag ? 'decorated' : 'basic';

		if (showPotContainerFlag && potColorFlag) {
			const thisPotColor = potsConfig[material][color][decoration];
			return changePotColor.publish({ ...thisPotColor, color: color });
		} else if (potDecorationFlag) {
			return changeDecoration.publish(
				potsConfig[material]?.unpainted[decoration],
			);
		}

		ChangePotMaterial.publish(potsConfig[dataset.pot]?.unpainted.basic);
	}

	if (target.matches('#decorated')) {
		potDecorationFlag = !potDecorationFlag;

		const decoration = potDecorationFlag ? 'decorated' : 'basic';

		if (showPotContainerFlag && potColorFlag) {
			const thisPotColor = potsConfig[material][color][decoration];

			return changePotColor.publish({ ...thisPotColor, color: color });
		}

		changeDecoration.publish(potsConfig[material]?.unpainted[decoration]);
	}

	if (dataset.container) {
		showPotContainerFlag = !showPotContainerFlag;

		const potColorsContainer = document.querySelector(`#${dataset.container}`);
		const decoration = potDecorationFlag ? 'decorated' : 'basic';

		if (!showPotContainerFlag) {
			const thisPotColor = potsConfig[material].unpainted[decoration];
			changePotColor.publish({ ...thisPotColor, color: color });
		}

		potColorsContainer.style.display = showPotContainerFlag ? 'flex' : 'none';
	}

	if (dataset?.color) {
		potColorFlag = true;
		color = dataset.color;
		const decoration = potDecorationFlag ? 'decorated' : 'basic';
		const thisPotColor = potsConfig[material][dataset.color][decoration];
		changePotColor.publish({ ...thisPotColor, color: color });
	}

	if (dataset?.soil) {
		changeSoil.publish(soilConfig[dataset.soil]);
	}

	if (dataset?.extras) {
		const extraIndex = extras.findIndex(extra => extra === target.value);

		if (extraIndex >= 0) {
			extras.splice(extraIndex, 1);
		} else {
			extras.push(target.value);
		}

		changeExtas.publish(extras.map(item => extraConfig[item]));
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
