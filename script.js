let appId = 'f6046f488dac61b61e6dc48c6c5cb236';
let units = 'imperial';
let searchMethod = 'zip';

function searchWeather(searchTerm){
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result =>{
        return result.json();
    }).then(result =>{
        init(result);
    })
}
function init(resultFromServer){
    console.log(resultFromServer);

}
//search button //
document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById("searchInput").value;
   
    if(searchTerm)
    searchWeather(searchTerm);
}

)
