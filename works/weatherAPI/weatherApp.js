//init storage
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();

//init weather object
const weather = new Weather(weatherLocation.city);

//init ui
const ui = new UI();

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;

    //change
    weather.changeLocation(city);

    //set location in LS
    storage.setLocationData(city)

    //set in LS
    storage.setLocationData(city);

    //we call get weather again here
    getWeather();

    //close modal
    $('#locModal').modal('hide');
    
});

function getWeather(){
    weather.getWeather()
    .then(result => {
       ui.paint(result);
    })
    .catch(err => console.log(err));
}