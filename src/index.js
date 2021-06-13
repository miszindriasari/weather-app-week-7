function displayTemperature(response) {
  console.log(response.data.main.humidity);
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "92adabc89647e51a6b2ac793bd82529e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
