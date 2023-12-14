setInterval(getTime, 1000);
//digital Clock
const stunde = document.querySelector("#hours");
const minute = document.querySelector("#minutes");
const sekunde = document.querySelector("#seconds");

//analog Clock
const stundeAn = document.querySelector("#stundeAn");
const minuteAn = document.querySelector("#minuteAn");
const sekundeAn = document.querySelector("#sekundeAn");

function getTime() {
  const now = new Date();
  const hour = now.getHours() / 12;
  const minutes = now.getMinutes() / 60;
  const seconds = now.getSeconds() / 60;
  stunde.innerText = now.getHours();
  minute.innerText = now.getMinutes();
  sekunde.innerText = now.getSeconds();

  rotation(stundeAn, hour);
  rotation(sekundeAn, seconds);
  rotation(minuteAn, minutes);
}

function rotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

getTime();
