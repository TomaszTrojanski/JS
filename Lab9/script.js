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

function getWeatherData(){
    let weather = {};
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=57cc083a05fa6a2008dc652336e25912')
		.then((response) => response.json())
		.then(data => {
			weather.city = data['name'];
			weather.desc = data['weather'][0]['description'];
			weather.temp = Math.round(data['main']['temp']);
			weather.image = data['weather'][0]['icon'];
			weather.wind = data['wind']['speed'];
			weather.pressure = data['main']['pressure'];		
			forecasts.push(weather);	
			localStorage.setItem(lsWeatherKey, JSON.stringify(forecasts));
		})
		.then(() => displayForecast(weather))
		.catch(err => console.log(err));
}