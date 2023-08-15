import plantsQuestions from '../../config.js';
import { renderCard } from '../components/renderCardPlant.js';

function plantElection(data) {
	const { pets, placement, style, sunlight, watering } = data;
	const extra = data?.extra_elements;

	const {
		placement_question,
		sunlight_question,
		watering_question,
		extra_elements,
	} = plantsQuestions;

	const plantRecomendation = [
		watering_question[watering][style],
		sunlight_question[sunlight],
		placement_question[placement][pets],
	];

	if (extra) {
		extra.forEach(item => plantRecomendation.push(extra_elements?.[item]));
	}

	renderCard(plantRecomendation);
	localStorage.setItem('recomendation', JSON.stringify(plantRecomendation));
}

export default plantElection;
