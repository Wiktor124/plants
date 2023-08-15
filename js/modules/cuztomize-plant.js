import { renderCard } from '../components/renderCardPlant.js';
const recomendation = JSON.parse(localStorage.getItem('recomendation')) || [];

function activeColors() {
  const inputs = document.querySelectorAll('input[type="checkbox"], input[type="radio"]');

  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].checked) {
      console.log(inputs[i]);
    }
  }

  inputs.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const containerId = this.dataset?.container;
      const container = document.querySelector(`#${containerId}`);

      if (container) {
        if (this.checked) {
          container.style.display = 'flex';
        } else {
          container.style.display = 'none';
        }
      }
    });
  });



}

function initCustomization() {
  renderCard(recomendation);
  activeColors();


}

export default initCustomization;