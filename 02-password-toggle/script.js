const pw = document.querySelector("#pwInput");
const btnPw = document.querySelector("#showPassword");

function changeInput() {
  if (pw.type === "password") {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
}

btnPw.addEventListener("click", changeInput);
