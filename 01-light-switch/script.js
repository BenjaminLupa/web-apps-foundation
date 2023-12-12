const btn = document.querySelector("button");
const body = document.querySelector("body");
const title = document.getElementsByTagName("title");

function buttonClick() {
  btn.classList.toggle("buttonBlack");
  body.classList.toggle("bodyBack");
  if (document.title !== "Good Night") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}

btn.addEventListener("click", buttonClick);
