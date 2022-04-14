class Weather {
    constructor(city){
        this.apiKey = '2ea9845d5b383256b897cd6098f4309c';
        this.city = city;
       
    }
    //Fetch weather from API
    async getWeather(){
        const response =  await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric" + "&appid=" + this.apiKey);
        const responseData = await response.json();
        return responseData

    }
    //change location
    changeLocation(city){
        this.city = city;
    }
}