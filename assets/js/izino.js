<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Whoer VPN provider</title>
<meta name="description" content="Secure VPN service provider, anonymous, fastest and cheap VPN service. You will never longer fear that your data may end up somewhere."/>
<link rel="stylesheet" href="/css/all.css?1475065198" type="text/css" async />
<script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/whoer.notpacked.js?1475080246"></script>
<script type="text/javascript" src="/js/form.js"></script>
<script type="text/javascript" src="/js/clear-form-fields.js"></script>
<link rel="stylesheet" href="/css/new.css?1455717124" type="text/css"/>
<script type="text/javascript" src="/js/jquery-ui.min.js?1.9.2"></script>
<script type="text/javascript" src="/js/ui.js"></script>
<script type="text/javascript" src="/js/vpn.js?1474985721"></script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic|Roboto+Condensed:400,400italic,700,700italic&amp;subset=latin,cyrillic-ext" rel="stylesheet" type="text/css">
<!--[if lt IE 8]><link rel="stylesheet" type="text/css" href="/css/ie.css" media="screen"/><![endif]-->
<!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="/css/ie8.css" media="screen"/><![endif]-->
  <link rel="alternate" hreflang="en" href="/vpn"/>
  <link rel="alternate" hreflang="ru" href="/ru/vpn"/>
  <link rel="alternate" hreflang="ar" href="/ar/vpn"/>
  <link rel="alternate" hreflang="fr" href="/fr/vpn"/>
  <link rel="alternate" hreflang="sp" href="/sp/vpn"/>
  <link rel="alternate" hreflang="zh" href="/zh/vpn"/>
<meta name="google-site-verification" content="YHL6nZBXxb24eVnvveP2ovvuZceK1o6FwgcHix3baWQ"/>
<meta name='yandex-verification' content='5fc0238c84978c1f'/>
</head>
<body>
<div id="wrapper">
<div class="w1">
<div class="w2 ">
<div class="w3">
<div id="header">
<strong class="logo"><a href="/">BannerBombProxy</a></strong>
<div class="header-column">
<div class="top-row">
<div class="select-lang">
<a id="first-lang" href="/vpn" class="lang">
<img src="/images/flags/en.png" style="width:16px;height:16px;" alt> English
</a>
<ul class="drop">
<li>
<a href="/ru/vpn" onclick="document.cookie='LANG=ru; path=/'">
<img src="/images/flags/ru.png" style="width:16px;height:16px;" alt> Russian
</a>
</li>
<li>
<a href="/ar/vpn" onclick="document.cookie='LANG=ar; path=/'">
<img src="/images/flags/ar.png" style="width:16px;height:16px;" alt> Arabic
</a>
</li>
<li>
<a href="/fr/vpn" onclick="document.cookie='LANG=fr; path=/'">
<img src="/images/flags/fr.png" style="width:16px;height:16px;" alt> French
</a>
</li>
<li>
<a href="/sp/vpn" onclick="document.cookie='LANG=sp; path=/'">
<img src="/images/flags/sp.png" style="width:16px;height:16px;" alt> Spanish
</a>
</li>
<li>
<a href="/zh/vpn" onclick="document.cookie='LANG=zh; path=/'">
<img src="/images/flags/zh.png" style="width:16px;height:16px;" alt> Chinese (Simplified)
</a>
</li>
</ul>
</div>
 
