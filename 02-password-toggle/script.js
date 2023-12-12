const pw = document.querySelector("#pwInput");
const btnPw = document.querySelector("#showPassword");

function changeInput() {
  if (pw.type === "password") {
    pw.type = "text";
  } else {
    pw.type = "password";
  }
  if (btnPw.innerText === "Show Password") {
    btnPw.innerText = "Hide Password";
  } else {
    btnPw.innerText = "Show Password";
  }
}

btnPw.addEventListener("click", changeInput);
