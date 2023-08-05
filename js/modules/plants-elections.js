import plantsQuestions from '../../config.js';
import renderImageRecomendation from '../components/recomendation.js';

function plantElection(data) {
  const { pets, placement, style, sunlight, watering } = data;
  const extra = data?.extra_elements;

  const {
    placement_question,
    sunlight_question,
    watering_question,
    extra_elements,
  } = plantsQuestions;

  const platRecomendation = [
    watering_question[watering][style],
    sunlight_question[sunlight],
    placement_question[placement][pets],
  ];

  if (extra) {
    extra.forEach(item => platRecomendation.push(extra_elements?.[item]));
    renderImageRecomendation(platRecomendation);
  } else {
    renderImageRecomendation(platRecomendation);
  }
}

export default plantElection;