<a rel="nofollow" href="https://twitter.com/BannerBomb_1" class="btn-twitter" target="_blank">
<span>Follow us on Twitter</span></a>
</div>
<ul id="menu">
<li class=" menu-ico-01">
<a href="/myip">
<span class="visual">&nbsp;</span>
<span class="name">My IP</span>
</a>
</li>
<!--
<li class="active menu-ico-02">
<a href="/vpn">
<span class="visual">&nbsp;</span>
<span class="name">VPN</span>
</a>
</li>
-->
<li class=" menu-ico-03">
<a href="/">
<span class="visual">&nbsp;</span>
<span class="name">Web proxy</span>
</a>
</li>
<li class=" menu-ico-04">
<a href="/speedtest">
<span class="visual">&nbsp;</span>
<span class="name">Speed test</span>
</a>
</li>
<li class=" menu-ico-05">
<a href="/ping">
<span class="visual">&nbsp;</span>
<span class="name">Ping</span>
</a>
</li>
<li class=" menu-ico-06">
<a href="/checkwhois">
<span class="visual">&nbsp;</span>
<span class="name">Whois</span>
</a>
</li>
<li class="menu-ico-07">
<a href="/blog/articles">
<span class="visual">&nbsp;</span>
<span class="name">Articles</span>
</a>
</li>
</ul>
</div>
</div>
</div>
<div id="content">
 
 
<div class="promo-tabset2">
<div class="tab-control-holder">
<ul class="tab-control">
<li id="buy" class="active"><a class="vpn-promo-tab" href="#"><span>VPN </span></a></li>
<li id="faq"><a class="vpn-simple-tab" href="#"><span>FAQ</span></a></li>
<li id="download"><a class="vpn-simple-tab" href="#"><span>Download</span></a></li>
</ul>
<script>
  $( ".vpn-simple-tab" ).on( "click", function() {
    $(".vpn-promo-block").hide();
    $(".promo-tabset2 .tab-holder").css("width", "990px");
  });

  $( ".vpn-promo-tab" ).on( "click", function() {
    $(".vpn-promo-block").show();
    $(".promo-tabset2 .tab-holder").css("width", "660px");
  });
  	$(document).ready(function() {
	   

	   f=window.location.search;
	   fDate=f.split('=')
		//console.log(f.indexOf('download'));
	if( f.indexOf('download')!=-1) {
	$(".promo-tabset2 .tab-holder .tab:eq(2)").addClass('active');
	$(".promo-tabset2 .tab-holder").css("width", "990px");
	} else {
	if(f.indexOf('faq')!=-1) {
	$(".promo-tabset2 .tab-holder .tab:eq(1)").addClass('active');
	$(".promo-tabset2 .tab-holder").css("width", "990px");
	  } else {
    $(".promo-tabset2 .tab-holder .tab:first-child").addClass('active');
  $(".vpn-promo-block").show();
}
  }

	});
</script>
</div>
<div class="tab-holder">
<div class="tab active">
<div class="tab-gallery main playing">
<ul style="margin: 2px -8px">
<li class="active" style="display: list-item;  list-style:none !important;">
<div class="youtube-block" style="background: #eee">
<iframe width="658" height="370" src="https://www.youtube.com/embed/J-oNOEXNIrE?rel=0&showinfo=0#hqthumb=1" frameborder="0" allowfullscreen></iframe>
</div>
</li>
</ul>
</div>
</div>
<div class="tab">
<div class="additional">
<div id="tabs2">
<div class="question-heading">
<h1>Your questions</h1>
<ul class="question-control">
 
 
 
