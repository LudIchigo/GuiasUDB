// 1) Cantidad de cifras, 2) Cantidad de cifras impares, 3) Cantidad de cifras pares, 4) Suma
// de cifras impares, 5) Suma de cifras pares, 6) Suma de todas las cifras, 7) Cifra mayor, 8) Cifra menor.

let numero = Number(prompt("Digite el numero que desee")).toFixed(0);

let numero1 = numero.toString();

document.write("Cantidad de cifras " +  CantidadCifras() + "</br>");
document.write("\nCantidad de cifras impares " + CifrasInpares() + "</br>");
document.write("\n Cantidad de cifras pares " + "</br>");
document.write("\nSuma de cigras impares " + "</br>");
document.write("\nSuma de cifras pares " + "</br>");
document.write("\nSuma de todas lac cifras " + "</br>");
document.write("\nCifra Mayor" + "</br>");
document.write("\nCifra menor " + "</br>");

function CantidadCifras(){

    return numero1.split("").length;
}

function CifrasInpares(){
    let CifrasInpares = 0;

    let cifras = numero1.split("");

    for (let i = 0; i < cifras.length; i++){
        if (cifras[i] % 2 == 1){
            CifrasInpares++;
            console.log(cifras[i]);
            }    else {
                
        }
    }
        return CifrasInpares;
}