import PlantsBuilder from '../plants-builder.js';
import { renderCard } from '../components/renderCardPlant.js';
import plantElection from './plants-elections.js';
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

	renderCard();
	plantElection(elections);
	showCard();
};


const handleClear = e => {
	document.querySelector('.card-container').innerHTML = ''; 
};

function init() {
	document
		.querySelector('#plantForm')
		.addEventListener('submit', handleOptions);

		document
			.querySelector('.deleted')
			.addEventListener('click', handleClear); 
}

export default init;
