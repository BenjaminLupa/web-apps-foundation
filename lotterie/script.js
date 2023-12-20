/* querySelectors
/////////////////// */
const newNumber = document.querySelector("#newNumber");
const reset = document.querySelector("#reset");
const numbers = document.querySelector("#numbers");
/*////////////////////////////////*/

/* variables
/////////////////////*/
let randomNumbers = [];

/*/////////////////////////////*/

/* clickElements
/////////////////////*/
reset.addEventListener("click", resetNums);
newNumber.addEventListener("click", addNewNum);
/*/////////////////////////////*/

/* functions
/////////////////////*/
function getRandomInt() {
  const min = 1;
  const max = 49;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetNums() {
  newNumber.removeAttribute("disabled");
  numbers.innerHTML = "";
  randomNumbers = [];
  reset.setAttribute("disabled", "true");
}

function addNewNum() {
  let newNum = getRandomInt();
  while (randomNumbers.includes(newNum)) {
    newNum = getRandomInt();
  }
  randomNumbers.push(newNum);
  randomNumbers.sort((a, b) => a - b);
  display();
  //button deaktiviert
  if (randomNumbers.length >= 6) {
    newNumber.setAttribute("disabled", "true");
    reset.removeAttribute("disabled");
    return;
  }
}

function display() {
  numbers.innerHTML = "";
  randomNumbers.forEach((e) => {
    const element = document.createElement("p");
    const text = document.createTextNode(e);
    element.appendChild(text);
    numbers.appendChild(element);
  });
}
/*/////////////////////////////*/
