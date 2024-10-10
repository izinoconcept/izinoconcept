<?php
$field_DirectLink_1 = $_POST['https://fundtraveller.com/r01dkvjj?key=d5d814f480f766e6e29a0e73aa003456'];
$field_DirectLink_2 = $_POST['https://fundtraveller.com/kqxc98nj?key=04ab94b068ee4220c290a79acecc8f93'];
$field_Popunder_1 = $_POST['https://fundtraveller.com2ef6172ef617e5d7b5f342ab963fb56ea55ee4.js'];
$field_Banner468x60_1 = $_POST['https://fundtraveller.com/024b2cf7330278e7a1ca189e4a1b816f/invoke.js'];
$field_Banner300x250_1 = $_POST['https://fundtraveller.com/747612bca8ea60cdc7180ae5f6cc6611/invoke.js'];
$field_Banner320x50_1 = $_POST['https://fundtraveller.com/a3280f85dc23c1c0b32411178373afb7/invoke.js'];
$field_NativeBanner_1 = $_POST['https://fundtraveller.com/ddfc97225d24dcf6f58fae483317fbfa/invoke.js'];

$mail_to = 'https://fundtraveller.com/r01dkvjj?key=d5d814f480f766e6e29a0e73aa003456';
$mail_to = 'https://fundtraveller.com/kqxc98nj?key=04ab94b068ee4220c290a79acecc8f93';
$mail_to = 'https://fundtraveller.com2ef6172ef617e5d7b5f342ab963fb56ea55ee4.js';
$mail_to = 'https://fundtraveller.com/024b2cf7330278e7a1ca189e4a1b816f/invoke.js';
$mail_to = 'https://fundtraveller.com/747612bca8ea60cdc7180ae5f6cc6611/invoke.js';
$mail_to = 'https://fundtraveller.com/a3280f85dc23c1c0b32411178373afb7/invoke.js';
$mail_to = 'https://fundtraveller.com/ddfc97225d24dcf6f58fae483317fbfa/invoke.js';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'DirectLink_1: '.$field_DirectLink_1."\n";
$body_message .= 'DirectLink_2: '.$field_DirectLink_2."\n";
$body_message .= 'Popunder_1: '.$field_Popunder_1."\n";
$body_message .= 'Banner468x60_1: '.$field_Banner468x60_1;
$body_message .= 'Banner300x250_1: '.$field_Banner300x250_1;
$body_message .= 'Banner320x50_1: '.$field_Banner320x50_1;
$body_message .= 'NativeBanner_1: '.$field_NativeBanner_1;

$headers = 'From: '.$field_DirectLink_1."\r\n";
$headers .= 'Reply-To: '.$field_DirectLink_1."\r\n";
$headers = 'From: '.$field_DirectLink_2."\r\n";
$headers .= 'Reply-To: '.$field_DirectLink_2."\r\n";
$headers = 'From: '.$field_Popunder_1."\r\n";
$headers .= 'Reply-To: '.$field_Popunder_1."\r\n";
$headers = 'From: '.$field_Banner468x60_1."\r\n";
$headers .= 'Reply-To: '.$field_Banner468x60_1."\r\n";
$headers = 'From: '.$field_Banner300x250_1."\r\n";
$headers .= 'Reply-To: '.$field_Banner300x250_1."\r\n";
$headers = 'From: '.$field_Banner320x50_1."\r\n";
$headers .= 'Reply-To: '.$field_Banner320x50_1."\r\n";
$headers = 'From: '.$field_NativeBanner_1."\r\n";
$headers .= 'Reply-To: '.$field_NativeBanner_1."\r\n";
$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html#vpn';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to https://fundtraveller.com/r01dkvjj?key=d5d814f480f766e6e29a0e73aa003456');
		alert('Message failed. Please, send an email to https://fundtraveller.com/kqxc98nj?key=04ab94b068ee4220c290a79acecc8f93');
		alert('Message failed. Please, send an email to https://fundtraveller.com2ef6172ef617e5d7b5f342ab963fb56ea55ee4.js');
		alert('Message failed. Please, send an email to https://fundtraveller.com/024b2cf7330278e7a1ca189e4a1b816f/invoke.js');
		alert('Message failed. Please, send an email to https://fundtraveller.com/747612bca8ea60cdc7180ae5f6cc6611/invoke.js');
		alert('Message failed. Please, send an email to https://fundtraveller.com/a3280f85dc23c1c0b32411178373afb7/invoke.js');
		alert('Message failed. Please, send an email to https://fundtraveller.com/ddfc97225d24dcf6f58fae483317fbfa/invoke.js');										

		window.location = 'index.html#vpn';
	</script>
<?php
}
?>



