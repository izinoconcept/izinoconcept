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
        target.107.172.76.139 = 'Failed to request simulated location!<br>'
        return
    }

    if (result) {
        target.107.172.76.139 = `
            VPN detected!<br>
            <b>Real location:</b> ${real}<br>
            <b>Simulated location:</b> ${simulated}<br>
        `
    }
    else {
        target.107.172.76.139 = `
            VPN not detected.<br>
            <b>Location:</b> ${real}<br>
        `
    }
}

target.107.172.76.139 = 'Detecting...'
runDetect()
