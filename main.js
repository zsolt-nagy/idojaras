const apiKey = "81968ba6230fa88196a89ff1cb735c7a";


const fetchWeather = city => {

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
                + city
                + '&units=metric&appid='
                + apiKey;

    fetch(API_URL)
        .then( response => response.json() )
        .then( data => displayWeather(data) )
};


let displayWeather = data => {

    const { name } = data;
    const { icon } = data.weather[0];
    const { description } = data.weather[0];
    const { temp } = data.main;
    const { humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name, icon, description, temp, humidity, speed);

    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + ' &deg';
    document.querySelector(".humidity").innerHTML = 'Humidity: ' + humidity + ' %';
    document.querySelector(".wind").innerHTML = 'Wind speed: ' + speed + ' km/h';

    document.querySelector(".weather").classList.remove("js-weather-visibility");
}


function search(event) {
    event.preventDefault();
    let search_value = document.querySelector(".search-bar").value;
    fetchWeather(search_value);
}

document.querySelector(".js-form").addEventListener('submit', search);
