let secHand = document.querySelector(".hand.seconds");
let minHand = document.querySelector(".hand.minutes");
let houHand = document.querySelector(".hand.hours");

let secDigital = document.querySelector(".s");
let minDigital = document.querySelector(".m");
let houDigital = document.querySelector(".h");

let currentSec = 0;
let currentMin = 0;
let currentHou = 0;

let currentSecDigital = 0;
let currentMinDigital = 0;
let currentHouDigital = 0;

let currentDate = 0;

function handPosition(element, currentTime) {
  if (currentTime == currentSec) {
    element.style.setProperty(
      "--rotation",
      currentTime * 6
    ) /*a cada segundo o ponteiro dos segundos move 6º*/;
  } else if (currentTime == currentMin) {
    element.style.setProperty(
      "--rotation",
      currentTime * 0.1
    ) /*a cada segundo o ponteiro dos minutos move 0.1º*/;
  } else if (currentTime == currentHou) {
    element.style.setProperty(
      "--rotation",
      currentTime * (1 / 120)
    ) /*a cada segundo o ponteiro das horas move (1/120)º*/;
  }
}

function getHour() {
  const currentDate = new Date();

  currentSec = currentDate.getSeconds();
  currentMin = currentDate.getMinutes() * 60 + currentSec;
  currentHou = currentDate.getHours() * 3600 + currentMin + currentSec;

  handPosition(secHand, currentSec);
  handPosition(minHand, currentMin);
  handPosition(houHand, currentHou);
}

function updateHours(element2, currentTime2) {
  if (element2 == secDigital) {
    if (currentTime2 < 10) {
      element2.innerHTML = `0${currentTime2}`;
    } else {
      element2.innerHTML = `${currentTime2}`;
    }
  } else if (element2 == minDigital) {
    if (currentTime2 < 10) {
      element2.innerHTML = `0${currentTime2}`;
    } else {
      element2.innerHTML = `${currentTime2}`;
    }
  } else if (element2 == houDigital) {
    if (currentTime2 < 10) {
      element2.innerHTML = `0${currentTime2}`;
    } else {
      element2.innerHTML = `${currentTime2}`;
    }
  }
}

function getHourDigital() {
  const currentDate = new Date();

  currentSecDigital = currentDate.getSeconds();
  currentMinDigital = currentDate.getMinutes();
  currentHouDigital = currentDate.getHours();

  updateHours(secDigital, currentSecDigital);
  updateHours(minDigital, currentMinDigital);
  updateHours(houDigital, currentHouDigital);
}

let currentLuminosity = document.querySelector(".luminosity");
let propertyCSS = document.querySelector(":root");

function luminosity() {
  if (currentLuminosity.innerHTML == "light") {
    currentLuminosity.innerHTML = "dark";
    propertyCSS.style.setProperty("--clrBackground", "#aeb6d8");
    propertyCSS.style.setProperty("--letters", "#000");
    propertyCSS.style.setProperty("--clrBackgroundPreview", "#212430");
  } else {
    currentLuminosity.innerHTML = "light";
    propertyCSS.style.setProperty("--clrBackground", "#212430");
    propertyCSS.style.setProperty("--letters", "#fff");
    propertyCSS.style.setProperty("--clrBackgroundPreview", "#aeb6d8");
  }
}

let valor;

function enviar() {
  valor = document.getElementById("color").value;
  console.log("Você escolheu a cor: " + valor);
}

let borderColor = document.querySelector("#color");

function changeBorderColor() {
  let currentBorderColor = valor;
  propertyCSS.style.setProperty("--clrBorder", currentBorderColor);
}

setInterval(getHour, 1000);
setInterval(getHourDigital, 1000);

//teste
