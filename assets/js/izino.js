const API_KEY = 'e546d297d6b841fd869cad35aadd10dc:https://ipgeolocation.io'
const IP_URL = `https://api.ipgeolocation.io/getip`
const LOC_URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=`

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


const target = document.getElementById('target')

async function runDetect() {
    let result, real, simulated
    try {
        res = await detectVPN()
        result = res.result
        real = res.real
        simulated = res.simulated
    }
    catch {
        target.innerHTML = 'Failed to request simulated location!<br>'
        return
    }

    if (result) {
        target.innerHTML = `
            VPN detected!<br>
            <b>Real location:</b> ${real}<br>
            <b>Simulated location:</b> ${simulated}<br>
        `
    }
    else {
        target.innerHTML = `
            VPN not detected.<br>
            <b>Location:</b> ${real}<br>
        `
    }
}

target.innerText = 'Detecting...'
runDetect()
