document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "50370451939";

  let nombre = document.querySelector("#nombre").value;
  let dui = document.querySelector("#dui").value;
  let direccion = document.querySelector("#direccion").value;
  let telefonoc = document.querySelector("#telefonoc").value;
  let miembros = document.querySelector("#miembros").value;
  let duis = document.querySelector("#duis").value;
  let subsidio = document.querySelector("#subsidio").value;
  let salario = document.querySelector("#salario").value;
  let negocio = document.querySelector("#negocio").value;
  let acepto = document.querySelector("#acepto").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*San José Guayabal*%0A
		*Formulario Paquete Solidario*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${nombre}%0A
		*DUI:*%0A
		${dui}%0A
		*Dirección:*%0A
        ${direccion}%0A
        *Telefono:*%0A
        ${telefonoc}%0A
		*Miembros de la familia:*%0A
		${miembros}%0A
		*Duis:*%0A
		${duis}
		*¿Recibio Subsidio?*%0A
		${subsidio}%0A
		*¿Recibe Salario?*%0A
		${salario}%0A
		*¿Tiene negocio?*%0A
		${negocio}%0A
		*¿Acepto los terminos?*%0A
		${acepto}%0A`;

  if (nombre === "" || dui === "" || direccion === "" || miembros === "" || duis === "" || subsidio === "" || salario === "" || negocio === "" || acepto === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${nombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu formulario, ${nombre}`;

  window.open(url);
});