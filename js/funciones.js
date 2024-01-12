//FUNCIOES DECLARADAS HOISTING

console.log(saludar("Pablo"))

function saludar(nombre) {
    return `hola, buenas noches ${nombre}`
}

console.log(saludar("Pablo"))

//FUNCIONES TIPO FECHA
//let saludo= () => {}

let saludo = () => "hola, buenas noches"
console.log(saludo())

//EJERCICIOS

//1

let generarCaracteres = (numero, caracter) => {
    let respuesta = ""
    for (let i=0; i<numero; i++){
        respuesta+= caracter
        }

        return respuesta
}

console.log(generarCaracteres(7,"b"))

//2
 let sumaArreglo = (arreglo) => {
    let suma=0
    for (let i=0; i<arreglo.length ; i++){
        suma+= arreglo[i]
    }
    return suma
 }

 console.log(sumaArreglo([3,4,8,7,4]))

 //3

 let objetoF = (objeto) =>{
    return Object.values(objeto)
 }

 console.log(objetoF({nombre: "Andres", edad: 30, bol: true}))

 //3

let precio= parseFloat(prompt("Ingrese el precio"))
let descuento = parseFloat(prompt("Ingrese descuento"))

let calculo = (precio, descuento) => {
    let precioNeto = precio - descuento
    let iva = (parseFloat(precioNeto) * 0.12)
    let precioF = precio + iva
    document.writeln("Precio = "+ precioNeto+", iva = "+ iva+", precio Final ="+ precioF)

}

console.log(calculo(precio,descuento))

//4


prompt("Seleccione la Operacion:\n Suma = 1\ln Resta = 2\ln Resta = 3\ln Multiplicar = 3\ln Resta = 4  ")