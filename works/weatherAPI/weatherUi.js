class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.country = document.getElementById('w-country');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
        this.direction = document.getElementById('w-direction');
    }
    paint(weather){
        //span deg
        let celsius = document.createElement('span');
        celsius.innerHTML = '&deg;';
        
        //span deg
        let celsiusFeelsLike = document.createElement('span');
        celsiusFeelsLike.innerHTML = '&deg;';

        //span percent
        let percent = document.createElement('span');
        percent.innerHTML = '&#37;';
        //-----------------------------------------------------
        //start filling
        this.location.textContent = weather.name;
        this.country.textContent = weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${Math.floor(weather.main.temp)}`;
        this.string.appendChild(celsius);
        

         //Icon selection.
         function iconSelection(){
                let img = '';
            if((weather.weather[0].id >= 200) && (weather.weather[0].id <= 232)){
                img = './weather_icons/thunderstorm.png';
            }else if((weather.weather[0].id >= 300) && (weather.weather[0].id <= 321)){
                img = './weather_icons/rain.png';
            }else if((weather.weather[0].id >= 500) && (weather.weather[0].id <= 531)){
                img = './weather_icons/heavy-rain.png';
            }else if((weather.weather[0].id >= 600) && (weather.weather[0].id <= 622)){
                img = './weather_icons/snow.png';
            }else if((weather.weather[0].id >= 701) && (weather.weather[0].id <= 781)){
                img = './weather_icons/fog.png';
            }else if(weather.weather[0].id == 800){
                img = './weather_icons/sun.png';
            }else if((weather.weather[0].id == 801) && (weather.weather[0].id == 802)){
                img = './weather_icons/sun-and-cloud.png';
            }else if(weather.weather[0].id == 803){
                img = './weather_icons/sun-and-cloud.png';
            }else{
                img = './weather_icons/cloud.png';
            }
            //console.log(weather.weather[0].id);
            return img;
        }
        this.icon.setAttribute('src', iconSelection());
        this.icon.style.width = '20%';
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.humidity.appendChild(percent);
        this.feelsLike.textContent = `Feels like: ${Math.floor(weather.main.feels_like)}`;
        this.feelsLike.appendChild(celsiusFeelsLike);
        this.wind.textContent = `Wind speed (km/h): ${weather.wind.speed}`;
        function windDeg(){
            var print="";   
            var inputDeg = weather.wind.deg;
            var arrDir = ["Northerly", "North Easterly", "Easterly", "South Easterly", "Southerly", "South Westerly", "Westerly", "North Westerly"];
            for( var i = 0; i < arrDir.length; i++){
                if(inputDeg > 337.5 || inputDeg <= 22.5){
                    print = arrDir[0];
                }else if(inputDeg > 22.5 && inputDeg <= 67.5){
                    print = arrDir[1];
                }else if(inputDeg > 67.5 && inputDeg <= 112.5){
                    print = arrDir[2];
                }else if(inputDeg > 112.5 && inputDeg <= 157.5){
                    print = arrDir[3];
                }else if(inputDeg > 157.5 && inputDeg <= 202.5){
                    print = arrDir[4];
                }else if(inputDeg > 202.5 && inputDeg <= 247.5){
                    print = arrDir[5];
                }else if(inputDeg > 247.5 && inputDeg <= 292.5){
                    print = arrDir[6];
                }else if(inputDeg > 292.5 && inputDeg <= 337.5){
                    print = arrDir[7];
                }else{
                    print = "Not available";
                }  
            }
            return print;
        }
        this.direction.textContent = `Wind Direction: ${windDeg()}`;

    }
    
}