let currentTime = document.querySelector("#current-time");

currentTime.innerHTML += new Date().toTimeString().substring(0, 8);
