let timer = null;


/* =========================
   AMBIL SEMUA LED
========================= */

const leftLED = [
  document.querySelector(".left1"),
  document.querySelector(".left2"),
  document.querySelector(".left3")
];


const rightLED = [
  document.querySelector(".right1"),
  document.querySelector(".right2"),
  document.querySelector(".right3")
];


const brakeLED = [

  document.querySelector(".brake1"),
  document.querySelector(".brake2"),
  document.querySelector(".brake3"),
  document.querySelector(".brake4"),
  document.querySelector(".brake5")

];


const statusText =
  document.getElementById("status");


/* =========================
   MATIKAN SEMUA
========================= */

function semuaMati() {

  [...leftLED, ...rightLED]
    .forEach(led => {
      led.classList.remove("on");
    });


  brakeLED.forEach(led => {
    led.classList.remove("on");
  });

}


/* =========================
   MATI
========================= */

function mati() {

  clearInterval(timer);

  semuaMati();

  statusText.innerText = "MATI";
}


/* =========================
   SEIN KIRI
========================= */

function seinKiri() {

  clearInterval(timer);

  let step = 0;

  statusText.innerText =
    "SEIN KIRI — RUNNING";


  timer = setInterval(() => {

    semuaMati();


    /*
      LED bergerak
      dari luar → dalam
    */

    if (step === 0) {

      leftLED[0]
        .classList.add("on");

    }


    if (step === 1) {

      leftLED[0]
        .classList.add("on");

      leftLED[1]
        .classList.add("on");

    }


    if (step === 2) {

      leftLED[0]
        .classList.add("on");

      leftLED[1]
        .classList.add("on");

      leftLED[2]
        .classList.add("on");

    }


    step++;


    if (step > 3) {

      step = 0;

    }

  }, 180);

}


/* =========================
   SEIN KANAN
========================= */

function seinKanan() {

  clearInterval(timer);

  let step = 0;

  statusText.innerText =
    "SEIN KANAN — RUNNING";


  timer = setInterval(() => {

    semuaMati();


    if (step === 0) {

      rightLED[0]
        .classList.add("on");

    }


    if (step === 1) {

      rightLED[0]
        .classList.add("on");

      rightLED[1]
        .classList.add("on");

    }


    if (step === 2) {

      rightLED[0]
        .classList.add("on");

      rightLED[1]
        .classList.add("on");

      rightLED[2]
        .classList.add("on");

    }


    step++;


    if (step > 3) {

      step = 0;

    }

  }, 180);

}


/* =========================
   HAZARD
========================= */

function hazard() {

  clearInterval(timer);

  let nyala = false;

  statusText.innerText =
    "HAZARD";


  timer = setInterval(() => {

    semuaMati();

    nyala = !nyala;


    if (nyala) {

      [...leftLED, ...rightLED]
        .forEach(led => {

          led.classList.add("on");

        });

    }

  }, 450);

}


/* =========================
   REM
========================= */

function rem() {

  clearInterval(timer);

  semuaMati();

  statusText.innerText =
    "REM";


  brakeLED.forEach(led => {

    led.classList.add("on");

  });

}
