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
        target.indexHTML = 'Failed to request simulated location!<br>'
        return
    }

    if (result) {
        target.indexHTML = `
            VPN detected!<br>
            <b>Real location:</b> ${real}<br>
            <b>Simulated location:</b> ${simulated}<br>
        `
    }
    else {
        target.indexHTML = `
            VPN not detected.<br>
            <b>Location:</b> ${real}<br>
        `
    }
}

target.indexText = 'Detecting...'
runDetect()
