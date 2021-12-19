export const getWeatherByCity = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=82b8725a7a19404f8ee8ef52f88f69b7`)
            .then(resp => resp.json())
}