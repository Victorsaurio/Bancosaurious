//inicio//

///      si va      alert ("Bienvenido al simulador de credito de Bancosaurio, responde los campos a continuacion para obtener un estimado de credito")


//verificacion de edad y datos de contacto//

// si va      const edadminima = parseInt(prompt ("Antes de iniciar debemos saber su edad por favor ingresela"))
//if (edadminima < 18) {
    alert("Debes tener un minimo de 18 años para acceder al simulador")
//} else {
//  si va  alert  ("Bienvenido al simulador de credito de Bancosaurio")
    // const nombre = prompt ("Ingrese su nombre")
    // const apellido = prompt ("Ingrese su apellido")
    // const telefono = prompt ("Ingrese su teléfono")
    // alert ("Su nombre es: " + nombre + " " + apellido + "Y su telefono es: " + telefono + " ¿Es correcto?")
//}


//recopilacion de datos economicos//

//alert ("A continuacion debera ingresar un aproximado de su sueldo fijo y en recuadro posterior un estimado de ingresos extra que tenga en el mes para realizar un calculo de credito")

//function suma (ingreso1, ingreso2) {
//    {
//    const resultadoo = ingreso1 + ingreso2
//    console.log ("¿La suma de sus ingresos es correcta? " + resultado)
//}
//const pingreso1 = parseInt (prompt ("Ingrese su sueldo fijo"))
//const pingreso2 = parseInt (prompt ("Ingrese sus extras"))

//suma(pingreso1, pingreso2)


//recopilacion de datos familiares//

//alert("A continuacion ingresa 2 personas que seran sus referencias para tu proceso de credito")

//function Persona (nombre, edad, telefono, email) {
    // this.nombre = nombre;
    // this.edad = edad;
    // this.telefono = telefono;
    // this.email = email
{}
//     const nombre = prompt("Ingrese nombre de la persona")
//     const edad = prompt("ingrese edad de la persona")
//     const telefono = prompt("Ingrese telefono de persona")
//     const email = prompt("Ingrese email de persona")
//     const persona1 = new Persona (nombre, edad, telefono, email)
//     alert ("Su nombre es: " + nombre + " " + "su edad " + edad + "su telefono es : " + telefono + "su email es : " + email + " ¿Es correcto?")
//     const persona2 = new Persona (nombre, edad, telefono, email)
//     alert ("Su nombre es: " + nombre + " " + " su edad " + edad + " su telefono es : " + telefono + "su email es : " + email + " ¿Es correcto?")
//Puntuacion de conductas de pago//

//alert ("En la escala del 1 al 5 ¿como calificaria su capacidad de pago?, siendo 1 muy mala y 5 excelente")
//alert ("En la escala del 1 al 5 ¿como calificaria su puntualidad de pago?, siendo 1 muy tarde y 5 a tiempo")
const puntuacion = [1, 2, 3, 4, 5]
console.log = puntuacion [4]
console.log = puntuacion [3]
let resultado = puntuacion[1] + puntuacion[2] / 2

let div = document.getElementById("inicio")
let nombrebanco = document.getElementById("nombrebanco")
//console.log("nombrebanco")

let producto = document.getElementsByClassName ("producto")
//console.log("producto")

const BotonCalcular = document.getElementById ("BotonCalcular")
// BotonCalcular.addEventListener("submit") (e) => {
//     e.preventDefault()
//     const operaciom = monto / 100 * interes * anios + monto
// })


const formulario = document.getElementById("formulario")
const inputnombre = document.getElementById("nombre")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("su nombre es: " + inputnombre.value)
})

//  Almacenamiento

//const nombreJSON = Json.stringify("nombre")
//console.log(nombreJSON)

// const promesa = new Promise((resolve, reject) => {
//     setTimeout( () => {
//     if (numero === 5) {
//         resolve()
//     }else {
//         reject ();
//     }
//     (3000)
// })
const botoncoticorre = document.getElementById("botoncoticorre")

botoncoticorre.addEventListener("click", () => {
    Swal.fire({
    title: '¡Listo!',
    text: 'Recibiras tu cotizacion por correo antes del proximo renacimiento',
    icon: 'success',
    confirmButtonText: 'Va'
    })
    Toastify({
        text: "Recuerda recomendar con tus amistades :) ",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
})
const url = "https://rickandmortyapi.com/api/character"

fetch(url)
    .then((Response) => {
        return Response.json
    }).then( (json) => {
        const personajes = json.results

        renderizarpersonajes(personajes)
    })

function renderizarpersonajes(personajes) {

    for(const personaje of personajes) {
        const div = document.createElement("div")
        const img = document.createElement("img")
        div.append(img)
    }
}
const contenedor = document.getElementById("contenedor")