</ul>
</div>
<div id="tabs-1">
<ul class="question-list">
<li id="question-1">
<span class="title">How to choose the fastest server?</span>
<span class="ansver">As a rule, the fastest server is the one with the closest location to you. This is true in about 99.99% of cases. You can also choose a server where the sites/services/games you plan to use are hosted. <br> You can check the speed of any server with the help of Whoer SpeedTest . </span>
</li>
<li id="question-2">
<span class="title">Does a VPN affect the connection speed?</span>
<span class="ansver">As a rule, after a user connects to a VPN service, he or she does not notice any speed issues. However, it is better to connect to the geographically nearest server possible. It's important to remember that the farther the Whoer VPN server from you, the greater speed and ping losses.</span>
</li>
<li id="question-3">
<span class="title">Can you be trusted?</span>
<span class="ansver">In the modern world, trust is somewhat a luxury. We are partners with you, and partners speak about mutual benefit rather than trust. It is of vital importance for us that you trust us, but we have no right to ask your about that, though we have not given you any opportunity to doubt that since 2007. <br><br> We are not a typical service. We do not keep any logs indeed, but only if you allow us to trust you. Our goal is mutually beneficial cooperation, and we hope that it will prove to be productive for both of us.</span>
</li>
<li id="question-4">
<span class="title">Where are you located and registered?</span>
<span class="ansver">Our company is officially located and registered in Cyprus. All disputes are settled under the laws of the Cayman Islands in accordance with the User Agreement and common rules of the service.</span>
</li>
<li id="question-5">
<span class="title">Do you keep logs?</span>
<span class="ansver">Our service policy is absolute anonymity of our users. We don not keep any logs at all, including any connection statistics and any traffic sent by you. We do not ask you to trust us, but we try to trust you. On the other hand, in the case of your systematic violation of our rules or making troubles for other users, after receiving several complaints we will have to enable logging on an isolated server. If you continue to deliberately and systematically violate the service rules (like sending spam), we will block your account. This is why we strongly recommend and ask you to be friends and equal partners. Only by our mutual integrity to each other shall we be able to create a perfect atmosphere of understanding and trusted relationship.</span>
</li>
<li id="question-7">
<span class="title">What is the difference between a VPN and a proxy?</span>
<span class="ansver">The main difference between a proxy server and a VPN is that all the traffic sent through a proxy is not encrypted, and the proxy keeps the history of all connected clients. <br><br> It is important to note that a VPN does not prevent you from using any proxies after connecting in any way, but using alone proxy without a VPN is unwise and cannot guarantee you safety.</span>
</li>
<li id="question-8">
<span class="title">Will I be able to access all the sites blocked by my ISP?</span>
<span class="ansver">By connecting to us, you will be able to access all the pages blocked by your ISP or IT administrator, as well as game servers blocked by your geographical location. Besides, you will be able to switch servers across the world which guarantees you a full and free Internet access.</span>
</li>
<li id="question-9">
<span class="title">Are there any limitations on speed or traffic on your servers? If so, which are they?</span>
<span class="ansver">There are no limitations either on speed or traffic. The only limitations on our servers is the usage rules, and we strongly recommend you to obey them.</span>
</li>
<li id="question-11">
<span class="title">What is prohibited to do through the VPN?</span>
<span class="ansver">We prohibit on our servers: <ul><li>Spam (including on forums, blogs, guestbooks, etc.) and any activity that may lead to blacklisting of your IP (BlockList.de, SpamHaus, SpamCop etc.).</li><li>Hacking sites and searching for their vulnerabilities (including sql-inj and port scanning) .</li><li>Brute forcing passwords.</li><li>Creating phishing sites on any port.</li><li>Fraud, smear, lies, threats, slander.</li><li>Spreading malware (by any means).</li><li>Violation of the laws of the country of the used server location.</li></ul><p>Our server exists for your convenience, safety, and anonymity. We want to give you a permanent IP address in the Internet, but not a means for illegal activity against third parties.</span>
</li>
<li id="question-13">
<span class="title">On what devices can I use a VPN connection? </span>
<span class="ansver">You can use your VPN connection on both stationary devices (home desktops, work desktops, laptops) and mobile platforms (smartphones, tablets). Please see more details about setting up a connection in the "Settings" section under a respective operating system</span>
</li>
<li id="question-14">
<span class="title">Can I use the service on multiple devices simultaneously under one account?</span>
<span class="ansver">You can use up to three devices simultaneously under one account.</span>
</li>
<li id="question-15">
<span class="title">Can I download or share files through your servers via torrents?</span>
<span class="ansver">Torrents are allowed on servers in Netherlands, Russia, and Ukraine.</span>
</li>
</ul>
</div>
 
