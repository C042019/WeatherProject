function formatDate(timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days= ["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
]
let day = days[date.getDay()];
return `${day} ${hours}: ${minutes}`;

}



function displayTemperture(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  let feelTempElement = document.querySelector("#feeltemp");
  let cityElement = document.querySelector("#city");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  feelTempElement = Math.round(response.data.weather.main);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = response.data.wind.speed;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
function search(city) {
  let apiKey = "25ca3c40221589981906f4acf77d8a85";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperture);
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
  //axios.get(apiUrl).then(displayForecast);
}


function handleSubmit(event){
  event.preventDefault();
let cityInputElement = document.querySelector("#city-input");
search(cityInputElement.value);
}


let form = document.querySelector("#search-form")
form.addEventListener("submit", handleSubmit);

search("Lewisville");
