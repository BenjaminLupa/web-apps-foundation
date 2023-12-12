const clicker = document.querySelector("main"); //1
let counter = document.querySelector("#counter"); //1
const button = document.querySelector("button"); //1
const body = document.querySelector("body"); //1

/*
1) HTML Daten an JS übergeben. 
2) Counter soll um 1 hochzählen bei jedem Klick auf das Main Element.
3) Der counter soll auch bei Click auf main und Tastendruck erfolgen.
4) Beim Click des Reset Button soll der Counter auf 0 gesetzt werden.
5) Wenn der Counter hochzählt soll sich der Background um die Prozentzahl Counter in der Breite ändern.
6) Der Counter soll im Html dargestellt werden
7) Nach 100 soll der Counter sowie der Width auf 0 springen
*/

button.addEventListener(
  "click",
  () => (
    (counter.innerText = 0) /*4, 6*/,
    (clicker.style.width = counter.innerText + "%") //5
  )
);

body.addEventListener("keydown", function (event) {
  //3
  if (event.code === "Space" || event.code === "Enter") {
    count();
  }
});
clicker.addEventListener("click", count); //2

function count() {
  if (counter.innerText < 100) {
    /*7 */
    counter.innerText++; //2, 3, 6
    clicker.style.width = counter.innerText + "%"; //5
  } else {
    counter.innerText = 0; //7, 6
    clicker.style.width = counter.innerText + "%"; //7
  }
}
