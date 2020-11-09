function currentdate(date) {
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = currentTime.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return `${days[dayIndex]} ${hours}:${minutes}`;
}
function displayWeather(response) {
  document.querySelector("#cityInput").innerHTML = response.data.main;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed
  );
  console.log(response.data);
}

function search(city) {
  let apiKey = "25ca3c40221589981906f4acf77d8a85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  search(city);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let cityElement = document.querySelector("#city");
let searchBar = document.querySelector("#cityChange");

searchBar.addEventListener("submit", handleSubmit);

dateElement.innerHTML = currentdate(currentTime);

search("Lewisville");
