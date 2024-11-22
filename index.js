const clockElement = document.querySelector("#clock");

myTimer();

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  clockElement.innerHTML = d.toLocaleTimeString();
} 