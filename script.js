const API_KEY = "80975280f1d945c9de85c7933557656c"; // replace with your key

const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // OpenWeather response structure
            cloud_pct.innerHTML = data.clouds.all;            // cloud %
            temp.innerHTML = data.main.temp;                 // current temp
            temp2.innerHTML = data.main.temp;                
            feels_like.innerHTML = data.main.feels_like;     
            humidity.innerHTML = data.main.humidity;         
            humidity2.innerHTML = data.main.humidity;        
            min_temp.innerHTML = data.main.temp_min;         
            max_temp.innerHTML = data.main.temp_max;         
            wind_speed.innerHTML = data.wind.speed;          
            wind_speed2.innerHTML = data.wind.speed;         
            wind_degrees.innerHTML = data.wind.deg;          

            // Convert sunrise/sunset to local time
            const formatTime = (unix) => new Date(unix * 1000).toLocaleTimeString();
            sunrise.innerHTML = formatTime(data.sys.sunrise);
            sunset.innerHTML = formatTime(data.sys.sunset);
        })
        .catch(err => console.error("Error fetching weather:", err));
};

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const cityInput = document.getElementById("city");

    if (submitBtn && cityInput) {
        submitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            getWeather(cityInput.value);
        });
    }
});

getWeather("Delhi");

