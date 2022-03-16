var cont = 0;
var res = [];
var long = 0;

do {

    var num1 = Math.random() * (6 - 1) + 1;
    var num2 = Math.random() * (6 - 1) + 1;
    
    num1 = Math.trunc(num1);
    num2 = Math.trunc(num2);

    var suma = num1 + num2;

    res.push(suma);

    cont++;

}while(cont != 36000);

long = res.length;

console.log("El vector tiene una longitud de " + long + " numeros");
console.log("Los valores de los dados són: ");
console.log(res);
