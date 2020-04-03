document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault()
  ifcondition()
  
})

function ifcondition()
{
  if (nombre === "" || dui === "" || direccion === "" || miembros === "" || duis === "" || subsidio === "" || salario === "" || negocio === "" || acepto === "" || tele === "") 
  {
    let url2 = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nuvola_apps_error.svg/1024px-Nuvola_apps_error.svg.png`;
   window.open(url2);
    }
  
 else {
    
  var firebaseConfig = {
    apiKey: "AIzaSyBpNdAC-sRZ8bfL7YGjuwLiK_63wI_AqAY",
    authDomain: "formulariobd-2edb9.firebaseapp.com",
    databaseURL: "https://formulariobd-2edb9.firebaseio.com",
    projectId: "formulariobd-2edb9",
    storageBucket: "formulariobd-2edb9.appspot.com",
    messagingSenderId: "853635583965",
    appId: "1:853635583965:web:8bb024b429ec865b17f034",
    measurementId: "G-1VH7PCYE2E"
  };

  firebase.initializeApp(firebaseConfig)
  let database = firebase.database()
  let ref = database.ref("formulario")
   let url = `https://www.tesisinformatica.es/cms/wp-content/uploads/2017/06/ok-300x300.jpg`;
   
  let data = {
  nombre : document.querySelector("#nombre").value ,
  dui : document.querySelector("#dui").value ,
  direccion : document.querySelector("#direccion").value ,
  tele : document.querySelector("#tele").value ,
  miembros : document.querySelector("#miembros").value ,
  duis : document.querySelector("#duis").value ,
  subsidio : document.querySelector("#subsidio").value ,
  salario : document.querySelector("#salario").value ,
  negocio : document.querySelector("#negocio").value ,
  acepto : document.querySelector("#acepto").value ,
  resp : document.querySelector("#respuesta") ,
  }
  ref.push(data)
  window.open(url);
 }

  }

    
 
