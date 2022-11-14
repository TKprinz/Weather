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

} 

getGeo();

