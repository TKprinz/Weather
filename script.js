let city = document.getElementById("rubrik");  // Hämta från HTML 
let temperatur = document.getElementById("temperatur"); // Hämta från HTML
const apiKey = '65f31d84f93d4b2510768b7a3d37f107' // Skapa variabel för min API nyckel
const place = 'Marbella'
const geo_api_url = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=5&appid=${apiKey}`; // Anropar url för destination