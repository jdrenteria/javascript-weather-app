let appId = 'f6046f488dac61b61e6dc48c6c5cb236';
let units = 'imperial';
let searchMethod;

function searchWeather(searchTerm){
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result =>{
        return result.json();
    }).then(result =>{
        init(result);
    })
}
