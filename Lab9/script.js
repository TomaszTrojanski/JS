const lsWeatherKey = 'weatherApi';
const main = document.querySelector('main');
const rBtn = document.querySelector('.remove');
let addBtn = document.querySelector('.newWeather');
let input = document.querySelector('.city');

let forcasts = [];

getDataFromLocalStorage();
displayForecasts();
addBtn.addEventListener('click',function(){
    createWeatherNote();
});

remove.addEventListener('click', removeAllForecasts);