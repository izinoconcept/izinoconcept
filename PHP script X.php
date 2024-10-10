<?php

// Proxy settings

$proxyHost = ‘44.227.181.1’;

$proxyPort = 1080;

$proxyUsername = ‘vpn’; // If your proxy requires authentication

$proxyPassword = ‘vpn’; // If your proxy requires authentication

// Target URL

$url = ‘https://www.proxynova.com/’;

// Initialize cURL session

$ch = curl_init();

// Set the target URL

curl_setopt($ch, CURLOPT_URL, $url);

// Set cURL options for proxy

curl_setopt($ch, CURLOPT_PROXY, $proxyHost);

curl_setopt($ch, CURLOPT_PROXYPORT, $proxyPort);

// If proxy requires authentication

curl_setopt($ch, CURLOPT_PROXYUSERPWD, “$proxyUsername:$proxyPassword”);

// Set other options if needed

// For example:

// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the transfer as a string

// Execute the request

$response = curl_exec($ch);

// Check for errors

if ($response === false) {

echo ‘cURL error: ‘ . curl_error($ch);

}

// Close cURL session

curl_close($ch);

// Output the response

echo $response;

?>
