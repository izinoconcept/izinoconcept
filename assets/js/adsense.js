var adUnit = document.getElementsByClassName("section-below-title")[0];
var parentElement = adUnit.childNodes[0];

// Create script element
var script = document.createElement('script');
script.async = true;
script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
parentElement.appendChild(script);

// Create INS element
var ins = document.createElement('ins');
ins.className = "adsbygoogle";
ins.style = "display:inline-block;width:300px;height:250px;";
ins.setAttribute('data-ad-client', "ca-pub-4163326546433333");
ins.setAttribute('data-ad-slot', "6546433333");

parentElement.appendChild(ins);
(adsbygoogle = window.adsbygoogle || []).push({});