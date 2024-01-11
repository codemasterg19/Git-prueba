//INGRESO DE DATOS EN EL DOCUMENTO
document.writeln("Hola mundo");
alert("hola mundo");

//INGRESAR DATOS POR TECLADO
let numero1 = prompt("Ingrese el número")
let numero2 = prompt("Ingrese otro número")
let suma= parseInt(numero1)+ parseInt(numero2) 



document.writeln(suma)


//console.log(`suma`)


//TABLA DE MULTIPLICAR
let mult = parseInt(prompt("Ingrese el número"))
for(let i=1; i<=10; i++ ){
    let multiplicar = mult*i
    console.log(i +" X "+ mult +" = "+ multiplicar)
}

