$(document).ready({
		
	var ul = $('#error');

	$('#registrate').on('click',function(event){

		event.preventDefault();

		var nombre = $('#nombre').val();
		var mail = $('#mail').val();

		if(validar(nombre,mail) == true){
			var jSON = {"nombre":nombre,"mail":mail}
			console.log(jSON);
		}	
	});

});

/**
  *  Valido que el campo contenga caracteres
  *  @params campo / String
  *  return boolean 
  **/

function validarRequeridos(campo){

	campo.trim();

	if(campo.length == 0){

		return false;
	}
	
	return true;
}

/**
 *  Valida 
 *
 **/

function validarMail(mail){

  mail.trim();

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if(emailRegex.test(mail)){

  	return true;
  }

  return false;
}

function validar(nombre,mail){

	valido = true; 

		if(validarRequeridos($('#nombre').val()== false)){

			msg = "<li>El nombre es un campo requerido</li>";
			ul.append(msg);
			valido = false;
		}

		if(validarRequeridos(mail)== false)){

			msg = "<li>El mail es un campo requerido</li>";
			ul.append(msg);
			valido = false;

		}else{

			if(validarMail(mail) == false){

				msg = "<li>Debe ingresar mail valido.</li>";
				ul.append(msg);
				valido = false;	
			}
		}

		return valido;
}