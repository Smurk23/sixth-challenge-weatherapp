
let lat = 41.308273;
let lon = -72.927887;

fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a99e70795dc597a36ffb255b32f8faf1`, {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
