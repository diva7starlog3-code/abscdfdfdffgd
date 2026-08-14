let timer = null;

const left = [
  document.getElementById("left1"),
  document.getElementById("left2"),
  document.getElementById("left3")
];

const right = [
  document.getElementById("right1"),
  document.getElementById("right2"),
  document.getElementById("right3")
];

const center = document.getElementById("center");

const statusText = document.getElementById("status");


function semuaMati() {

  [...left, ...right, center].forEach(lamp => {
    lamp.classList.remove("active");
    lamp.classList.remove("brake");
  });

}


function mati() {

  clearInterval(timer);

  semuaMati();

  statusText.innerText = "MATI";
}


// ==============================
// SEIN KIRI
// ==============================

function seinKiri() {

  clearInterval(timer);

  let step = 0;

  statusText.innerText = "SEIN KIRI";

  timer = setInterval(() => {

    semuaMati();

    if (step === 0) {
      left[0].classList.add("active");
    }

    if (step === 1) {
      left[0].classList.add("active");
      left[1].classList.add("active");
    }

    if (step === 2) {
      left[0].classList.add("active");
      left[1].classList.add("active");
      left[2].classList.add("active");
    }

    step++;

    if (step > 3) {
      step = 0;
    }

  }, 180);
}


// ==============================
// SEIN KANAN
// ==============================

function seinKanan() {

  clearInterval(timer);

  let step = 0;

  statusText.innerText = "SEIN KANAN";

  timer = setInterval(() => {

    semuaMati();

    if (step === 0) {
      right[0].classList.add("active");
    }

    if (step === 1) {
      right[0].classList.add("active");
      right[1].classList.add("active");
    }

    if (step === 2) {
      right[0].classList.add("active");
      right[1].classList.add("active");
      right[2].classList.add("active");
    }

    step++;

    if (step > 3) {
      step = 0;
    }

  }, 180);
}


// ==============================
// HAZARD
// ==============================

function hazard() {

  clearInterval(timer);

  let nyala = false;

  statusText.innerText = "HAZARD";

  timer = setInterval(() => {

    semuaMati();

    nyala = !nyala;

    if (nyala) {

      [...left, ...right].forEach(lamp => {
        lamp.classList.add("active");
      });

    }

  }, 450);
}


// ==============================
// REM
// ==============================

function rem() {

  clearInterval(timer);

  semuaMati();

  statusText.innerText = "REM";

  [...left, ...right, center].forEach(lamp => {
    lamp.classList.add("brake");
  });

}
