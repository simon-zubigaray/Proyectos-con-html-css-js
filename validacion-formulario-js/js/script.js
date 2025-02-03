const firebaseConfig = {
  apiKey: "",
  authDomain: "datos-de-formulario-c7f61.firebaseapp.com",
  projectId: "datos-de-formulario-c7f61",
  storageBucket: "datos-de-formulario-c7f61.appspot.com",
  messagingSenderId: "681766543320",
  appId: "1:681766543320:web:c585921193fa395081dcad",
  measurementId: "G-27S6LB70GC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

document.querySelector('#formulario').addEventListener('submit', (event) => {
  event.preventDefault();

  let entradaNombre = document.querySelector('#name');
  let entradaNombreError = document.querySelector('#nameError');

  //Validamos el campo nombre fijandonos si es igual a vacio y con el trim eliminamos los espacios vacios
  if (entradaNombre.value.trim() === '') {
    entradaNombreError.textContent = 'Por favor, introduzca un nombre valido.';
    entradaNombreError.classList.add('error-message');
  } else {
    entradaNombreError.textContent = '';
    entradaNombreError.classList.remove('error-message');
  }

  let entradaMail = document.querySelector('#email');
  let entradaMailError = document.querySelector('#emailError');
  let emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Si el test es negativo entra al if, usamos el metodo test para validar el entradaMail.value con el pattern
  if (!emailPattern.test(entradaMail.value)) {
    entradaMailError.textContent = 'Por favor, introduzca un email valido.';
    entradaMailError.classList.add('error-message');
  } else {
    entradaMailError.textContent = '';
    entradaMailError.classList.remove('error-message');
  }

  let entradaContra = document.querySelector('#password');
  let entradaContraError = document.querySelector('#passwordError');
  let contraPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

  //Validamos el password
  if (!contraPattern.test(entradaContra.value)) {
    entradaContraError.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros, mayusculas, minusculas y caracteres especiales.';
    entradaContraError.classList.add('error-message');
  } else {
    entradaContraError.textContent = '';
    entradaContraError.classList.remove('error-message');
  }

  //Si todos los campos son validos hacemos lo siguiente
  if (!entradaNombreError.textContent && !entradaMailError.textContent && !entradaContraError.textContent) {

    //BackEnd que recibe la info, en este caso firebase
    db.collection("users").add({
      nombre: entradaNombre.value,
      email: entradaMail.value,
      password: entradaContra.value
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.querySelector('#formulario').reset();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };
});