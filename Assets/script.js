var cityEl = document.querySelector("#city");
var cities = [];
var weatherTodayEl = document.querySelector(".weatherToday");
var fivedayForecastEl = document.querySelector("#fivedayForecast");
var buttonHistoryEl = 
var apiKey? = 


// API
var getWeather = function (city) {
    get apiUrl = "" + city + ""
        fetch(apiUrl)
            .then(function (response) {
                response.json().then(function (data) {
                    displaysWeather(data, city);
            });
}


























/// Creating a weather dashboard with a 5-day forecast
//Step 1: Identify what is being asked
    // We want current and future conditions for a city added search history (localStorage)
    // We want to display the city name, the date, and icon representation of weather conidtions.
    // temperature, humidity, and wind speed
    // Display a 5 day forecast with the date, icon, weather conditions, temp, wind speed, and humidity
    // (EventListener) When I click a city, it displays the history of the city that i searched
//Step 2: what is provided
    // Wire Frame 
//Step 3: what needs to be done 
    // HTML 
        // Header 
        // A (side)menu 
            // Form - Input Build, Title,Button
            // Have a div for placing our seach history (list)
        // Container
            // 2 Children 
                // 1: City & Date (empty div = to add info)
                // 2: 5-Day Forecast (empty div = to add info)
    // CSS
        // CSS Reset 
        // CSS Framework or Manual do it yourself (!)
    // Script.JS
        // We want current and future conditions for a city added search history (localStorage)
        // We want to display the city name, the date, and icon representation of weather conidtions.
        // temperature, humidity, and wind speed
        // Display a 5 day forecast with the date, icon, weather conditions, temp, wind speed, and humidity
        // (EventListener) When I click a city, it displays the history of the city that i searched
//Step 4: Psuedo Code 
    // Global Variables
        // Var = store our list of cities // user input
// list for local storage in empty array

            //[Array]
// API
        // Var = to store our API
        // Var = Base API URL (Query Paramaters)(Concate Paramaters++)
    // Query Selectors 
        // Side Menu 
            // Input 
            // Search History 
        // Dynamic Generated: 1 for each children (City&Date/5-Day Forecasts)
    // Functions
        // Create functions that gets saved info from local storage (Var= store our list of cities)
        // Function that renders different cities [Array]
        // Create functions function that will retrieve info from API servers
            // 1 api call longitude
            // append search history list 
            // 1display weather 
            // api call for the date 
            // api call for icon 
            // 1 to get local storage
        // Create function that will handle the search input 
    // EventListener 
        // onClick call function that will handle search input
        
    