
const api = "a27c222102589bcb8c508b4ffb9a4e58"; // OpenWeatherMap API Key

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault();
        getWeather();
    });
});

function getWeather() {
    const city = document.getElementById("text").value.trim(); // Trim to remove extra spaces

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found!");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cel").innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById("hum").innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            alert(error.message);
            console.error(error);
        });
}