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
  document.querySelector('#extras-container').innerHTML = details.map(({ image }) => `<img src="${image}">`).join('')
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
