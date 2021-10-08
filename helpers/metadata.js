const axios = require('axios');

async function getUniqueUsers() {
    let response = await axios.get('https://data.vatsim.net/v3/vatsim-data.json');
    let data = response.data;
    let uniqueUsers = data.general.unique_users;
    return uniqueUsers;
}

module.exports = { getUniqueUsers }