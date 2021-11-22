// ph progress
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let current = 12.5;
let end = 14;

let progressValue = 0;
let progressEndValue = (current*100)/end;
let speed = 40;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${current}`;
  progressBar.style.background = `conic-gradient(
      #1E6DE2 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue >= progressEndValue) {
    clearInterval(progress);
  }
}, speed);

// Temp progress
let progressBar_temp = document.querySelector(".circular-progress-temp");
let valueContainer_temp = document.querySelector(".value-container-temp");

let current_temp = 79.5;
let end_temp = 100;

let progressValue_temp = 0;
let progressEndValue_temp = (current_temp*100)/end_temp;

let progress_temp = setInterval(() => {
  progressValue_temp++;
  valueContainer_temp.textContent = `${current_temp}`;
  progressBar_temp.style.background = `conic-gradient(
      #1EE23E ${progressValue_temp * 3.6}deg,
      #cadcff ${progressValue_temp * 3.6}deg
  )`;
  if (progressValue_temp >= progressEndValue_temp) {
    clearInterval(progress_temp);
  }
}, speed);

// pump progress
let progressBar_pump = document.querySelector(".circular-progress-pump");
let valueContainer_pump = document.querySelector(".value-container-pump");

let current_pump = 12.3;
let end_pump = 20;

let progressValue_pump = 0;
let progressEndValue_pump = (current_pump*100)/end_pump;

let progress_pump = setInterval(() => {
  progressValue_pump++;
  valueContainer_pump.textContent = `${current_pump}`;
  progressBar_pump.style.background = `conic-gradient(
      #E2651E ${progressValue_pump * 3.6}deg,
      #cadcff ${progressValue_pump * 3.6}deg
  )`;
  if (progressValue_pump >= progressEndValue_pump) {
    clearInterval(progress_pump);
  }
}, speed);

// syringe progress
let progressBar_sy = document.querySelector(".circular-progress-sy");
let valueContainer_sy = document.querySelector(".value-container-sy");

let current_sy = 99.8;
let end_sy = 150;

let progressValue_sy = 0;
let progressEndValue_sy = (current_sy*100)/end_sy;

let progress_sy = setInterval(() => {
  progressValue_sy++;
  valueContainer_sy.textContent = `${current_sy}`;
  progressBar_sy.style.background = `conic-gradient(
      #D700B4 ${progressValue_sy * 3.6}deg,
      #cadcff ${progressValue_sy * 3.6}deg
  )`;
  if (progressValue_sy >= progressEndValue_sy) {
    clearInterval(progress_sy);
  }
}, speed);