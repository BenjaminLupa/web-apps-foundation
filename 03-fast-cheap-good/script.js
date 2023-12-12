let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");
let good = document.querySelector("#good");

cheap.addEventListener("change", clickCheck);
fast.addEventListener("change", clickCheck);
good.addEventListener("change", clickCheck);

let countClicks = 0;
let savedCheckbox;

function clickCheck(event) {
  if (event.target.checked === true) {
    countClicks++;
  } else {
    countClicks--;
  }

  if (countClicks === 3) {
    countClicks--;
    savedCheckbox.checked = false;
  }

  savedCheckbox = event.target;
}
