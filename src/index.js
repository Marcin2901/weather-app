// Api do pogody
// fetch("https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=82b8725a7a19404f8ee8ef52f88f69b7")
//     .then(resp => resp.json())
//     .then(data => console.log(data.name));



// API KEY: 82b8725a7a19404f8ee8ef52f88f69b7

const searchWeatcherBtn = document.getElementById('searchWeatcherBtn');
const weatherForm = document.querySelector('.weather__form');
const weatherSection = document.querySelector('.weather');
// const cityNameInput = document.getElementById('cityName');




weatherForm.addEventListener('submit', (event) => {
        event.preventDefault();
   
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target[0].value}&units=metric&appid=82b8725a7a19404f8ee8ef52f88f69b7`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            let cityWeather = {
                cityNamme : data.name,
                weatherTemp : data.main.temp + "°C",
                weatherDesc : data.weather[0].description,
                weatherIconUrl: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            }
            console.log(cityWeather)

            const weatherContent = document.createElement('div');
            weatherContent.classList.add('weather-content')
            weatherContent.innerHTML = `
                <div>
                    <h2>${cityWeather.cityNamme}</h2>
                    <p>${cityWeather.weatherDesc}</p>
                    <p class="temp-para">${cityWeather.weatherTemp}</p>
                </div>
                <img src="${cityWeather.weatherIconUrl}" alt="weather-icon">
            `
            const returnBtn = document.createElement('button')
            returnBtn.classList.add('return-btn');
            returnBtn.innerText = "Return"
            weatherSection.children[0].style.display = "none";
            weatherSection.appendChild(weatherContent);
            weatherSection.appendChild(returnBtn);

            returnBtn.addEventListener('click', () => {
                // weatherSection.children[1].style.display = "none";
                weatherSection.removeChild(weatherContent);
                weatherSection.removeChild(returnBtn);
                weatherForm.style.display = "flex";
                // returnBtn.style.display = "none";
            })




        });


})