</div>
<form class="question-form" method="post" action="/domain/contacts">
<fieldset>
<strong class="title">Want to ask a question?</strong>
<div class="text-holder name">
<input id="text-01" name="name" type="text" class="text" placeholder="Your name..."/>
</div>
<div class="text-holder mail">
<input id="text-01" name="email" type="text" class="text" placeholder="Your email..."/>
</div>
<div class="text-holder area">
<input value="FAQ" type="hidden" name="subject"/>
<textarea name="msg" onfocus="if ($(this).val() == 'Your question...') { $(this).val('') }">Your question...</textarea>
</div>
<div class="btn-holder">
<input name="send" type="submit" class="submit" value="Send question"/>
</div>
</fieldset>
</form>
<script>
  $(document).ready(function(){
    $("#tabs2").tabs();
  });
</script>
</div>
</div>
<div class="tab">
<div class="additional">
<div id="tabs3">
 
<h1 class="download-title">Download VPN client</h1>
<ul class="download-list">
<li id="0">
<div class="top">
<div class="holder">
<div class="ico">
<img src="/images/ico-109.png" alt="image description" width="43" height="43">
</div>
<span class="sistem_name">Windows</span>
</div>
</div>
<div class="frame">
<span class="sistem_description">Windows 10, 8, 7,<br>Vista</span>
<a href="#tabs-1" data-download="/download/whoer.exe" class="btn-download btn-download-file"><span><em>Download</em></span></a>
</div>
</li>
<li id="2">
<div class="top">
<div class="holder">
<div class="ico">
<img src="/images/ico-110.png" alt="image description" width="43" height="43">
</div>
<span class="sistem_name">OS X</span>
</div>
</div>
<div class="frame">
<span class="sistem_description">10.6 Snow Leopard <br>or higher</span>
<a href="#tabs-3" data-download="/download/whoer.pkg" class="btn-download btn-download-file"><span><em>Download</em></span></a>
</div>
</li>
<li id="1">
<div class="top">
<div class="holder">
<div class="ico">
<img src="/images/ico-111.png" alt="image description" width="43" height="43">
</div>
<span class="sistem_name">Linux</span>
</div>
</div>
<div class="frame">
<span class="sistem_description">Ubuntu, CentOS, <br>Debian</span>
<a href="#tabs-2" class="btn-download"><span><em>Read</em></span></a>
</div>
</li>
<li id="3" style="display: none">
<div class="top">
<div class="holder">
<div class="ico">
<img src="/images/ico-112.png" alt="image description" width="43" height="43">
</div>
<span class="sistem_name">iOS</span>
</div>
</div>
<div class="frame">
<span class="sistem_description">iOS 6+ <br> &nbsp;</span>
<a href="#tabs-4" class="btn-download"><span><em>Read</em></span></a>
</div>
</li>
<li id="4" style="display: none">
<div class="top">
<div class="holder">
<div class="ico">
<img src="/images/ico-113.png" alt="image description" width="43" height="43">
</div>
<span class="sistem_name">Android</span>
</div>
</div>
<div class="frame">
<span class="sistem_description">Android 4+ <br> &nbsp;</span>
<a href="#tabs-5" class="btn-download"><span><em>Read</em></span></a>
</div>
</li>
</ul>
<div class="tune-description-block">
<div id="tabs-1" class="">
<div class="tune-tab active" style="display:block">
<h2>Installing Whoer on Windows</h2>
 
