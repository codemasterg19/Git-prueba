//COMENTARIOS DE UNA SOLA LINEA
/*COMENTARIOS
DE TODA LA LINEA*/

//IMPRIMIR EN CONSOLA
console.log("Hola Mundo");

//DECLARACION DE VARIABLES
let nombre= "Pablo";
let apellido = "Jimenez";
let edad = 33;

//CONCATENA CADENAS

console.log("Mi nombre es "+nombre+ " "+apellido+" mi edad: "+edad);

//TEMPLATE DE CADENAS - INTERPOLACION DE CADENAS

console.log(`Mi nombre es ${nombre} ${apellido} mi edad: ${edad}`);

//VARIABLES DE TIPO UNDEFINED
let a;
console.log(a);

//TIPO DE DATO NAN
let b=5;
let c="hola";
let multi=b+c;
console.log(multi)

//TIPO DE DATOS OBJETO
const personas ={
    nombre:"Pablo",
    apellido: "Jimenez",
    edad: 33,
    estado_civil:"Soltero",
    pasatiempos:["entrenar","programar","videojuegos"],
    saludar:function () {
        return "buenas noches!";
    }
}

console.log( personas.saludar());

//TIPO DE DATOS ARRAY

const arreglo =["hola", true, 33, 'chao'];
console.log(arreglo);
console.log(arreglo[1]);

arreglo.push("Pedro");
console.log(arreglo);
arreglo.pop();
console.log(arreglo);

//OPERADOR TYPEOF
console.log(typeof b)