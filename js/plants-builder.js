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
  const methods = [];
  const extraElements = [];

  for (let i = 0; i < plantsForm.length; i++) {
    if (plantsForm[i].checked) {

      methods.push(plantsForm[i].name);

      methods.forEach(attr => plant.addAttribute(attr));

      elections = plant[plantsForm[i].name](plantsForm[i].value).build();

      if (elections?.extra_elements) {
        extraElements.push(elections.extra_elements)

        elections.extra_elements = extraElements.length === 1 ? elections.extra_elements : extraElements;
      }
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
