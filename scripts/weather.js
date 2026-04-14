let is_loading = false;
let error_message = "";
let weather_data = null;

const output_element = document.querySelector('#weather_output');

function renderWeather() {
    output_element.innerHTML = "";
    output_element.className = "";
    output_element.style.color = "";

    if (is_loading) {
        output_element.textContent = "Loading...";
        output_element.style.color = "gray";
        return;
    }

    if (error_message !== "") {
        output_element.textContent = error_message;
        output_element.style.color = "red";
        return;
    }

    if (weather_data !== null) {
        const period = weather_data.properties.periods[0];
        const temp = period.temperature;
        const forecast = period.shortForecast;

        // Added classes to your existing <div> structure
        output_element.innerHTML = `
            <div class="temp-display">${temp}&deg;</div>
            <div class="forecast-display">${forecast}</div>
        `;
        return;
    }
    output_element.textContent = "Weather data not available.";
}


async function getWeatherData() {
    is_loading = true;
    error_message = "";
    renderWeather();

    try {
        const response = await fetch('https://api.weather.gov/gridpoints/MSO/105,131/forecast');

        if (!response.ok) {
            throw new Error("Weather Service Error: " + response.status);
        }

        const data = await response.json();

        weather_data = data;

    } catch (error) {
        error_message = error.message;
    } finally {
        is_loading = false;
        renderWeather();
    }
}

getWeatherData();
