var searchHistory = [];
//let lat = 41.308273;
//let lon = -72.927887;

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var forecastContainer = document.querySelector('#forecast');
var searchHistoryContainer = document.querySelector('#history');

// fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a99e70795dc597a36ffb255b32f8faf1`, {
//     method: 'GET',
//     credentials: 'same-origin',
//     redirect: 'follow',
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });

function displaySearchHistory() {

}

console.log('restore from local storage')

//restored from local storage. displays searched cities.
var storedHistory = localStorage.getItem('search-history');
if (storedHistory) {
    searchHistory = JSON.parse(storedHistory);
}
displaySearchHistory();

function addCityToHistory(search) {

}

function displayTodayWeather(city, data)  {
let temp = data.main.temp;
let windspeed = data.wind.speed;
let humidity = data.main.humidity;
let date = data.dt_txt.split(' ')[0];
let weatherIconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
let description = data.weather[0].description;

let tempEl = document.getElementById("temp");
tempEl.textContent = `Temp:  ${temp}  F`;

let windEl = document.getElementById("wind");
windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;

let humidityEl = document.getElementById('humidity');
humidityEl.textContent = `Humidity: ${humidity} %`;

let cityDateIconEl = document.getElementById('place_date');
cityDateIconEl.textContent = `${city} ` + date;

let imageEl = document.createElement('img')
imageEl.setAttribute('src', weatherIconUrl);
imageEl.setAttribute('alt', description);
cityDateIconEl.append(imageEl);
}

function displayFiveDayWeather1 (city, data) {
let temp = data[8].main.temp;
let windspeed = data[8].wind.speed;
let humidity = data[8].main.humidity;
let date = data[8].dt_txt.split(' ')[0];
let weatherIconUrl = `https://openweathermap.org/img/w/${data[10].weather[0].icon}.png`;
let description = data[8].weather[0].description;

let tempEl = document.getElementById("temp1");
tempEl.textContent = `Temp:  ${temp}  F`;

let windEl = document.getElementById("wind1");
windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;

let humidityEl = document.getElementById('humidity1');
humidityEl.textContent = `Humidity: ${humidity} %`;

let dateEl = document.getElementById('date1');
dateEl.textContent = date;

let imageEl = document.getElementById('icon1')
imageEl.setAttribute('src', weatherIconUrl);
imageEl.setAttribute('alt', description);
// cityDateIconEl.append(imageEl);
}

