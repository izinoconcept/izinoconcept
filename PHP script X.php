<?php

// Proxy settings

$proxyHost = ‘proxy.example.com’;

$proxyPort = 8080;

$proxyUsername = ‘username’; // If your proxy requires authentication

$proxyPassword = ‘password’; // If your proxy requires authentication

// Target URL

$url = ‘https://www.example.com’;

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