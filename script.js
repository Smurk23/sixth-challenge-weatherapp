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

function getWeather(data) {

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