function displayFiveDayWeather2 (city, data) {
    let temp = data[16].main.temp;
    let windspeed = data[16].wind.speed;
    let humidity = data[16].main.humidity;
    let date = data[16].dt_txt.split(' ')[0];
    let weatherIconUrl = `https://openweathermap.org/img/w/${data[16].weather[0].icon}.png`;
    let description = data[16].weather[0].description;
    
    let tempEl = document.getElementById("temp2");
    tempEl.textContent = `Temp:  ${temp}  F`;
    
    let windEl = document.getElementById("wind2");
    windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;
    
    let humidityEl = document.getElementById('humidity2');
    humidityEl.textContent = `Humidity: ${humidity} %`;
    
    let dateEl = document.getElementById('date2');
    dateEl.textContent = date;
    
    let imageEl = document.getElementById('icon2')
    imageEl.setAttribute('src', weatherIconUrl);
    imageEl.setAttribute('alt', description);
    // cityDateIconEl.append(imageEl);
    }
    
    function displayFiveDayWeather3 (city, data) {
        let temp = data[24].main.temp;
        let windspeed = data[24].wind.speed;
        let humidity = data[24].main.humidity;
        let date = data[24].dt_txt.split(' ')[0];
        let weatherIconUrl = `https://openweathermap.org/img/w/${data[24].weather[0].icon}.png`;
        let description = data[24].weather[0].description;
        
        let tempEl = document.getElementById("temp3");
        tempEl.textContent = `Temp:  ${temp}  F`;
        
        let windEl = document.getElementById("wind3");
        windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;
        
        let humidityEl = document.getElementById('humidity3');
        humidityEl.textContent = `Humidity: ${humidity} %`;
        
        let dateEl = document.getElementById('date3');
        dateEl.textContent = date;
        
        let imageEl = document.getElementById('icon3')
        imageEl.setAttribute('src', weatherIconUrl);
        imageEl.setAttribute('alt', description);
        // cityDateIconEl.append(imageEl);
        }
    
        function displayFiveDayWeather4 (city, data) {
            let temp = data[32].main.temp;
            let windspeed = data[32].wind.speed;
            let humidity = data[32].main.humidity;
            let date = data[32].dt_txt.split(' ')[0];
            let weatherIconUrl = `https://openweathermap.org/img/w/${data[32].weather[0].icon}.png`;
            let description = data[32].weather[0].description;
            
            let tempEl = document.getElementById("temp4");
            tempEl.textContent = `Temp:  ${temp}  F`;
            
            let windEl = document.getElementById("wind4");
            windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;
            
            let humidityEl = document.getElementById('humidity4');
            humidityEl.textContent = `Humidity: ${humidity} %`;
            
            let dateEl = document.getElementById('date4');
            dateEl.textContent = date;
            
            let imageEl = document.getElementById('icon4')
            imageEl.setAttribute('src', weatherIconUrl);
            imageEl.setAttribute('alt', description);
            // cityDateIconEl.append(imageEl);
            }

            function displayFiveDayWeather5 (city, data) {
                let temp = data[39].main.temp;
                let windspeed = data[39].wind.speed;
                let humidity = data[39].main.humidity;
                let date = data[39].dt_txt.split(' ')[0];
                let weatherIconUrl = `https://openweathermap.org/img/w/${data[39].weather[0].icon}.png`;
                let description = data[39].weather[0].description;
                
                let tempEl = document.getElementById("temp5");
                tempEl.textContent = `Temp:  ${temp}  F`;
                
                let windEl = document.getElementById("wind5");
                windEl.textContent = `Wind Speed:  ${windspeed}  MPH`;
                
                let humidityEl = document.getElementById('humidity5');
                humidityEl.textContent = `Humidity: ${humidity} %`;
                
                let dateEl = document.getElementById('date5');
                dateEl.textContent = date;
                
                let imageEl = document.getElementById('icon5')
                imageEl.setAttribute('src', weatherIconUrl);
                imageEl.setAttribute('alt', description);
                // cityDateIconEl.append(imageEl);
                }
        
    

function displayItems(city, data) {
    //to be done
    displayTodayWeather(city, data.list[0]);
    displayFiveDayWeather1(city, data.list);
    displayFiveDayWeather2(city, data.list);
    displayFiveDayWeather3(city, data.list);
    displayFiveDayWeather4(city, data.list);
    displayFiveDayWeather5(city, data.list);

}


function getWeather(data) {
    var { lat } = data;
    var { lon } = data;
    var city = data.name;

    let api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=a99e70795dc597a36ffb255b32f8faf1`;

    fetch(api)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {

            console.log('data = ', data)
            displayItems(city, data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getCoords(search) {
    console.log('in getCoords, search = ', search);
    var api = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=a99e70795dc597a36ffb255b32f8faf1`;

    fetch(api)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert('City not found');
            } else {
                console.log('data = ', data);
                addCityToHistory(search);
                getWeather(data[0]);
            }
        })
        .catch(function (err) {
            console.error(err);
        });
}

function processSearchHistoryClick(event) {
    if (!event.target.matches('.btn-history')) {
        return;
    }

    var btn = event.target;
    var search = btn.getAttribute('data-search');
    getCoords(search);
}

function processSearchFormSubmit(event) {
    console.log('in processSearchFormSubmit')
    if (!searchInput.value) {
        return;
    }

    event.preventDefault();
    var search = searchInput.value.trim();
    getCoords(search);
    searchInput.value = '';
}

searchForm.addEventListener('submit', processSearchFormSubmit);
searchHistoryContainer.addEventListener('click', processSearchHistoryClick);