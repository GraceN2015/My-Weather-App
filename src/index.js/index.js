
function refreshWeather(response){
    let temperatureElement=document.querySelector("temperature");
    let temperature=response.data.temperature.current;
    console.log(response.data.temperature.current);
    let cityElement=document.querySelector("city");

cityElement.innerHTML=response.data.city
    temperatureElement.innerHTML=Math.round(temperature);
}
function searchCity(city){
    let apiKey="b2a5adcct04b33178913oc335433";
    let apiUrl=
    "https://api.shecodes.io/weather/v1/current?query=${Johannesburg}&key=${apikey}
    sxios.get(apiUrl.).then(refreshWeather);
    console.log(apiUrl);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput=document.querySelector("search-form-input");
    let cityElement=document.querySelector("city");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
    function showUser(response){
        alert("the user name is ${response.data.name}");
    }

}
let searchFormElement=document.querySelector("search-form");
searchFormElement.addEventListerner("submit",handSearchSubmit);
