# Inlämningsuppgift 2

Vädret - Rapport

För att starta projektet så behöver jag hämta ut IDna från HTML och behöver använda mig utav .getElementByID för att pricka mitt "target" sedan laddar jag hem min API nyckel från OpenWeather som gör det möjligt för mig att skapa APIn till min server från OpenWeather.

geo_api_url använder jag för att hämta ut min OpenWeather destination för att kunna länka ihop min server till informationen, därefter skapar jag en funktion med variabeln getGeo och där vill jag kunna få fram Marbella och temperaturen + om det är molning eller soligt bl.a.

Jag använder mig också utav fetch som gör det möjligt för mig att skicka ut en request där jag får svar från location i Marbella och gör en parsing. Varför jag använder .innerHTML är för att kunna få ut min kod till min visuella hemsida.

weather_apo_url gör det möjligt för mig att hitta APIn för vädret på min destination som jag sedan kommer lägga till destinationens latitude och longitude samt min API nyckel som behövs för att få behörighet till informationen. Därefter skapar jag en funktion med variabeln dataWeather som skickar begäran till OpenWeather så jag får fram den rätta temperaturen.

Och nu använder jag mig också utav fetch igen för att göra det möjligt för mig att skicka ut en request där jag för svar för aktuella temperatur i Marbella.

"celcius" variabeln gör så jag får ut temperaturen i Kelvin och då måste jag parseFloat, rikta in dataWeather.main.temp som jag kunde lista ut via konsolen som man får ut en lista med väder-status i Marbella.

celciusValue gör så jag får ut temperaturen utan decimaler, så jag enbart får tex. 24ºC. Det gör även så jag får ut temperaturen i Celcius istället för Kelvin.

temperatur.innerHTML = outputCelcius+'°C' + ' ' + statusWeather; är så jag får ut den nuvarande väderläget i Marbella, visuellt på min hemsida.
