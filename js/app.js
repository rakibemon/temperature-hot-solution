const API_KEY = `04cc8152b129af08c8ab95583da0f5af`
const searchTemp = () => {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))

};
const setInnerText = (id, text) => {
    document.getElementById(id).innerHTML = text;
}
const displayTemp = (temp) => {
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`);
    setInnerText('city-name', temp.name)
    setInnerText('temp', temp.main.temp + '&deg;C')
    setInnerText('condition', temp.weather[0].main)
}