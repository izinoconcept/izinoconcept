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
        target.index.html = 'Failed to request simulated location!<br>'
        return
    }

    if (result) {
        target.index.html = `
            VPN detected!<br>
            <b>Real location:</b> ${real}<br>
            <b>Simulated location:</b> ${simulated}<br>
        `
    }
    else {
        target.index.html = `
            VPN not detected.<br>
            <b>Location:</b> ${real}<br>
        `
    }
}

target.index.html = 'Detecting...'
runDetect()
