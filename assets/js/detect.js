const API_KEY = '4f51edd867fa8ce3fbcd290491813009 :https://beta.publishers.adsterra.com/api-token'
const IP_URL = `https://beta.publishers.adsterra.com/api-token`
const LOC_URL = `https://beta.publishers.adsterra.com/api-token?apiKey=${API_KEY}&ip=107.172.76.139`

function getRealLocation() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
}

async function fetchJson(url) {
    return await (await fetch(url)).json()
}

async function getSimulatedLocation() {
    const ip = (await fetchJson(IP_URL)).ip
    return (await fetchJson(LOC_URL + ip)).time_zone.name
}

async function detectVPN() {
    const real = getRealLocation()
    const simulated = await getSimulatedLocation()
    return {
        result: real == simulated,
        real,
        simulated
    }
}
