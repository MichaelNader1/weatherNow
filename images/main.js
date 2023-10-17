let search= document.getElementById("search")
let submit= document.getElementById("submit")
let allData=[]

const d = new Date();
let day = d.getDay();
console.log(day);


function getWeather(location){
    let myRequest =new XMLHttpRequest;
    myRequest.open("GET",`https://api.weatherapi.com/v1/current.json?key=8c9c55eedb354369b84122448230908&q=${location}`);
    myRequest.send();
    
    myRequest.addEventListener("readystatechange",function(){
        if(myRequest.readyState==4 && myRequest.status==200){
            console.log(myRequest.response)
            allData=JSON.parse(myRequest.response) 
            console.log(allData.location.localtime)
            display(allData)
            

        }
    })
    
}
submit.addEventListener("click",function(){
let x=search.value.toLowerCase()
getWeather(x.charAt(0));
})

function display(allData){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
cartona= `
<div class="forecast-container d-flex" id="forecast">
                
<div class="forecast main ">
    <div class="forecast-header d-flex justify-content-between align-items-center">
        <div class="day">${day}</div>
        <div class="history">9August</div>
    </div> 
    <div class="forecast-content d-flex flex-wrap justify-content-center align-items-center ">
        <div class="inner ">
            <div class="location">${allData.location.name}</div>
            <div class="degree f">${allData.location.lat}<sup>o</sup>C</div>
            <small>${allData.location.lon}<sup>o</sup></small>
            <div class="forecast-icon">
                <img src=${allData.current.condition.icon} alt="" width="48">
            </div>
        </div>
        <div class="additional mx-auto ">
            <div class="inner-additional mx-auto ">
                <span class="mx-1"><img src="https://routeweather.netlify.app/images/icon-umberella@2x.png" alt="" width="21" height="21">${allData.location.wind_mph}%</span>
                <span class="mx-1"><img src="https://routeweather.netlify.app/images/icon-wind@2x.png" alt="" width="23" height="21">18km/h</span>
                <span class="mx-1"><img src="https://routeweather.netlify.app/images/icon-compass@2x.png" alt="" width="21" height="21">East</span>
            </div>

            </div>
    </div>
    
</div>
<div class="forecast">
    <div class="forecast-header d-flex justify-content-between align-items-center forecast-header-h">
        <div class="day">Friday</div>
    </div> <!-- .forecast-header -->
    <div class="forecast-content d-flex justify-content-center align-items-center forecast-content-c">
        <div class="inner">
            <div class="forecast-icon">
                <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
            </div>
            <div class="degree">30.5<sup>o</sup>C</div>
            <small>24.6<sup>o</sup></small>
            <div class="custom">Cloudy</div>
        </div>

    </div>
</div>
<div class="forecast">
    <div class="forecast-header d-flex justify-content-between align-items-center">
        <div class="day">Saturday</div>
    </div> <!-- .forecast-header -->
    <div class="forecast-content d-flex justify-content-center align-items-center">
        <div class="inner">
            <div class="forecast-icon">
                <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">
            </div>
            <div class="degree">37.4<sup>o</sup>C</div>
            <small>27.4<sup>o</sup></small>
            <div class="custom">Rainy</div>
        </div>

    </div>
</div>

</div>
`
document.getElementById("demo").innerHTML=cartona;
}