<ul class="tune-description">
<li>
<span class="step-num">1</span>
<span class="content">First, download the installation file from our website to your PC. Find it on your machine and launch. The first thing you need to do is select the language. We suppose it will be English:
<p><img src="/images/guides/whoerapp-win-en-1.png"/></p>
<p>
An installation wizard will fire up. Just click "Next":
<p><img src="/images/guides/whoerapp-win-en-2.png"/></p>
</span>
</li>
<li>
<span class="step-num">2</span>
<span class="content">On the next stage, you need to accept the license agreement by clicking "I Agree"
<p>
Now select the installation folder. In most cases it may be left by default. Also make sure that the selected hard drive has enough free space, these parameters are also shown here. If everything is OK, click "Install":
<p><img src="/images/guides/whoerapp-win-en-3.png"/></p>
</span>
</li>
<li>
<span class="step-num">3</span>
<span class="content">Copying files will start. In this process, you may be asked to install a driver. It is done automatically, all you need to do is just click "Install".
<p>
Finally, you can instantly start working by hitting "Finish." You may opt to check the box "Run Whoer" in order to launch the program immediately upon closing:
<p><img src="/images/guides/whoerapp-win-en-5.png"/></p>
</span>
</li>
<li>
<span class="step-num">4</span>
<span class="content">
Note that Whoer needs administrator rights to work properly, so it's OK if it asks you to enter your administrator password or just confirm your rights (depending on the system settings).
<p>After the launch, the program minimizes to the tray, so you need to activate the main window by left double-click on the icon.
<p>On the first launch, you have to enter the access code that you have received at your email after you had paid for the service:
<p><img src="/images/guides/whoerapp-win-en-6.png"/></p>
<p>
Check the box "Remember the code" to avoid typing this code in future. You could also check "Autoconnect" to save even more time by forcing the program to connect to the VPN service upon launch. The default country will be the first in the list.
<p>Congratulations, the app is now up and running! Check the connection status: it should be "connected" and there should be a big red button "Disconnect" in the bottom. You can also see here the chosen server, your subscription expiration date, your active IP address, the volume of downloaded and uploaded traffic, and current speed:
<p><img src="/images/guides/whoerapp-win-en-7.png"/></p>
</span>
</li>
<li>
<span class="step-num">5</span>
<span class="content">
To check that everything works as intended you could visit bannerbombproxy. Make sure that your IP address and location that websites register are the same as in the program:
<p><img src="/images/guides/whoerapp-win-en-8.png"/></p>
<p>
The "Settings" tab contains several useful options. For example, you can set up automatic start at system startup not to launch the program manually each time, as well as automatic checking for updates:
<p><img src="/images/guides/whoerapp-win-en-9.png"/></p>
<p>
You can also change DNS settings on this tab. By default, the client uses its own Whoer DNS servers to connect, it allows for better anonymity.
<p>
You can set the UDP connection here. By default, TCP is used, but UDP is faster, though it can work incorrectly on some types of Internet connection.
<p>
Another useful option is VPN connection hiding. Whoer is the only client that
allows hiding the VPN usage from various types of checks. You can mask your
connection as home or mobile.
<p>
If you need any help, click "Technical support" and a live web chat will be opened where you can address any issue with our support personnel.
</span>
</li>
</ul>
</div>
</div>
<div id="tabs-2">
<div class="tune-tab active" style="display:block">
<h2>Using Whoer VPN in Linux</h2>
<span class="description">
Our own application for Linux is under development. At this time
you can connect to Whoer VPN with the help of openvpn package.
</span>
<ul class="tune-description">
<li>
<span class="step-num">1</span>
<span class="content">Install necessary packages via console:
<code>
<pre>
# for Ubuntu/Debian
sudo apt-get install openvpn unzip
# for Fedora / RedHat
sudo yum install openvpn unzip
</pre>
</code>
</span>
</li>
<li>
<span class="step-num">2</span>
<span class="content">
Download <i>whoer-configs.zip</i> archive file (you should get it to your email).
Extract files from this archive and go to <i>whoerconfigs</i> directory:
<code><pre>
unzip whoerconfigs.zip -d ~/
cd ~/whoerconfigs
</pre></code>
</span>
</li>
<li>
<span class="step-num">3</span>
<span class="content">Run openvpn to connect to VPN server. For example:
<code><pre>
sudo openvpn --config ./Whoer_Netherlands_nl.ovpn
</pre></code>
</span>
</li>
</ul>
</div>
</div>
</div>
</div>
<script>
       $(document).ready(function(){
               $("#tabs3").tabs({
                       active : false, 
                       show: { effect: "fadeIn", duration: 500  },

               });
               $('.download-list li').removeClass('ui-tabs-active');
               $('.download-list li').removeClass('ui-state-active');
               $('.download-list li').mouseout(function(){
                       $('.download-list li').removeClass('ui-tabs-active');
                       $('.download-list li').removeClass('ui-state-active');
               });
               $('.tune-description-block').hide();

            $('.download-list li#0').click();
            $('.tune-description-block').show();
       });
