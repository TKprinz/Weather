const city = document.getElementById("rubrik");  // Hämta stad från element med id rubrik 
const temperatur = document.getElementById("temperatur"); // Hämta temperatur från element med id temperatur
const apiKey = '65f31d84f93d4b2510768b7a3d37f107' // Personliga nyckeln från OpenWeather
const place = 'Marbella'
const geo_api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`; // Bygger ihop url för anrop

async function getGeo() { // Skapar funktion för att kunna hämta destination och för att hämta nuvarande temeperatur i Marbella
 
    // Gör ett API-samtal (begäran)
    // och får svaret tillbaka
    const response = await fetch(geo_api_url);

    // Parsing till JSON-format
    const dataGeo = await response.json(); 
    const stad = dataGeo[0].name;
    city.innerHTML = `The local weather in ${stad}`; // Skriver ut på sidan vad som ska visas + länkat in variabeln

    const lat = dataGeo[0].lat;
    const lon = dataGeo[0].lon;
    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // Gör ett API-samtal (begäran)
    // och får svaret tillbaka
    const response_ = await fetch(weather_api_url);

    // Parsing till JSON-format
    const dataWeather = await response_.json();
    const celcius = (parseFloat(dataWeather.main.temp) - 273.15); // Använder Kelvin för att räkna ut temperaturen i Celcius
    const celciusValue = parseFloat(celcius.toFixed(0)); // Använder mig utav fixed för att slippa decimalerna
    const statusWeather = dataWeather.weather[0].description; 
    temperatur.innerHTML = celciusValue +'°C' + ' ' + statusWeather;
    
} 

getGeo();

