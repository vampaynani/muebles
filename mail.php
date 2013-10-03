<?php
$url = 'http://localhost/baum3/ordeny.../muebles/';
$seller = 'info@ideasenorden.mx';
if(isset($_REQUEST['mail']) && $_REQUEST['mail'] !== NULL){
	$usrmail = $_REQUEST['mail'];
	$mail = template( $_REQUEST['content'] );
	$mail = str_replace('src="', 'src="'.$url, $mail);

	$headers = "From: " . $seller . "\r\n";
	$headers .= "Reply-To: ". $seller . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	mail($usrmail, 'Este es el clóset que diseñaste', $mail, $headers);
	mail($seller, "Clóset de $usrmail", $mail, $headers);
	echo 'El mueble ha sido enviado a tu correo';
}
function template( $content ){
return '<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
</head>
<body>
	<div class="container" style="margin: 0 auto;width: 710px">
		<img id="logo" src="img/logo.png" style="float: left">
		<div id="closet" style="width: 470px; float: left; margin-left:35px">' . $content . '</div>
		<p style="padding-top:25px; margin:8px 0; font-family:sans-serif; color: #7a6850; clear: both">Este es el clóset que diseñaste.</p>
		<p style="margin:8px 0; font-family:sans-serif; color: #7a6850; clear: both">Estamos listos para hacerlo realidad en el momento que tú quieras.</p>
		<p style="margin:8px 0; font-family:sans-serif; color: #7a6850; clear: both">Llámanos para agendar una cita, alguno de nuestros asesores irá a dónde nos indiques.</p>
		<a style="margin:8px 0; font-family:sans-serif; font-size: 1.7em; text-decoration: none; color: #f36a22; clear: both" href="tel:5543 7694">5543 7694</a>
		<p style="margin:8px 0; font-family:sans-serif; color: #7a6850; clear: both">División del Norte 623-A, Colonia Del Valle</p>
		<a style="margin:8px 0; font-family:sans-serif; font-size: 1.2em; font-weight:bold; text-decoration: none; color: #f36a22; clear: both" href="http://www.ideasenorden.mx">www.ideasenorden.mx</a>
	</div>
</body>
</html>';
}
?>
