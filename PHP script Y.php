<?php

// Proxy settings

$proxyHost = ‘107.172.76.139’;

$proxyPort = 443;

$proxyUsername = ‘vpn’; // If your proxy requires authentication

$proxyPassword = ‘vpn’; // If your proxy requires authentication

// Target URL

$url = ‘https://www.vpngate.net/en/’;

// Proxy URL

$proxyUrl = “tcp://$proxyHost:$proxyPort”;

// Proxy authentication string

$auth = base64_encode(“$proxyUsername:$proxyPassword”);

// Stream context options

$contextOptions = array(

‘http’ => array(

‘proxy’ => $proxyUrl,

‘request_fulluri’ => true,

‘header’ => “Proxy-Authorization: Basic $auth”

),

‘ssl’ => array(

‘verify_peer’ => false, // Depending on your needs, you may need to adjust SSL verification settings

‘verify_peer_name’ => false

)

);

// Create stream context

$context = stream_context_create($contextOptions);

// Make request using file_get_contents() with stream context

$response = file_get_contents($url, false, $context);

// Check for errors

if ($response === false) {

echo ‘Failed to retrieve data from URL’;

} else {

// Output the response

echo $response;

}

?>