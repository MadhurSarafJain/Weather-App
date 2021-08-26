//selecet elements
const dayelement = document.querySelector(".day");
const dateelement = document.querySelector(".date");
const locelement = document.querySelector(".location");
const iconelement = document.querySelector(".weather-icon");
const tempelement = document.querySelector(".temp-value");
const descelement = document.querySelector(".temp-desc");
const humelement = document.querySelector(".humidity");
const windelement = document.querySelector(".wind");
const cloudelement = document.querySelector(".cloud");
//app data 

 //app consts and vars
 const kelvin = 273;
 //api key 
 const api = { 
     key : "49b133b104ecda6b826aeee8b78c8eb4",
     base : "http://api.openweathermap.org/data/2.5/"}


     const searchbox = document.querySelector(".searchbox");
     searchbox.addEventListener('keypress',setQuery) ;


     function setQuery(event){
         if(event.keyCode == 13){
             getResults(searchbox.value);
             console.log(searchbox.value);
         }
     }

     function getResults(query){
         fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
         .then(weather =>{
             return weather.json();
         })
        .then(displayWeather);

}

const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                //display weather to UI
function displayWeather(weather){
    console.log(weather);
    dayelement.innerHTML = `${days[d.getDay()]}`; 
    iconelement.innerHTML = ` <img class="city-icon" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">`;
    tempelement.innerHTML = `<p>${Math.floor(weather.main.temp)} °<span>C</span></p>`;
    descelement.innerHTML = `<p>${weather.weather[0].description}</p>`;
    locelement.innerHTML = `<p><i class="fa fa-map-marker"></i>  ${weather.name}, ${weather.sys.country}</p>`;
    humelement.innerHTML = `<p><li>Humidity  :   ${weather.main.humidity} %</p>`
    windelement.innerHTML = `<p><li>Wind Speed   : ${weather.wind.speed} m/s</p>`
    cloudelement.innerHTML = `<p><li>Cloud Coverage  : ${weather.clouds.all} %</p>`
}
