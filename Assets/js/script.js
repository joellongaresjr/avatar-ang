var APIKey = "7497efd9974dcf73e4af19d08348e856";
var currentWeatherContainer = document.querySelector(".weather-container");
var fivedayWeatherContainer = document.querySelector(".fiveday-container");
var searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  var searchInput = document.querySelector("#search-input");
  var city = searchInput.value;
  getCoordinates(city);
});

async function displayWeather(cityName) {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=imperial`;
  try {
    const response = await fetch(queryURL);
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayFiveDayWeather(lat, lon) {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}&units=imperial`;
    try {
      const response = await fetch(queryURL);
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

function currentWeather(weatherData) {
  var currentDate = dayjs.unix(weatherData.dt).format("MM/DD/YYYY");
  currentWeatherContainer.innerHTML = `
    <h2>${weatherData.name} ${currentDate}</h2>
    <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">
    <p>${weatherData.main.temp} F</p>
    <p>${weatherData.wind.speed} MPH</p>
    <p>${weatherData.main.humidity} %</p>`;

};

function fiveDayWeatherContent(fiveDayData) {
    var days = [];
  
    for (var i = 1; i < fiveDayData.list.length; i++) {
      if (fiveDayData.list[i].dt_txt.includes("12:00:00")) {
        days.push(i);
      }
    }
  
    var fivedayWeatherContainer = document.querySelector(".fiveday-container");
    fivedayWeatherContainer.innerHTML = ""; 
  
    for (var i = 0; i < days.length; i++) {
      fivedayWeatherContainer.innerHTML += `
        <section id=${days[i]}>
          <h3>${dayjs.unix(fiveDayData.list[days[i]].dt).format("MM/DD/YYYY")}</h3>
          <img src="https://openweathermap.org/img/wn/${fiveDayData.list[days[i]].weather[0].icon}.png">
          <p>Temp: ${fiveDayData.list[days[i]].main.temp} F</p>
          <p>Wind: ${fiveDayData.list[days[i]].wind.speed} MPH</p>
          <p>Humidity: ${fiveDayData.list[days[i]].main.humidity} %</p>
        </section>`;
    }
  }


async function getCoordinates(cityName) {
  var data = await displayWeather(cityName);
  var lat = data.coord.lat;
  var lon = data.coord.lon;
  console.log(data);
  currentWeather(data);
  var fiveDayData = await displayFiveDayWeather(lat, lon);
  fiveDayWeatherContent(fiveDayData);
};

