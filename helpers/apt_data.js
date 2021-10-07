const axios = require('axios');

async function getAllAiportData(icao) {
    var icao_f = icao.toUpperCase();
    let response = await axios.get('https://data.vatsim.net/v3/vatsim-data.json')
    let pilots = response.data.pilots;
    let controllers = response.data.controllers;
    var payload = {
        'departures': 0,
        'arrivals': 0,
        'controllers': 0
    }
    for (var i = 0; i < pilots.length; i++) {
        let pilot = pilots[i];
        let flightPlan = pilot.flight_plan;
        try {
            if (flightPlan.departure == icao_f) {
                payload['departures']++;
            }
            if (flightPlan.arrival == icao_f) {
                payload['arrivals']++;
            }
        } catch (error) {
            // error
        }
    }
    for (var i = 0; i < controllers.length; i++) {
        let controller = controllers[i];
        try {
            if (controller.callsign.toUpperCase().includes(icao_f)) {
                payload['controllers']++;
            }
        } catch (error) {
            // print error
        }
    }
    console.log(payload);
}

module.exports = { getAllAiportData }