// Connect to the OpenWeatherMap API
const API_KEY = "WEATHER_API_KEY_PLACEHOLDER"; 

// Get references to DOM elements
const getWeatherBtn = document.getElementById("get-weather-btn");
const locationDisplay = document.getElementById("location");
const cityInput = document.getElementById("city-input");
// Get references to DOM elements for displaying weather data
const weatherIcon = document.getElementById("weather-icon");
const weatherMain = document.getElementById("weather-main");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");

/**
 * Asynchronous function to fetch real-time weather data from OpenWeatherMap API
 */
async function getWeather(city) {
  try {
    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      alert("City not found. Please check the spelling!");
      return null;
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Network API Fetch Error:", err);
    alert("Connection error. Please try again later.");
  }
}

/**
 * Updates the weather display based on the fetched weather data
 */
async function showWeather(city) {
  const weather = await getWeather(city);
  if (!weather) return; // Exit if no weather data is returned

  // Extract the first weather condition from the weather data
  const weatherDetails = weather.weather?.[0];

  locationDisplay.textContent = `${weather.name}, ${weather.sys?.country ?? ""}`;

  // Update the weather icon based on the weather condition
  if (weatherDetails?.icon) {
    weatherIcon.src = `https://api.openweathermap.org/img/w/${weatherDetails.icon}@2x.png`;
    weatherIcon.classList.remove("hidden");
  } else {
    weatherIcon.classList.add("hidden");
  }

  // Update the weather details in the DOM
  weatherMain.textContent = weatherDetails?.description ?? "N/A";
  mainTemperature.textContent = weather.main?.temp
    ? Math.round(weather.main.temp)
    : "N/A";
  feelsLike.textContent = weather.main?.feels_like
    ? Math.round(weather.main.feels_like)
    : "N/A";
  humidity.textContent = weather.main?.humidity ?? "N/A";

  // Update the wind speed in the DOM
  windSpeed.textContent = weather.wind?.speed ?? "N/A";

  // Update the wind gust in the DOM
  windGust.textContent = weather.wind?.gust ?? "0";
}

// === INPUT VALIDATION AND SECURITY GUARD ===

/**
 * Validates and sanitizes the user city input against injections and illegal data formats
 * @param {string} input - Raw string values directly extracted from the textbox
 * @returns {string|null} Clean sanitized string payload or null if verification fails
 */
function validateCityInput(input) {
  let cleanInput = input.trim();

  // 1. Guard against empty string submissions
  if (cleanInput === "") {
    alert("Please enter a city name first!");
    return null;
  }

  // 2. Anti-injection filter: remove dangerous runtime syntax markers like < > / \ ' " ;
  cleanInput = cleanInput.replace(/[<>\/\\'"`;]/g, "");

  // 3. Regular Expression verifying the integrity of geographic names.
  // Allowed tokens: English alphabets (A-Z, a-z), Cyrillic alphabets, whitespaces, and dashes.
  // Numbers and typical computer punctuations are fully blocked.
  const cityPattern = /^[A-Za-zА-Яа-яЁё\s-]+$/;

  // Test the sanitized string against our security pattern layout
  if (!cityPattern.test(cleanInput)) {
    alert("Invalid city name! Numbers and special characters are not allowed.");
    return null;
  }

  return cleanInput;
}

// === INTERACTIVE EVENT HANDLERS ===

// Attach secure click interceptor to the main execution button
getWeatherBtn.addEventListener("click", () => {
  // Pass the raw textbox characters through our input security guard
  const validatedCity = validateCityInput(cityInput.value);

  // Terminate execution thread immediately if validation checks fail
  if (!validatedCity) {
    return;
  }

  // Forward clean data directly to the asynchronous layout rendering pipe
  showWeather(validatedCity);
});

// Trigger search execution when the user hits the physical Enter key inside the field
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getWeatherBtn.click(); // Programmatically mimic clicking the secured action button
  }
});
