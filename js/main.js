import initPlantsBuilder from './modules/recomendations.js';

initPlantsBuilder();

function deleted() {
  const pato = document.querySelector("#card-plants")
  const hola = document.querySelector(".deleted")
  hola.addEventListener("click", function (event) {
    
    buttonGoing.classList.remove("changeGoing");
    buttonGoing.classList.add("settingButtonActivities");
  });
}
 

deleted()