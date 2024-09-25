let inputBar = document.getElementById("inputBar");
let searchBtn = document.getElementById("btn");
let cityText = document.getElementById("city");
let currTempText = document.getElementById("currentTemp");
let feelsLikeText = document.getElementById("feelsLike");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");
let logoEle = document.getElementById("logo");



searchBtn.addEventListener("click", function(){
    let query = inputBar.value;

    getDataApi(query);
})

async function getDataApi(query){
    let apiData = await fetch(`https://api.weatherapi.com/v1/current.json?key=bfa84933043f47d292c114803242509&q=${query}&aqi=no`);
    let data = await apiData.json();  
    updateUI(data);
}

function updateUI(data){
    let { name , country } = data.location  ; 
    let {temp_c , condition  } = data.current ; 
    let { feelslike_c , humidity ,wind_kph } = data.current ; 

    cityText.innerText = `${name} , ${country}`;
    currTempText.innerText = temp_c + " c";
    feelsLikeText.innerText = feelslike_c + " c";
    maxTemp.innerText = humidity;
    minTemp.innerText = wind_kph + "kph";
    logoEle.src = condition.icon ; 

}   

