const request = require('request');
const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=85ab25571014fd34ca0d85709789522c&query=" + encodeURIComponent(latitude)  + "," +  encodeURIComponent(longitude) + "&units=f";
    request({  url, json: true, }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else {
            if (body.error) {
                callback('Unable to find location', undefined)
            }
            else {
                callback(undefined, body.current.weather_descriptions[0]
                    + ". It is currently " +
                   body.current.temperature +
                    " degress out. this is a " +
                    body.current.precip +
                    "% chance of rain.")
            }
        }
    })
}

module.exports = forecast;


