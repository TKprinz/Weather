let city = document.getElementById("rubrik");  // Hämta från HTML 
let temperatur = document.getElementById("temperatur"); // Hämta från HTML
const apiKey = '65f31d84f93d4b2510768b7a3d37f107' // Skapa variabel för min API nyckel
const place = 'Marbella'
const geo_api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`; // Anropar url för destination

async function getGeo() { // Skapar funktion för att kunna hämta destination och för att hämta nuvarande temeperatur i Marbella
 
    // Gör ett API-samtal (begäran)
    // och får svaret tillbaka
    const response = await fetch(geo_api_url);
 
    // Parsing till JSON-format
    const dataGeo = await response.json(); 
  

    let stad = dataGeo[0].name;
    city.innerHTML = `The local weather in ${stad}`; // Skriver ut på sidan vad som ska visas + länkat in variabeln

    let lat = dataGeo[0].lat;
    let lon = dataGeo[0].lon;

    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    // Gör ett API-samtal (begäran)
    // och får svaret tillbaka
    const response_ = await fetch(weather_api_url);
 
    // Parsing till JSON-format
    const dataWeather = await response_.json();
   

    let grader = dataWeather.main.temp; // Efter att jag får ut Objektet från dataWeather så gör det möjligt att få ut .main.temp för att få ut värdet.
    

    let celcius = (parseFloat(dataWeather.main.temp) - 273.15); // Använder Kelvin för att räkna ut temperaturen i Celcius

    let celciusValue = parseFloat(celcius.toFixed(0)); // Använder mig utav fixed för att slippa decimalerna
    

    let outputCelcius = celciusValue; // Hämtar celcius
    let statusWeather = dataWeather.weather[0].description; 
    temperatur.innerHTML = outputCelcius+'°C' + ' ' + statusWeather;

} 

getGeo();

