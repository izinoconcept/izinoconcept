const API_KEY = '4f51edd867fa8ce3fbcd290491813009 :https://www.vpngate.net/en'
const IP_URL = `https://www.vpngate.net/en/getip`
const LOC_URL = `https://www.vpngate.net/en/ipgeo?apiKey=${API_KEY}&ip=`

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
