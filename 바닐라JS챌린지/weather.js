const APIKEY = "6dc6e2c629a42383b7c91c31a0cb5689";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((reposne) => reposne.json())
    .then((data) => {
      const weather = document.querySelector("#weather p:first-child");
      const city = document.querySelector("#weather p:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for yo.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
