/*querySelectors
/////////////////*/
const failCounterOutput = document.querySelector("#failCounter");
const showRandomWord = document.querySelector("#showRandomWord");
const secretRandom = document.querySelector("#secretRandom");
const keyboard = document.querySelector("#keyboard");
const result = document.querySelector("#result");
const newGameBtn = document.querySelector("#new-game");
/*///////////////////////////////////////////////////////*/

//Create Keyboard
///////////////////////
for (let i = 97; i <= 122; i++) {
  const keyBtn = document.createElement("button");
  const char = document.createTextNode(String.fromCharCode(i));
  keyBtn.appendChild(char);
  keyBtn.classList.add("keyboard-button");
  keyboard.appendChild(keyBtn);
}
///////////////////////////////////////////////////////////

/*///////////////////////////////////////////////////////*/

/*eventListener
/////////////////*/
keyboard.addEventListener("click", (e) => {
  if (e.target.innerText.length === 1) {
    letterWordCheck(e);
  }
});
newGameBtn.addEventListener("click", () => {
  location.reload();
});

/*///////////////////////////////////////////////////////*/
/*variables
/////////////////*/
const searchedWords = [
  "Computer",
  "Mouse",
  "Network",
  "Monitor",
  "Notebook",
  "Headset",
];
let failCounter = 0;
const word = getRandomInt().split("");
const guessedCounter = [];
/*///////////////////////////////////////////////////////*/

/*Functions
/////////////////*/
function getRandomInt() {
  return searchedWords[
    Math.floor(Math.random() * (searchedWords.length - 1 + 1))
  ];
}

function renderWord() {
  word.forEach((e) => {
    const createWordLi = document.createElement("li");
    createWordLi.classList.add("listElement", "show-element");
    const textNode = document.createTextNode(e);
    keyboard.addEventListener("click", (targetBtn) => {
      if (targetBtn.target.innerText.length === 1) {
        if (targetBtn.target.innerHTML === e.toLowerCase()) {
          createWordLi.classList.remove("show-element");
          guessedCounter.push(e);
        }
        if (guessedCounter.length === word.length) {
          const creatP = document.createElement("p");
          const resultText = document.createTextNode(
            "Congrats! You find the searched Word "
          );
          const newSpanEl = document.createElement("span");
          const resWord = document.createTextNode(word.join(""));
          newSpanEl.appendChild(resWord);
          newSpanEl.classList.add("solution-word", "right-word");

          creatP.appendChild(resultText);
          creatP.appendChild(newSpanEl);
          result.appendChild(creatP);
          keyboard.classList.add("opa");
        }
      }
    });
    createWordLi.appendChild(textNode);
    showRandomWord.appendChild(createWordLi);
    const createSecretLi = document.createElement("li");
    createSecretLi.classList.add("listElement", "secretList");
    secretRandom.appendChild(createSecretLi);
  });
}

function letterWordCheck(e) {
  const checkingWord = word.join("").toLowerCase().split("");
  e.target.setAttribute("disabled", "true");
  e.target.classList.add("opa");
  while (!checkingWord.includes(e.target.innerHTML)) {
    failCounter++;
    failCounterOutput.innerText = failCounter;
    if (failCounter === 10) {
      const creatP = document.createElement("p");
      const resultText = document.createTextNode(
        "You Loose. The searched Word was "
      );

      const newSpanEl = document.createElement("span");
      const resWord = document.createTextNode(word.join(""));
      newSpanEl.appendChild(resWord);
      newSpanEl.classList.add("solution-word");
      creatP.appendChild(resultText);
      creatP.appendChild(newSpanEl);
      result.appendChild(creatP);
      keyboard.classList.add("opa");
    }
    break;
  }
}

renderWord();
