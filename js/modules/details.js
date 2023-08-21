import Publisher from '../publisher.js';

const ChangePotMaterial = new Publisher();
const changeDecoration = new Publisher();
const changePotColor = new Publisher();
const changeSoil = new Publisher();
const changePlant = new Publisher();
const changeExtas = new Publisher();

function potMaterial(detail) {
  document.querySelector('.card-container__info-pot').textContent = detail.pot;
  document.querySelector('#pot-image').src = detail.image;
}

function potDecoration(detail) {
  document.querySelector('.card-container__info-pot').textContent = detail.pot;
  document.querySelector('#pot-image').src = detail.image;
}

function potColor(detail) {
  document.querySelector('#pot-image').src = detail.image;
  document.querySelector('.card-container__info-pot').textContent = detail.pot;
  document.querySelector('.card-container__info-color').textContent = detail.color;

}

function soil(detail) {
  document.querySelector('#soil-image').src = detail.image;
  document.querySelector('.card-container__info-soil').textContent = detail.soil;
}

function plant(detail) {
  document.querySelector('.card-container__title').textContent = detail.plant;
  document.querySelector('#plant-image').src = detail.image;
  document.querySelector('.card-container__info-name').textContent = detail.plant;

}

function extras(details) {
  const checkboxes = Array.from(document.querySelectorAll('[data-extra="extras"]'));

  const matchingIds = details
    .filter(detail => checkboxes.some(checkbox => checkbox.id === detail.id))
    .map(detail => detail.id);
  console.log(matchingIds, details)
}

changeDecoration.subscribe(potDecoration);
changePotColor.subscribe(potColor);
changeSoil.subscribe(soil);
changePlant.subscribe(plant);
ChangePotMaterial.subscribe(potMaterial);
changeExtas.subscribe(extras);

export {
  changeDecoration,
  changePotColor,
  changeSoil,
  changePlant,
  ChangePotMaterial,
  changeExtas,
};
