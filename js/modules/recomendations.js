import PlantsBuilder from '../plants-builder.js';
import { renderCard } from '../components/renderCardPlant.js';
import { plantsQuestions } from '../../config.js';

const dataForm = document.querySelector('#plantForm');

const handleOptions = e => {
	e.preventDefault();
	const selectedPlant = [];

	const placement = new FormData(dataForm).get('placement');
	const sunlight = new FormData(dataForm).get('sunlight');
	const pets = new FormData(dataForm).get('pets');
	const watering = new FormData(dataForm).get('watering');
	const style = new FormData(dataForm).get('style');
	const extras = new FormData(dataForm).getAll('extra_elements');

	const plant = new PlantsBuilder()
		.setPot(plantsQuestions.watering_question[watering][style])
		.setSoil(plantsQuestions.sunlight_question[sunlight])
		.setPlant(plantsQuestions.placement_question[placement][pets]);

	if (extras.length > 0) {
		const extraElement = extras.map(
			item => plantsQuestions.extra_elements[item],
		);
		plant.setExtras(extraElement);
	}

	for (const key in plant) {
		selectedPlant.push(plant[key]);
	}

	const recomendation = selectedPlant.flatMap(item =>
		Array.isArray(item) ? item : [item],
	);
	
	renderCard(recomendation);
	localStorage.setItem('recomendation', JSON.stringify(recomendation));
};

const handleClear = () => {
	document.querySelector('.card-container').innerHTML = '';
};

function init() {
	renderCard();
	document
		.querySelector('#plantForm')
		.addEventListener('submit', handleOptions);

	document.querySelector('.deleted').addEventListener('click', handleClear);
}

export default init;
