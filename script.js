let weather = {
    apiKey: "e89a1ba9d6a20812f1d834480b38f6c0",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            +"&appid=" 
            + this.apiKey + "&units=metric"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity; + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener('click', function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keyup', function() {
    weather.search()
});

weather.fetchWeather("Toronto");