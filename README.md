# Vatsim Stats
This is a basic wrapper for the Vatsim API, which is not particularly well documented. Documentation and development for this package is still in progress but over 30 usefull endpoints are planned, giving you access to the full scope of data that the Vatsim platform has to offer.

## Installation
From the project directory, run ``npm install vatsim-stats``. Make sure ``npm`` is already configured for your project

## Endpoints
### Airports

#### Get Full Airport MetaData
This function simply gets all metadata in JSON format including arrivals, departures, and amount of controllers.
```
let data = vatsim-stats.apt_data.getAllAirportData(icao);
```
