// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "http://api.weatherstack.com/current?access_key=67391e0acc47cd32b35cf52fdcd165ee&query=" +
//     latitude +
//     "," +
//     longitude +
//     ".";

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather services!", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
//       );
//     }
//   });
// };

// module.exports = forecast;

// -----------------------------------------------------------------------------------same lang sa taas . ginawalang destructure

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=67391e0acc47cd32b35cf52fdcd165ee&query=" +
    latitude +
    "," +
    longitude +
    ".";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
