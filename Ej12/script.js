var expr1 = "Nací el 05/04/1982 en Donosita";
var exprRel1 = /[a-zA-Z0-9 ]* [0-9]{2}\/[0-9]{2}\/[12][0-9]{3}/;

if(exprRel1.test(expr1)){
    console.log("contiene una fecha");
}else {
    console.log("no contiene una fecha");
}

var expr2 = "miquelangel.montero92@@gmail.com";
var exprRel2 = /[a-zA-Z1-9.-]*@{1}[a-z]*\.([a-z]{2,3})/;

if(exprRel2.test(expr2)){
    console.log("contiene un email");
}else {
    console.log("no contiene un email");
}