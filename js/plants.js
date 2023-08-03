const plantsForm = [...document.querySelector('#plantForm')];

class PlantsBuilder {
  constructor() {
    this.plant = {};
  }

  addAttribute(attrName) {
    this[attrName] = value => {
      if (value) {
        this.plant[attrName] = value;
        return this;
      }
    };
  }

  build() {
    return this.plant;
  }
}

let elections;
const handleOptions = e => {
  e.preventDefault();
  const plant = new PlantsBuilder();

  for (let i = 0; i < plantsForm.length; i++) {
    if (plantsForm[i].checked) {
      const attributes = [];
      attributes.push(plantsForm[i].name);

      attributes.forEach(attr => plant.addAttribute(attr));

      elections = plant[plantsForm[i].name](plantsForm[i].value).build();
    }
  }

  console.log(elections);
};

function initPlantsBuilder() {
  document
    .querySelector('#plantForm')
    .addEventListener('submit', handleOptions);
}
export default initPlantsBuilder;
