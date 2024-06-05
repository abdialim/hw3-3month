function searchWeather() {
    const cityInput = document.getElementById("cityInput").value.trim();
    
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=3e5e293cbfce4b2d8a4123445241405&q=${cityInput}`

    fetch(apiUrl)
        .then(response => { return response.json(); })
        .then(updateWeather)
        .catch(error => {
            console.error('Error', error);
        });
}

function updateWeather(data) {
    document.getElementById("tempo").innerText = data.current.temp_c + "°C";
    document.getElementById("wind_mph").innerText = "Wind Speed (mph): " + data.current.wind_mph;
    document.getElementById("localtime").innerText = data.location.localtime;
}