</script>
</div>
</div>
</div>
<div class="aside-menu2 vpn-promo-block">
<strong class="title">VPN from Whoer is:</strong>
<ul class="add-menu">
<li><div class="ico"><img src="/images/ico-97.png" width="30" height="30" alt="image description"></div><span>Anonymity</span></li>
<li><div class="ico"><img src="/images/ico-98.png" width="30" height="30" alt="image description"></div><span>Public Wi-Fi</span></li>
<li><div class="ico"><img src="/images/ico-99.png" width="30" height="30" alt="image description"></div><span>Torrents</span></li>
<li><div class="ico"><img src="/images/ico-100.png" width="30" height="30" alt="image description"></div><span>Trading</span></li>
<li><div class="ico"><img src="/images/ico-101.png" width="30" height="30" alt="image description"></div><span>Digital currencies</span></li>
<li><div class="ico"><img src="/images/ico-102.png" width="30" height="30" alt="image description"></div><span>Wire transfers</span></li>
<li><div class="ico"><img src="/images/ico-103.png" width="30" height="30" alt="image description"></div><span>Defence from ISP </span></li>
</ul>
</div>
</div>
<div class="try-btn-row vpn-promo-block">
<a rel="popup[payment-popup]" href="#" class="btn-buy" onclick="amount = 9.90; plan_period = 30; is_trial=false; 
$('.payment-tipe-list a.holder').removeClass('active');
$('li.item-02 a').addClass('active');
$('#payment-popup .popup').css('top', $(document).scrollTop() + 220);
createOrderForm();">
Sign up
</a>
</div>
<div class="description-box vpn-promo-block">
<div class="block title">
<div class="frame titleBlok">
<h2 class="title">5 reasons to use Whoer VPN</h2>
</div>
</div>
<div class="block">
<div class="visual">
<img src="/images/img/lis-1.png" height="237" alt="image description">
</div>
<div class="frame">
<h2 class="title"><span class="title-cifra">1.</span>Whoer VPN has the most protected, secured communication channels all over the world.</h2>
</div>
</div>
<div class="block">
<div class="frame">
<h2 class="title"><span class="title-cifra">2.</span>Secure usage of public Wi-Fi, digital currencies, bank transfers.</h2>
</div>
<div class="visual right">
<img src="/images/img/lis-2.png" height="235" alt="image description">
</div>
</div>
<div class="block">
<div class="visual">
<img src="/images/img/lis-3.png" height="238" alt="image description">
</div>
<div class="frame">
<h2 class="title"><span class="title-cifra">3.</span>Your ISP doesn't know the sites you visit, the sites don't know who visits them.</h2>
</div>
</div>
<div class="block">
<div class="frame">
<h2 class="title"><span class="title-cifra">4.</span>You use the Internet the way people in any other country do with access to lots of services.</h2>
</div>
<div class="visual right">
<img src="/images/img/lis-4.png" height="235" alt="image description">
</div>
</div>
<div class="block">
<div class="visual">
<img src="/images/img/lis-5.png" height="235" alt="image description">
</div>
<div class="frame">
<h2 class="title"><span class="title-cifra">5.</span>Nobody can link your Internet activity to your actual address. Your incognito is never revealed.</h2>
</div>
</div>
</div>
<div class="reviews-columns description-box vpn-promo-block logo ">
<div class="review-holder block ">
<div class="frame">
<h2 class="title">Guaranteed access:</h2>
</div>
<div class="block-gallery">
<div class="gallery-holder">
<ul>
<li>
<img src="/images/img/logo-1.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-2.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-3.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-4.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-5.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-4.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-1.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
<li>
<img src="/images/img/logo-2.png" width="150" height="50" alt="image description">
<span class="title-gallery">
</span>
</li>
</ul>
</div>
<a href="#" class="prev">prev</a>
<a href="#" class="next"></a>
</div>
</div>
</div>
<div class="vpn-promo-block">
<div class="proxy-box">
<div class="proxy-box-holder">
<div class="varticle">
<h1><strong class="proxy-title">Who needs a VPN and why?</strong></h1>
<ul class="articles-list">
<li>
<p align="justify">
VPN, a virtual private network, is known as one of the most reliable methods of protecting privacy online. There are free and paid VPN services with varying degrees of quality, but nonetheless they provide a decent level of data security and privacy.
</p>
<br>
<p align="justify">
Partly, the popularity of VPNs is driven by media that have covered many security scandals over recent years. As a result, people started to think about their security, and much information on <b>how to get VPN</b> appeared.
</p>
<br>
<p> <strong class="article-title">Secure VPN services</strong></p>
<p align="justify">
Many users nowadays know about the IP address. It is a kind of a unique identifier that allows to identify any web user down to his or her location. The trick is that each time you visit a site, even from a phone, you leave your IP address on it. Now this site knows that you were here and can even sell this information to advertisers. Such kind of data is usually called logs.
</p>
<br>
<p align="justify">
And this is why you need a solid <b>VPN service provider</b> to help you hide your IP and block any logging about your activity on websites and Internet as a whole. From now on, no site will be able to track you. Furthermore, your VPN will encrypt all your traffic so that nobody will be able to intercept it. Whoer VPN offers exactly this: <b>good VPN service</b> with powerful options.
</p>
<br>
<p> <strong class="article-title">Should you buy VPN or find a free one?</strong></p>
<p align="justify">
Free or very <b>cheap VPN services</b> do exist, but usually they provide just a semblance of protection. They may be too slow, lack encryption and servers in other countries, or some other important options. Fortunately, buying a good VPN service with a full functionality is not as expensive as you might think.
</p>
<br>
<p align="justify">
Even the top-notch, <b>fastest VPN services</b> have very affordable price tags, usually several dollars a month, and provide many discounts. Buying a full year usually gives the maximum discount. But this would be very useful for everyone who does business on the web, works with email heavily, or loves social networking.
</p>
<br>
<p align="justify">
A truly <b>anonymous VPN</b> service will thoroughly hide and clear all the traces of your online presence giving you that wonderful feeling of total security and freedom. You will never longer fear that your data may end up somewhere. Moreover, you’ll be able to visit censored sites or sites inaccessible in your country by means of traffic rerouting.
</p>
</li>
</ul>
</div>
</div>
</div>
</div>
<div class="popup-holder" id="payment-popup" style="display: none;">
<div class="bg">&nbsp;</div>
<div class="popup" style="margin-top: -328.5px;">
<a href="#" class="btn-close">close</a>
<div class="heading">
<strong class="title">Create order</strong>
</div>
<div id="checkout-page" style="display: none"> </div>
<form class="order-form order-form2" action="">
<fieldset>
<div class="two-columns">
<div class="col">
<div class="row">
<div class="ico">
<img src="/images/ico-81.png" width="48" height="48" alt="image description">
</div>
<div class="order-countries default-hidden no-in-trial">
<span class="num">11</span>
<span class="description">countries<br>included</span>
</div>
<div class="order-countries order-countries-free default-hidden in-trial-only">
<span class="num">11</span>
<span class="description">countries<br>included</span>
</div>
</div>
</div>
<div class="col">
<div class="row ">
<div class="ico">
<img src="/images/ico-84.png" width="48" height="48" alt="image description">
</div>
<div class="text-holder whide">
<input name="email" class="text" type="text" placeholder="Your e-mail..."/>
<input name="hidden_captcha" type="hidden" value="e8132a9fecf615835d9b54cdbecc15ed5f9f3386e1e4e10710ca2de4a0b70bee"/>
</div>
</div>
</div>
<div style="clear: both"></div>
<div>  
<div id="order-error" class="error-field" style="display: none">
<span id="invalid-email" class="order-errors">Invalid email</span>
<span id="internal-error" class="order-errors">Internal error. Try again later or contact support team</span>
<span id="serverside-error" class="order-errors"></span>
</div>
<div id="order-in-progress" class="processing-field" style="display: none">
<img src="/images/preloader.gif"/>
<strong>Please, wait... order is creating.</strong>
</div>
</div>
</div>
<div class="bottom-row" id="order-buttons">
<span class="payment-sum">Amount: <strong>$<span id="amount">0.00</span></strong></span>
<input onclick="makeOrderRequest(); return false;" class="no-in-trial btn-pay" type="submit" name="pay" value="Pay"/>
<input onclick="makeOrderRequest(); return false;" class="in-trial-only btn-pay" type="submit" name="pay" value="Try"/>
<a class="btn-trable accessRecover">Recover<br> access</a>
</div>
</fieldset>
</form>
<div class="recoverBlock">
<form class="ping-form" method="POST" action="/vpn/recovery">
<fieldset class=" ">
<div class="text-holder">
<input type="text" name="email" class="text " value="" autofocus="" placeholder="E-mail">
</div>
<input type="submit" value="Recover" class="btn-ping">
</fieldset>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="footer">
<div class="footer-holder">
<em class="copyright">Copyright &copy; BannerBombProxy 2016<script>new Date().getFullYear()>2010&&document.write("-"+new Date().getFullYear());</script></em>
<div class="nav-column">
<ul class="nav">
<li><a href="/domain/terms_of_use">Terms of use</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="/vpn">Vpn</a></li>
<li><a href="/im">IM</a></li>
<li><a href="/domain/contacts">Contacts</a></li>
</ul>
<div class="partners">
<span class="join_us"><strong class="title">Join us:</strong></span>
<a target="_blank" href="https://www.facebook.com/BannerBomb/"><img alt="fb" src="/images/joinus/fb2.png"></a>
<a target="_blank" href="https://twitter.com/BannerBomb_1"><img alt="tw" src="/images/joinus/tw.png"></a>
<a target="_blank" href="https://vk.com/BannerBomb"><img alt="vk" src="/images/joinus/vk.png"></a>
<a target="_blank" href="https://www.instagram.com/whoer_net/"><img alt="ig" src="/images/joinus/ig.png"></a>
<a target="_blank" href="https://www.youtube.com/channel/UCinpqmUtvCExGTBXZ3wCXyA"><img alt="yt" src="/images/joinus/yt.png"></a>
</div>
</div>
</div>
</div>
<script defer type="text/javascript" src="/js/jquery.main.js?1450273008"></script>
<script>
$(document).ready(function() {
    $('.select-lang #first-lang').click(function(event) {
        if ($('.select-lang .drop').is(':visible')) {
            $('.select-lang .drop').hide();
        } else {
            $('.select-lang .drop').css('display', 'block'); 
        }
        return false;
    });
});
</script>
  <script type='text/javascript'>
(function(){ var widget_id = '1kHPmnmlj1';var d=document;var w=window;function
l(){ var s = document.createElement('script'); s.type = 'text/javascript';
s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss
= document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s,
ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();</script>
 
 
<script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-59809509-1']);
      _gaq.push(['_setDomainName', '../']);
      _gaq.push(['_setAllowHash', 'false']);
      _gaq.push(['_trackPageview']);

      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>
 
 
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter21087886 = new Ya.Metrika({
                    id:21087886,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/21087886" style="position:absolute; left:-9999px;" alt="ym"></div></noscript>
 
</body>
</html>
