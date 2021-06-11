<?php

	$destino = "antonella.roggio5@gmail.com";

	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];

	$header = "Este mensaje proviene de la pagina http://www.antonellaroggio.com.ar/ \n De: " . $nombre . "\n E-mail: " . $email;

	mail($destino, $asunto, $mensaje, $header);

	echo "<script>alert('Su correo a sido enviado con exito');</script>";
	echo "<script>setTimeout(location.href = \"../\",1000)</script>";

?>