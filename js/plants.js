// main.js
class PlantsBuilder {
  constructor() {
    this.plant = {};
  }

  addAttribute(attrName, value) {
    if (value) {
      if (attrName === 'extra_elements') {
        if (this.plant[attrName]) {
          this.plant[attrName].push(value);
        } else {
          this.plant[attrName] = [value];
        }
      } else {
        this.plant[attrName] = value;
      }
      return this;
    }
  }

  build() {
    return this.plant;
  }
}

function printPlantData(plantConfig) {
  const card = document.getElementById('card');
  card.innerHTML = `
      <h3 class="card__title">Plant Recommendation</h3>
      <div class="card__content">
          <p>Name: ${plantConfig.placement || ''}</p>
          <p>Sunlight: ${plantConfig.sunlight || ''}</p>
          <p>Pets: ${plantConfig.pets || ''}</p>
          <p>Watering: ${plantConfig.watering || ''}</p>
          <p>Style: ${plantConfig.style || ''}</p>
          <p>Extras: ${plantConfig.extra_elements ? plantConfig.extra_elements.join(', ') : ''}</p>
      </div>
  `;
}

function handleOptions(e) {
  e.preventDefault();
  const plant = new PlantsBuilder();

  const plantsForm = document.getElementById('plantForm');
  for (let i = 0; i < plantsForm.elements.length; i++) {
    const input = plantsForm.elements[i];
    if ((input.type === 'radio' || input.type === 'checkbox') && input.checked) {
      plant.addAttribute(input.name, input.value);
    }
  }

  const plantConfig = plant.build();
  console.log(plantConfig);

  // Imprimir datos
  printPlantData(plantConfig);
}

function initPlantsBuilder() {
  document.getElementById('plantForm').addEventListener('submit', handleOptions);
}

export default initPlantsBuilder;
