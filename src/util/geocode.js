
const request = require('request');

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoic2FlZWQyNzI5NSIsImEiOiJja3B1dHpoMzEwMnljMnZwMnhtZGRzeGZhIn0.eh97484HI-4pUr-utplNmg&language=en&limit=1";
    request({ url, json: true, }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else {
            if (body.features.length == 0) {
                callback('Unable to find location', undefined)
            }
            else {
                const latitude = body.features[0].center[1];
                const longitude = body.features[0].center[0];
                const location = body.features[0].place_name;
                callback(undefined, {
                    latitude: latitude,
                    longitude: longitude,
                    location: location
                })

            }
        }
    })
}



module.exports = geocode;