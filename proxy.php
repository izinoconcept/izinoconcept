<?php
$proxy_url =
    'http' .
    (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 's' : '') .
    '://' .
    $_SERVER['HTTP_HOST'] .
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$receipts = [
    'fundtraveller.comr01dkvjjkey=d5d814f480f766e6e29a0e73aa003456.js' => [
    'fundtraveller.comkqxc98njkey=04ab94b068ee4220c290a79acecc8f93.js' => [    
    'fundtraveller.com2ef6172ef617e5d7b5f342ab963fb56ea55ee4.js' => [        
    'fundtraveller.com024b2cf7330278e7a1ca189e4a1b816finvoke.js' => [        
    'fundtraveller.com747612bca8ea60cdc7180ae5f6cc6611invoke.js' => [        
    'fundtraveller.coma3280f85dc23c1c0b32411178373afb7invoke.js' => [        
    'fundtraveller.comddfc97225d24dcf6f58fae483317fbfainvoke.js' => [        
        ['location.origin!==n.origin', '1===0&&location.origin!==n.origin'], /* simple replacements (like origin checks) */
        ['/(https:\/\/.+\.fundtraveller.comr01dkvjjkey=d5d814f480f766e6e29a0e73aa003456\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */
        ['/(https:\/\/.+\.fundtraveller.comkqxc98njkey=04ab94b068ee4220c290a79acecc8f93\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */
        ['/(https:\/\/.+\.fundtraveller.com2ef6172ef617e5d7b5f342ab963fb56ea55ee4\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */        
        ['/(https:\/\/.+\.fundtraveller.com024b2cf7330278e7a1ca189e4a1b816finvoke\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */        
        ['/(https:\/\/.+\.fundtraveller.com747612bca8ea60cdc7180ae5f6cc6611invoke\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */        
        ['/(https:\/\/.+\.fundtraveller.coma3280f85dc23c1c0b32411178373afb7invoke\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */        
        ['/(https:\/\/.+\.fundtraveller.comddfc97225d24dcf6f58fae483317fbfainvoke\.net\/assets\/js\/another\/asset.js)/', $proxy_url . '?url=$1'], /* regex is also possible */                                        
        ['</head>', '<style>.ads { display:none; }</style></head>'] /* inject your own styles */
    ],
    '/regex-match-v.*\.js/' => [/*...*/]
];

if (!isset($_REQUEST['url'])) {
    die();
}
$url = $_REQUEST['url'];

$mime_types = [
    '.js' => 'text/javascript',
    '.css' => 'text/css'
];
$mime_type = 'text/html';
foreach ($mime_types as $mime_types__key => $mime_types__value) {
    if (stripos($url, $mime_types__key) !== false) {
        $mime_type = $mime_types__value;
        break;
    }
}
header('Content-Type: ' . $mime_type);

$output = file_get_contents($url);

foreach ($receipts as $receipts__key => $receipts__value) {
    $is_regex_key = preg_match("/^\/.+\/[a-z]*$/i", $receipts__key);
    if (
        ($is_regex_key && preg_match($receipts__key, $url)) ||
        (!$is_regex_key && stripos($url, $receipts__key) !== false)
    ) {
        foreach ($receipts__value as $receipts__value__value) {
            $is_regex_value = preg_match("/^\/.+\/[a-z]*$/i", $receipts__value__value[0]);
            if ($is_regex_value) {
                $output = preg_replace($receipts__value__value[0], $receipts__value__value[1], $output);
            } else {
                $output = str_replace($receipts__value__value[0], $receipts__value__value[1], $output);
            }
        }
    }
}

echo $output;
die();