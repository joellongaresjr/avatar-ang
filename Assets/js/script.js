// Assigning the API key
var APIKey = "7497efd9974dcf73e4af19d08348e856";
var currentWeatherContainer = document.querySelector(".weather-container");
var fivedayWeatherContainer = document.querySelector(".fiveday-container");
var searchButton = document.querySelector("#search-button");

// Add a click event listener to the search button; this allows us to retrieve the value entered in the search input, and
// calls "getCoordinates" function  to fetch weather information for the user city input.
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  var searchInput = document.querySelector("#search-input");
  var city = searchInput.value;
  getCoordinates(city);
});

// we use a asynchronous function that fetches weather data from the OpenweatherMap Api for a given city. 
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
// We make sure that the block catches any error when we try to fetch weather data from the OpenweatherMap Api.( to prevent any code from breaking)
}
// The async function below take (lat, lon) as parameters thus fetches us a five-day forecast data form the OpenweatherMap Api. 
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
// the function below is responsible for rendering the current weather information for the user.
function currentWeather(weatherData) {
  var currentDate = dayjs.unix(weatherData.dt).format("MM/DD/YYYY");
  /// This code below is responsible for updating content of the element "current-weather-container" on the page with the current weather information. 
  // this allows us to dynamically generates html content to display the informaiton to complete the assignment. 
  //(weather icon temp, wind speed, humidity,)
  currentWeatherContainer.innerHTML = `   
  <h2>${weatherData.name} ${currentDate}</h2>
    <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">
    <p>${weatherData.main.temp} F</p>
    <p>${weatherData.wind.speed} MPH</p>
    <p>${weatherData.main.humidity} %</p>`;

};

// Similarly to the functions above, we enable data as input and dynamically generate html content to display ->
// the five day forecast information for the user.
function fiveDayWeatherContent(fiveDayData) {
    var days = [];
  
    for (var i = 1; i < fiveDayData.list.length; i++) {
      if (fiveDayData.list[i].dt_txt.includes("12:00:00")) {
        days.push(i);
      }
    }
  
    var fivedayWeatherContainer = document.querySelector(".fiveday-container");
    fivedayWeatherContainer.innerHTML = ""; 
  // this code below is reponsible for a loop through the day array, which represent forecast data around noon (12PM)
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

// trickiest part of the assignment!!
// function serves to get the coordinates of the user's city input for the current weather & five day forecast.
async function getCoordinates(cityName) {
// it calls for the displayweather function to fetch the weather and extract lat and lon values.
  var data = await displayWeather(cityName);
  var lat = data.coord.lat;
  var lon = data.coord.lon;
  console.log(data);
  currentWeather(data);
  var fiveDayData = await displayFiveDayWeather(lat, lon);
  fiveDayWeatherContent(fiveDayData);
};

