//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
// Obtén referencias al botón y a la ventana de inicio de sesión
const btnLogin = document.getElementById('btn-login');
const ventanaLogin = document.getElementById('ventana__login');

// Agrega un evento de clic al botón
btnLogin.addEventListener('click', function () {
    // Muestra u oculta la ventana de inicio de sesión según su estado actual
    if (ventanaLogin.style.display === 'none') {
        ventanaLogin.style.display = 'block';
    } else {
        ventanaLogin.style.display = 'none';
    }
});


//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

document.getElementById("btn-login").addEventListener("click", function () {
    document.getElementById("fondo-difuminado").style.display = "block";
    // Aquí agregas el código para mostrar tu ventana de login encima del fondo difuminado
});

document.getElementById("btn-login").addEventListener("click", function () {
    document.getElementById("fondo-difuminado").style.display = "block";
    document.getElementById("ventana__login").style.display = "block";
});

document.getElementById("cerrar-ventana").addEventListener("click", function () {
    document.getElementById("fondo-difuminado").style.display = "none";
    document.getElementById("ventana__login").style.display = "none";
});



// Obtiene los elementos del formulario de inicio de sesión y registro
const loginForm = document.querySelector('.formulario__login');
const registerForm = document.querySelector('.formulario__register');

// Inicia sesión con Firebase
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Muestra un mensaje de confirmación
      alert('¡Inicio de sesión exitoso!');

      // Redirige al usuario a la página de inicio
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Registra al usuario con Firebase
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = registerForm.querySelector('input[type="text"]:first-of-type').value;
  const email = registerForm.querySelector('input[type="text"]:nth-of-type(2)').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Actualiza el nombre del usuario
      userCredential.user.updateProfile({
        displayName: name
      }).then(() => {
        // Muestra un mensaje de confirmación
        alert('¡Registro exitoso!');

        // Redirige al usuario a la página de inicio
        window.location.href = 'index.html';
      });
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Muestra un mensaje de bienvenida si el usuario ya ha iniciado sesión
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const displayName = user.displayName;
    alert(`¡Bienvenido, ${displayName}!`);
  }
});



