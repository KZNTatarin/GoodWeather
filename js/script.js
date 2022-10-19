function CityObject(image, temperature, feellike, description, country, localtime) {
    this.image = image;
    this.temperature = temperature;
    this.feellike = feellike;
    this.description = description;
    this.country = country;
    this.localtime = localtime;
}

const weather = async (city) => {
    translit(city)
    const respons = await fetch(`
    http://api.weatherstack.com/current?access_key=09a228f15cb18885fa6dc83aca03ced4&query=${city}`
    );
    const data = await respons.json();

    const cityData = new CityObject (
        data.current.weather_icons[0],
        data.current.temperature,
        data.current.feelslike,
        data.current.weather_descriptions[0],
        data.location.country,
        data.location.localtime,
    )

    setCityInfo(cityData);
} 

const getCityInfo = () => {
    let cityValue = document.querySelector('#city-value').value;
    weather(cityValue);
}

const setCityInfo = (objCity) => {
    let cityImg = document.querySelector('#weather-img');
    let cityTemperature = document.querySelector('#weather-temperature');
    let cityFeellike = document.querySelector('#weather-feellike');
    let cityDescription = document.querySelector('#weather-descriptions');
    let cityCountry = document.querySelector('#weather-country');
    let cityTime = document.querySelector('#weather-time');

    cityImg.src = objCity.image;
    cityTemperature.innerHTML = `Температура: ` + objCity.temperature + `°C`;
    cityFeellike.innerHTML = `Ощущается как: ` + objCity.feellike  + `°C`;
    cityDescription.innerHTML = `Состояние: `+ objCity.description;
    cityCountry.innerHTML = `Страна: ` + objCity.country;
    cityTime.innerHTML = `Дата и время: ` + objCity.localtime;
}


    console.log( translit('cloud') );
