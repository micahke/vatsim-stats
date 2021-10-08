# Vatsim Stats
This is a basic wrapper for the Vatsim API, which is not particularly well documented. Documentation and development for this package is still in progress but over 30 usefull endpoints are planned, giving you access to the full scope of data that the Vatsim platform has to offer.

[![npm version](https://badge.fury.io/js/vatsim-stats.svg)](https://badge.fury.io/js/vatsim-stats) [![install size](https://packagephobia.now.sh/badge?p=axios)](https://packagephobia.now.sh/result?p=vatsim_stats)

## Installation
From the project directory, run ``npm install vatsim-stats``. Make sure ``npm`` is already configured for your project

## Endpoints
### Metadata

#### Unique Users
This function returns an integer representing all unique users currently connected to the Vatsim network.
```javascript
const vatsim_stats = require('vatsim-stats');
vatsim_stats.metadata.getUniqueUsers().then((response) => {
    console.log(response);
})
```
### Airports

#### Get Full Airport MetaData
This function simply gets all metadata in JSON format including arrivals, departures, and amount of controllers.
```javascript
const vatsim_stats = require('vatsim-stats');
vatsim_stats.apt_data.getAllAiportData("KSFO").then((response) => {
    console.log(response); // json object
})
```
