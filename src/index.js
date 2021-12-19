import { getAllElemsById, renderTagElem  } from "./renderDOMElems.js";
import { getWeatherByCity} from "./apiService.js";


class WeatherApp {
    constructor() {
        const viewElem = {};
        let cityName = "";
        this.initializeApp();
    }

    initializeApp = () => {
        this.conectDOMElems();
        this.setupEventListeners();
    }
    
    conectDOMElems = () => {
        const listOfIds = Array.from(document.querySelectorAll("[id]")).map(elem => elem.id);
        this.viewElem = getAllElemsById(listOfIds);
    }

    setupEventListeners = () => {
        this.viewElem.searchCityInput.addEventListener('keydown', this.setCurrentCityName);
        this.viewElem.searchWeatcherBtn.addEventListener('click', this.setCurrentCityName);
        this.viewElem.returnToSearchBtn.addEventListener('click', this.returnToSearch);
    }

    setCurrentCityName = () => {
        if(event.type === "click" || event.type === "Enter") {
             this.cityName = this.viewElem.searchCityInput.value;
             this.fetchAndDisplayWeather();
        }
    }

    returnToSearch = () => {
        this.fadeInOut();

        setTimeout(() => {
            this.switchView();
            this.fadeInOut();
        }, 500);
    }

    fadeInOut = () => {
        if(this.viewElem.weatherContainer.style.opacity == '1' || this.viewElem.weatherContainer.style.opacity == '') {
            this.viewElem.weatherContainer.style.opacity = 0;
        } else {
            this.viewElem.weatherContainer.style.opacity = '1';
        }
    }

    switchView = () => {
        if(this.viewElem.weatherSearchView.style.display !== "none") {
            this.viewElem.weatherSearchView.style.display = "none";
            this.viewElem.weatherForecastView.style.display = 'flex';
        } else {
            this.viewElem.weatherSearchView.style.display = "flex";
            this.viewElem.weatherForecastView.style.display = 'none';
        }
    }

    fetchAndDisplayWeather = () => {
        getWeatherByCity(this.cityName)
        .then(data => this.displayWeatherData(data))
                                       
    } 

   

}

new WeatherApp();
