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
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
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
}

async function getCoordinates(cityName) {
  var data = await displayWeather(cityName);
  console.log(data);
  currentWeather(data);
}













































  
// //             var cityDisplay
// //             //     var cityName = data.name;
// //             //     var icon = data.weather[0].icon;
// //             //     var humidity = data.main.humidity;
// //             //     var temp = data.main.temp;
// //             //     var windSpeed = data.wind.speed;
// //             //     var uvIndex = data.uvi;
// //             //     var lat = data.coord.lat;
// //             //     var lon = data.coord.lon;
// //             // console.log(data);
// //         });
// //         // }
// // };
// // /// Creating a weather dashboard with a 5-day forecast
// //Step 1: Identify what is being asked
//     // We want current and future conditions for a city added search history (localStorage)
//     // We want to display the city name, the date, and icon representation of weather conidtions.
//     // temperature, humidity, and wind speed
//     // Display a 5 day forecast with the date, icon, weather conditions, temp, wind speed, and humidity
//     // (EventListener) When I click a city, it displays the history of the city that i searched
// //Step 2: what is provided
//     // Wire Frame
// //Step 3: what needs to be done
//     // HTML
//         // Header
//         // A (side)menu
//             // Form - Input Build,Button
//             // Have a div for placing our seach history (list)
//         // Container
//             // 2 Children
//                 // 1: City & Date (empty div = to add info)
//                 // 2: 5-Day Forecast (empty div = to add info)
//     // CSS
//         // CSS Reset
//         // CSS Framework or Manual do it yourself (!)
//     // Script.JS
//         // We want current and future conditions for a city added search history (localStorage)
//         // We want to display the city name, the date, and icon representation of weather conidtions.
//         // temperature, humidity, and wind speed
//         // Display a 5 day forecast with the date, icon, weather conditions, temp, wind speed, and humidity
//         // (EventListener) When I click a city, it displays the history of the city that i searched
// //Step 4: Psuedo Code
//     // Global Variables
//         // Var = store our list of cities // user input
// // list for local storage in empty array

//             //[Array]
// // API
//         // Var = to store our API
//         // Var = Base API URL (Query Paramaters)(Concate Paramaters++)
//     // Query Selectors
//         // Side Menu
//             // Input
//             // Search History
//         // Dynamic Generated: 1 for each children (City&Date/5-Day Forecasts)
//     // Functions
//         // Create functions that gets saved info from local storage (Var= store our list of cities)
//         // Function that renders different cities [Array]
//         // Create functions function that will retrieve info from API servers
//             // 1 api call longitude
//             // append search history list
//             // 1display weather
//             // api call for the date
//             // api call for icon
//             // 1 to get local storage
//         // Create function that will handle the search input
//     // EventListener
//         // onClick call function that will handle search input
