import { plantsConfig, potsConfig } from '../../config.js';
import { renderCard } from '../components/renderCardPlant.js';
import Publisher from '../publisher.js';
const recomendation = JSON.parse(localStorage.getItem('recomendation')) || [];


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
  document.querySelector('.card-container__info-pot').textContent = detail.pot;
  document.querySelector('#pot-image').src = detail?.image;
}

function soil(detail) {
  document.querySelector('#soil-image').src = detail?.image;
  document.querySelector('.card-container__info-soil').textContent = detail.soil;
}

function plant(detail) {
  document.querySelector('#plant-image').src = detail?.image;

}

function extras(...details) {

  console.log(details);
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
